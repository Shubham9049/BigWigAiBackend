const router = require("express").Router();
const templatesRoutes = require("./templates.v1.routes");
const responseRoutes = require("./response.v1.routes");
const { auth } = require("../../middleware/auth.middleware");
const bookmarksRoutes = require("./bookmarks.v1.routes");
const contactus=require("../v1/contact.v1.routes")
const feedback=require("../v1/feedback.v1.routes")
const Blog=require("../v1/blog.v1.routes")

router.get("/", (req, res) => {
    res.send("API LIVE!");
});
router.use("/templates", auth, templatesRoutes);
router.use("/response", auth, responseRoutes);
router.use("/bookmarks", auth, bookmarksRoutes);
router.use("/contact",contactus)
router.use('/feedback',feedback)
router.use("/blog",Blog)
module.exports = router;
