import { GoogleGenerativeAI } from "@google/generative-ai";
import React from 'react'

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

async function interpretAnswer(array, answer) {
    if (answer === 'duration') {
        const prompt = `The following object contains a start and end date. Format the object in this exact form: 'Start: dd/mm/yy End: dd/mm/yy'. This is the object: ${JSON.stringify(array[answer])} Only output the formatted date range, do not include anything else in your response.`
        const result = await model.generateContent(prompt);
        console.log(result.response.text());
        const final = result.response.text();
        return final;
    } else {
        let final = [];
        for (const item of Object.values(array[answer])) {
            final.push(item);
        }
        return final;
    }
    
}

export {interpretAnswer};
