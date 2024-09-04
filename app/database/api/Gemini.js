import { GoogleGenerativeAI } from "@google/generative-ai";
import React from 'react'

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

async function interpretAnswer(answer) {
    const prompt = `Display the following array in a readable manner for anyone to be able to understand. Ex.) An array that contains a date should be put in dd/mm/yyyy format. Here is the array: ${answer}`
    console.log(prompt)
    //const result = await model.generateContent(prompt);
    //console.log(result.response.text());
    //return result;
}

export {interpretAnswer};
