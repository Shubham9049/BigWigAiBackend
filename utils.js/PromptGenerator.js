// utils/imagePromptGenerator.js
const OpenAI = require('openai');
require('dotenv').config();

const openai = new OpenAI(process.env.OPENAI_API_KEY);

async function generatePromptContent(imageDescription, promptCount) {
    let responses = [];

    try {
        for (let i = 0; i < promptCount; i++) {
            const completion = await openai.chat.completions.create({
                messages: [
                    {
                        role: 'system',
                        content: `Create a prompt for generating an image with the following details: 
                                  Image Description: ${imageDescription}, 
                                  `
                    },
                    {
                        role: 'user',
                        content: ``
                    }
                ],
                model: 'gpt-4o'
            });

            if (!completion || !completion.choices || completion.choices.length === 0) {
                throw new Error('Invalid completion response');
            }

            responses.push(completion.choices[0].message.content.trim());
        }
        return responses;
    } catch (error) {
        console.error('Error generating image prompts:', error);
        return 'Failed to generate prompts';
    }
}

module.exports = { generatePromptContent};