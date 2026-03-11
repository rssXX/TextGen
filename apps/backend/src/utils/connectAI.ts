import OpenAI from 'openai';

const clientAI = new OpenAI({
    baseURL: 'https://api.deepseek.com',
    apiKey: process.env.API_AI_KEY, // This is the default and can be omitted
});

export default clientAI;