const { getResponse,
   getParaPhrase,
    getImage,
    generateLogo 
,JpgtoPngconverter
,pngtojpgcoverter
,getSpecialtool
,getDecision
,getSeo
,resizeImage
,getCodeConverter,
getMarketing,
generateQR,
generateComponent,
getRepharsedata,
uploadImage,
jpgtopdfconverter,
mergePDF,
pngtopdfconverter,
convertVideoToAudio,
fbDownloader,
twitterDownloader,
text2Pdf,
Podcast,
svgConverter,
zipmaker,
gifConverter,
getTextSummary,
zipExtractor,
getNotesSummary,
pdftotext,
compressedVideo,
extractpdftoimages ,
getCompany,
pdfTranslate,
getDomainNames,
video_Text_converter,
generateCurrentTopics,
trimvideo,trimaudio,
NDA_Agreement,
deletepdf,
Business_Slogan,
NCA_Agreement,
generateYouTubeScript,
TriviaGenerate,
improveContent,
removeAudio,
genratedPolicy,
generatePoll,
generateBusinessPlan,
addAudio,
uploadAndSummarize,
chatWithPdf,
languageTranslation,
audioTranslate,
videoTranlator,
youtubeTranslator,
financeadvisor,
AiDetector,
newsSummerizer,
generateTextInfographic,
createAvatar,
compressImage,
generateSWOT,
generateCoverLetter,
downloadytdl,
generateLinkedInPost,
generateLinkedInBio,
generateLinkedInRecommendation,
generateConnectionRequest,
youtubeDownloader,
aboutMe,
tiktokCaptionGenerate,
generateTitle,
generateVideoTitle,
generateVideoIdeas,
generateScriptOutline,
CalenderContentGenerator,
tiktokhastag,generateReelScript,
generateReelIdeas,generateAboutCompanyPage,generateTweetReply,generateSocialMediaPost,
generateBulletPoints,generateEventName,generateProfessionalBio,generateSeoBrief,generateCompanyProfile,
generateEventInvitationEmail,generateTinderBio,generateEventReminderEmail,generateInstagramHashtags,
generateFollowUpEmail,generateJobOfferLetter,generateResumeSkills,generateElevatorPitch,generateEmailSubjectLine,
generateReviewResponse,generateJobDescription,generateResignationLetter,generatePerformanceReview,
generateCallToAction,generateMeetingInvite,generateProjectReport,generateGMBProductDescription,
generateGMBPost,generateProductDescription,generateReferenceLetter,generateProductName,
generateCatchyTagline,generateBusinessProposal,generateSOP,generateExperienceLetter,generateMotto,
generateProductBrochure,generateBusinessMemo,generatePAS,generateAIDA,generateColdEmail,generateMetaDescription,
generateNewsletterName,generateJobSummary,generateJobQualifications,generateJobResponsibilities,
generateSubheadings,generateUVP,generateOKR,generateProjectTimeline,uploadImageBG,generateStatistics,
generatePRIdeas,transcribeMeeting,pdfToAudio,pdfSign,docsToAudio,generateImagePrompt,extractText,
instaImageVideoDownloader,generateCaption,generateInstagramBio,generateInstagramStory,generateReelPost,
generateThreadsPost,generateFacebookPost,generateFacebookAdHeadline,generateFacebookBio,generateFacebookGroupPost,
generateFacebookGroupDescription,generateFacebookPageDescription,generateYouTubePostTitle,
generateYouTubePostDescription,generateTwitterBio,generateTwitterPost,generateTwitterThreadsPost,
generateTwitterThreadsBio,generateLinkedInPageHeadline,generateLinkedinCompanyPageHeadline,
generateLinkedInPageSummary,generateLinkedInCompanySummary,generatePostHashtags,generateBlogPost,
generateArticle,generatePressRelease,generateNewsletter,generateGoogleAdsHeadliner,generateGoogleAdDescription,generateMarketingPlan,generateMarketingFunnel,createProductDescription,GenerateArticleIdeas,GenerateArticleOutline,GenerateArticleIntro,GenerateBlogIdeas,GenerateBlogTitles,GenerateBlogOutline,GenerateBlogIntro,GenerateSEOTitleDescription,GeneratePromptGenerator,GenerateReviewReply,GenerateVideoScript,generatePrompts,generateImageFromPrompt,GenerateVideoPromptContent,generateVisiting,generateLetterHead,generateFreeEmail,generateemailreplie,audioRepharse,convertSvgToJpeg,svgtopngconverter
,videoRepharse,speechConverter,
addBackground,convertToWebp,
webpToImages,optimizeSEO,improveSEOContent,auditSEO,generateGoogleAd,splitPdf,watermarkPdf,seoCompetitorAnalysis,ConvertHeic,
videoThumbnail,videoToArticle,genrateYoutubeShortsCaption,generatePodcastIntroduction,generatePodcastConclusion
,GenerateformatPressRelease,GenerateNewsletterSubjectLine,background,generateBlogIntroduction,generateBlogPostConclusion,videoConvertion,
generateArticleConclusion,generateArticleIntroduction,AudioMerge,podcastNewsletter,VideoWatermark,AddLogoToImage,
generateSnapchatPost,subtitleGenerator


} = require("../../controllers/response.controllers");
const { checkLimit } = require("../../middleware/limitCheck.middleware");
const multer = require('multer');
const path=require("path")



const router = require("express").Router();
const upload = multer({ dest: 'uploads/' }); // Destination folder for uploaded files

// Set up Multer for handling file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
      cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
      cb(null, file.originalname);
  }
});
const uploadfile = multer({ storage: storage });

const storage2 = multer.diskStorage({
    destination: './uploads/',
    filename: (req, file, cb) => {
      cb(null,file.originalname);
    }
  });
  
  // Initialize upload variable
  const uploadbackgroundimage = multer({
    storage: storage2,
    limits: { fileSize: 9000000 }, // Limit file size to 9MB
  });
  

  const uploadBack = multer({
    storage: multer.diskStorage({
      destination: (req, file, cb) => {
        cb(null, 'uploads/');
      },
      filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Set a unique file name
      }
    }),
    limits: { fileSize: 4 * 1024 * 1024 }, // 4MB size limit
    fileFilter: (req, file, cb) => {
      const filetypes = /png/;
      const mimetype = filetypes.test(file.mimetype);
      const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  
      if (mimetype && extname) {
        return cb(null, true);
      }
      cb(new Error('Only PNG images are allowed!'));
    }
  });
 


router.post("/", checkLimit, getResponse);
router.post("/paraphrase",checkLimit, getParaPhrase);
router.post("/image",checkLimit, getImage);
router.post("/special",checkLimit, getSpecialtool);
router.post("/decision",checkLimit, getDecision);
router.post("/getseo",checkLimit, getSeo);
router.post("/code",checkLimit, getCodeConverter);
router.post("/marketing",checkLimit, getMarketing);
router.post('/resize',checkLimit, multer({ dest: 'uploads/' }).single('image'), resizeImage);
router.post("/generate",checkLimit,upload.single('logo'),generateQR)
router.post("/component",checkLimit,generateComponent)
router.post("/rephrase",checkLimit,getRepharsedata);
router.post('/upload',checkLimit, multer({ dest: 'uploads/' }).single('image'), uploadImage);
router.post("/jpg2pdf",checkLimit,upload.array('images',10),jpgtopdfconverter)
router.post("/mergePDF",checkLimit,uploadfile.array('pdfFiles'),mergePDF)
router.post("/png2pdf",checkLimit,upload.array('images',10),pngtopdfconverter)
router.post('/convert',checkLimit, upload.single('video'), convertVideoToAudio);
router.post("/pngtojpg",checkLimit,upload.array("image"),pngtojpgcoverter)
router.post("/jpgtopng",checkLimit, upload.array("images"), JpgtoPngconverter);
router.post("/fbinstadownload",checkLimit,fbDownloader)
router.post("/twitterdownload",checkLimit,twitterDownloader)
router.post("/text2pdf",checkLimit,text2Pdf)
router.post("/podcast",checkLimit,Podcast)
router.post("/svgconvert",checkLimit,upload.array('image'),svgConverter)
router.post("/zip",checkLimit,upload.array('files'),zipmaker)
router.post("/gif",checkLimit,upload.single("video"),gifConverter)
router.post("/getSummary",checkLimit, getTextSummary);
router.all("/files",checkLimit,upload.single('zipfile'),zipExtractor)
router.post('/getNotesSummary',checkLimit,getNotesSummary);
router.post('/pdf2text',checkLimit,upload.single('pdf'),pdftotext)
router.post("/compressedVideo",checkLimit,upload.single('video'),compressedVideo)
router.post('/extract',checkLimit, upload.single('pdf'),extractpdftoimages)
router.post('/companyName',checkLimit,getCompany)
router.post('/translate',checkLimit,upload.single("pdf"),pdfTranslate)
router.post('/domain',checkLimit, getDomainNames);
router.post('/video2text',checkLimit,upload.single('video'),video_Text_converter)
router.post('/current-topics',checkLimit, generateCurrentTopics);
router.post('/trim-video',checkLimit,upload.single('video'),trimvideo)
router.post('/trim-audio',checkLimit,upload.single('audio'),trimaudio)
router.post('/nda',checkLimit,NDA_Agreement)
router.post('/delete-pages',checkLimit,upload.single('pdf'),deletepdf)
router.post('/slogan',checkLimit,Business_Slogan)
router.post('/nca',checkLimit,NCA_Agreement)
router.post('/youtubescript',checkLimit,generateYouTubeScript)
router.post('/trivia',checkLimit,TriviaGenerate)
router.post('/improve',checkLimit,improveContent);
router.post('/remove-audio',checkLimit,upload.single('video'),removeAudio)
router.post('/generatePolicy',checkLimit, genratedPolicy)
router.post('/generatePoll',checkLimit, generatePoll);
router.post('/businessPlan',checkLimit, generateBusinessPlan);
router.post('/addAudio',checkLimit,upload.fields([{ name: 'video' }, { name: 'audio' }]),addAudio)
router.post('/pdf-summarize',checkLimit, upload.single('pdf'), uploadAndSummarize);
router.post('/pdf-chat',checkLimit, upload.single('pdf'), chatWithPdf);
router.post("/translateLanguage",checkLimit,upload.single('video'),languageTranslation)
router.post("/audio-translate",checkLimit,upload.single('audio'),audioTranslate)
router.post("/video-translate",checkLimit,upload.single('video'),videoTranlator)
router.post("/youtube-translate",checkLimit,youtubeTranslator)
router.post("/finance",checkLimit,financeadvisor)
router.post("/detector",checkLimit,AiDetector)
router.post("/news",checkLimit,newsSummerizer)
router.post('/infographic',checkLimit, generateTextInfographic);
router.get('/avatar',checkLimit,createAvatar)
router.post('/compressImage',checkLimit, upload.array('image'),compressImage)
router.post('/generateSWOT',checkLimit, generateSWOT);
router.post('/generateCoverLetter',checkLimit,generateCoverLetter);
router.post("/logo",checkLimit, generateLogo);
router.post('/generateLinkedInPost',checkLimit, generateLinkedInPost);
router.post('/generateLinkedInBio',checkLimit, generateLinkedInBio);
router.post('/generateLinkedInRecommendation',checkLimit, generateLinkedInRecommendation);
router.post('/generateConnectionRequest',checkLimit, generateConnectionRequest);
router.get("/ytdl",checkLimit,youtubeDownloader)
router.post("/aboutme",checkLimit,aboutMe)
router.post("/tiktokcaption",checkLimit,tiktokCaptionGenerate)
router.post('/generateTitle',checkLimit, generateTitle);
router.post('/generateYtTitle',checkLimit, generateVideoTitle);
router.post('/generateVideoIdeas',checkLimit, generateVideoIdeas);
router.post('/generateYoutubeScriptOutline',checkLimit, generateScriptOutline);
router.post('/generatecalender',checkLimit, CalenderContentGenerator);
router.post('/tiktokhastag',checkLimit, tiktokhastag);
router.post('/generateReelScript',checkLimit, generateReelScript);
router.post('/generateReelIdeas',checkLimit, generateReelIdeas);
router.post('/generateAboutCompanyPage',checkLimit, generateAboutCompanyPage);
router.post('/generateTweetReply',checkLimit, generateTweetReply);
router.post('/generateSocialMediaPost',checkLimit, generateSocialMediaPost);
router.post('/generateBulletPoints',checkLimit, generateBulletPoints);
router.post('/generateBulletPoints',checkLimit, generateBulletPoints);
router.post('/generateEventName',checkLimit, generateEventName);
router.post('/generateProfessionalBio',checkLimit, generateProfessionalBio);
router.post('/generateSeoBrief',checkLimit, generateSeoBrief);
router.post('/generateCompanyProfile',checkLimit, generateCompanyProfile);
router.post('/generateEventInvitationEmail',checkLimit, generateEventInvitationEmail);
router.post('/generateTinderBio',checkLimit, generateTinderBio);
router.post('/generateEventReminderEmail',checkLimit, generateEventReminderEmail);
router.post('/generateInstagramHashtags',checkLimit, generateInstagramHashtags);
router.post('/generateFollowUpEmail',checkLimit, generateFollowUpEmail);
router.post('/generateJobOffer',checkLimit, generateJobOfferLetter);
router.post('/generateResumeSkills',checkLimit, generateResumeSkills);
router.post('/generateElevatorPitch',checkLimit, generateElevatorPitch);
router.post('/generateEmailSubjectLine',checkLimit, generateEmailSubjectLine);
router.post('/generateReviewResponse',checkLimit, generateReviewResponse);
router.post('/generateJobDescription',checkLimit, generateJobDescription);
router.post('/generateResignationLetter',checkLimit, generateResignationLetter);
router.post('/generatePerformanceReview',checkLimit, generatePerformanceReview);
router.post('/generateCallToAction',checkLimit, generateCallToAction);
router.post('/generateMeetingInvite',checkLimit, generateMeetingInvite);
router.post('/generateProjectReport',checkLimit, generateProjectReport);
router.post('/generateGMBProductDescription',checkLimit,generateGMBProductDescription);
router.post('/generateGMBPost',checkLimit,generateGMBPost);
router.post('/generateProductDescription',checkLimit,generateProductDescription);
router.post('/generateReferenceLetter',checkLimit, generateReferenceLetter);
router.post('/generateProductName',checkLimit, generateProductName);
router.post('/generateCatchyTagline',checkLimit, generateCatchyTagline);
router.post('/generateBusinessProposal',checkLimit, generateBusinessProposal);
router.post('/generateSOP',checkLimit, generateSOP);
router.post('/generateExperienceLetter',checkLimit, generateExperienceLetter);
router.post('/generateMotto',checkLimit,generateMotto);
router.post('/generateProductBrochure',checkLimit, generateProductBrochure);
router.post('/generateBusinessMemo',checkLimit, generateBusinessMemo);
router.post('/generatePAS',checkLimit, generatePAS);
router.post('/generateAIDA',checkLimit, generateAIDA);
router.post('/generateColdEmail',checkLimit, generateColdEmail);
router.post('/generateMetaDescription',checkLimit, generateMetaDescription);
router.post('/generateNewsletterName',checkLimit, generateNewsletterName);
router.post('/generateJobSummary',checkLimit, generateJobSummary);
router.post('/generateJobQualifications',checkLimit, generateJobQualifications);
router.post('/generateJobResponsibilities',checkLimit, generateJobResponsibilities);
router.post('/generateSubheadings',checkLimit, generateSubheadings);
router.post('/generateUVP',checkLimit, generateUVP);
router.post('/generateOKR',checkLimit, generateOKR);
router.post('/generateProjectTimeline',checkLimit, generateProjectTimeline);
router.post('/removebackground',checkLimit,uploadbackgroundimage.single('image'), uploadImageBG);
router.post('/generateStatistics',checkLimit,generateStatistics);
router.post('/generatePRIdeas',checkLimit, generatePRIdeas);
router.post('/transcribe',checkLimit, upload.single('audio'), transcribeMeeting);
router.post('/pdftoaudio',checkLimit, upload.single('pdf'), pdfToAudio);
router.post('/sign',checkLimit,upload.single('pdf'),pdfSign)
router.post('/docstoaudio',checkLimit, upload.single('docs'), docsToAudio);
router.post('/extractText',checkLimit,upload.single('docs'),extractText)
router.post('/generateImagePrompt',checkLimit, generateImagePrompt);
router.post('/instadownloader',checkLimit,instaImageVideoDownloader);
router.post('/generateCaption',checkLimit,generateCaption);
router.post('/generateInstagramBio',checkLimit,generateInstagramBio);
router.post('/generateInstagramStory',checkLimit,generateInstagramStory);
router.post('/generateReelPost',checkLimit,generateReelPost);
router.post('/generateThreadsPost',checkLimit,generateThreadsPost);
router.post('/generateFacebookPost',checkLimit,generateFacebookPost);
router.post('/generateFacebookAdHeadline',checkLimit,generateFacebookAdHeadline);
router.post('/generateFacebookBio',checkLimit,generateFacebookBio);
router.post('/generateFacebookGroupPost',checkLimit,generateFacebookGroupPost);
router.post('/generateFacebookGroupDescription',checkLimit, generateFacebookGroupDescription);
router.post('/generateFacebookPageDescription',checkLimit, generateFacebookPageDescription);
router.post('/generateYouTubePostTitle',checkLimit, generateYouTubePostTitle);
router.post('/generateYouTubePostDescription',checkLimit, generateYouTubePostDescription);
router.post('/generateTwitterBio',checkLimit,generateTwitterBio);
router.post('/generateTwitterPost',checkLimit,generateTwitterPost);
router.post('/generateTwitterThreadsPost',checkLimit,generateTwitterThreadsPost);
router.post('/generateTwitterThreadsBio',checkLimit,generateTwitterThreadsBio);
router.post('/generateLinkedInPageHeadline',checkLimit,generateLinkedInPageHeadline);
router.post('/generateLinkedinCompanyPageHeadline',checkLimit,generateLinkedinCompanyPageHeadline);
router.post('/generateLinkedInPageSummary',checkLimit,generateLinkedInPageSummary);
router.post('/generateLinkedInCompanySummary',checkLimit,generateLinkedInCompanySummary);
router.post('/generatePostHashtags',checkLimit,generatePostHashtags);
router.post('/generateBlogPost', checkLimit, generateBlogPost);
router.post('/generateArticle',checkLimit, generateArticle);
router.post('/generatePressRelease',checkLimit,generatePressRelease);
router.post('/generateNewsletter',checkLimit,generateNewsletter);
router.post('/generateGoogleAdsHeadliner',checkLimit,generateGoogleAdsHeadliner);
router.post('/generateGoogleAdDescription',checkLimit,generateGoogleAdDescription);
router.post('/generateMarketingPlan',checkLimit,generateMarketingPlan);
router.post('/generateMarketingFunnel',checkLimit,generateMarketingFunnel);
router.post('/createProductDescription',checkLimit,createProductDescription);
router.post('/GenerateArticleIdeas',checkLimit,GenerateArticleIdeas);
router.post('/GenerateArticleOutline',checkLimit,GenerateArticleOutline);
router.post('/GenerateArticleIntro',checkLimit,GenerateArticleIntro);
router.post('/GenerateBlogIdeas',checkLimit,GenerateBlogIdeas);
router.post('/GenerateBlogTitles',checkLimit,GenerateBlogTitles);
router.post('/GenerateBlogOutline',checkLimit,GenerateBlogOutline);  
router.post('/GenerateBlogIntro',checkLimit,GenerateBlogIntro);  
router.post('/GenerateSEOTitleDescription',checkLimit,GenerateSEOTitleDescription);  
router.post('/GeneratePromptGenerator',checkLimit,GeneratePromptGenerator);  
router.post('/GenerateReviewReply',checkLimit,GenerateReviewReply);  
router.post('/GenerateVideoScript',checkLimit,GenerateVideoScript);  
router.post('/generatePrompts',generatePrompts);  
router.post('/generateImageFromPrompt',checkLimit,generateImageFromPrompt);
router.post('/GenerateVideoPromptContent',checkLimit,GenerateVideoPromptContent);
router.post("/visiting",checkLimit,upload.fields([{ name: 'logo' }, { name: 'background' }]),generateVisiting)
router.post('/create-letterhead',checkLimit, upload.fields([{ name: 'logo' }, { name: 'background' }]),generateLetterHead)
router.post('/generateFreeEmail',checkLimit,generateFreeEmail);  
router.post('/generateemailreplie',checkLimit,generateemailreplie);  
router.post("/audioRepharse",upload.single('audio'),audioRepharse)
router.post('/convertsvgtojpg',checkLimit, upload.array('svgs'), convertSvgToJpeg);
router.post("/convertsvgtopng",checkLimit, upload.array('images'), svgtopngconverter);
router.post("/videoRepharse",checkLimit, upload.single('video'), videoRepharse);
router.post("/speech",checkLimit, speechConverter)
router.post("/background",checkLimit, uploadBack.fields([{ name: 'image' }, { name: 'mask' }]),addBackground)
router.post('/convertToWebp',checkLimit, upload.array('images'), convertToWebp);
router.post('/webpToImages',checkLimit, upload.array('images'), webpToImages);
router.post('/optimizeSEO',checkLimit, optimizeSEO);
router.post('/improveSEOContent',checkLimit, improveSEOContent);
router.post('/auditSEO',checkLimit, auditSEO);
router.post('/generateGoogleAd',checkLimit, generateGoogleAd);
router.post('/split',checkLimit, upload.single('pdf'), splitPdf);
router.post('/watermarkPdf',checkLimit, upload.fields([{ name: 'pdf' }, { name: 'image' }]), watermarkPdf);
router.post('/seoCompetitorAnalysis',checkLimit, seoCompetitorAnalysis);
router.post('/convert-heic',checkLimit,upload.array('images', 10), ConvertHeic);
router.post('/video-thumbnail',checkLimit, upload.single('video'),videoThumbnail)
router.post("/ytVideoToArticle",checkLimit, upload.single('video'), videoToArticle);
router.post("/genrateYoutubeShortsCaption",checkLimit, genrateYoutubeShortsCaption);
router.post('/generatePodcastIntroduction',checkLimit, generatePodcastIntroduction);
router.post('/generatePodcastConclusion',checkLimit, generatePodcastConclusion);
router.post("/GenerateformatPressRelease",checkLimit, GenerateformatPressRelease);
router.post("/GenerateNewsletterSubjectLine",checkLimit, GenerateNewsletterSubjectLine);
router.post("/overlay",checkLimit, upload.fields([{ name: 'mainImage' }, { name: 'backgroundImage' }]), background);
router.post('/generateBlogIntroduction',checkLimit, generateBlogIntroduction);
router.post('/generateBlogPostConclusion',checkLimit, generateBlogPostConclusion);
router.post("/videoConvertion",checkLimit, upload.single('video'), videoConvertion);
router.post('/generateArticleIntroduction',checkLimit, generateArticleIntroduction);
router.post('/generateArticleConclusion',checkLimit, generateArticleConclusion);
router.post('/AudioMerge',upload.fields([{ name: 'audio1' }, { name: 'audio2' }]), AudioMerge);
router.post('/podcastNewsletter', podcastNewsletter)
router.post('/add-watermark',upload.fields([{ name: 'video' }, { name: 'watermark' }]), VideoWatermark)
router.post('/overlayImage',upload.fields([{ name: 'image' }, { name: 'logo' }]), AddLogoToImage)
router.post('/generateSnapchatPost',checkLimit, generateSnapchatPost);
router.post('/subtitle',upload.single('video'), subtitleGenerator)
module.exports = router;
