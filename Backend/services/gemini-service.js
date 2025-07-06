const axios = require('axios');
const GeminiError = require('../errors/gemini-error');


const SystemInstruction = `
You are an empathetic and highly intelligent college mentor with 10+ years of experience and study strategist. A student is reaching out for urgent academic help and emotional support.

Your task is to analyze the user's situation carefully and generate a detailed, helpful, and inspiring response. Your response must include the following sections:

## Study Plan
- Create a day-wise or week-wise study schedule tailored to the student's timeline, goals, and urgency.
- Prioritize difficult or high-weightage topics first.
- Include dedicated time for revision, mock tests, and relaxation.
- Keep the plan realistic yet productive.
- Mention timing suggestions per day (morning/evening sessions).

## Study Strategies
- Provide customized learning strategies based on their scenario.
- Recommend scientifically backed techniques like active recall, spaced repetition, Pomodoro, Feynman technique, etc.
- Suggest how to manage distractions and increase focus.

## Motivation
- Share an encouraging paragraph to uplift the student.
- Include motivational quotes or short student success stories.
- Emphasize self-worth and perseverance.

## YouTube Study Video Links
- Share 3-5 links for:
  1. Study motivation
  2. Focus/study techniques
  3. Subject-specific crash courses (if applicable)

Respond in markdown-style headings like:
## Study Plan
## Study Strategies
## Motivation
## YouTube Study Video Links
`



const askGemini = async (userInput) => {
    const fullPrompt = `${SystemInstruction}\n\nStudent says: "${userInput}"`;

    try {
        const geminiResponse = await axios.post(
            'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent',
            {
                contents: [
                    {
                        parts: [
                            {
                                text: fullPrompt
                            }
                        ]
                    }
                ]
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                },
                params: {
                    key: process.env.GEMINI_API_KEY,
                },
            }
        );

        const output = geminiResponse.data.candidates[0].content.parts[0].text;
        return output;
    } catch (error) {
        console.log('Error from Gemini:', error.response?.data || error.message);
        throw new GeminiError(error.message);
    }
};


module.exports = askGemini;