import { GoogleGenerativeAI } from "@google/generative-ai";
import React from 'react'

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

async function interpretAnswer(array) {
    if ('duration' in array) {
        const prompt = `The following object contains a start and end date. Format the object in this exact form: 'mm/dd/yyyy - mm/dd/yyyy'. This is the object: ${JSON.stringify(array)} Only output the formatted date range, do not include anything else in your response.`
        const result = await model.generateContent(prompt);
        const final = result.response.text();
        console.log(final)
        return ['duration', final];
    } else {
        let final = [];
        Object.entries(array).forEach(([key, value]) => {
            for (const item of Object.values(value)) {
            final.push(key, item);
            }
        });
        return final;
    }
    
}

export {interpretAnswer};
