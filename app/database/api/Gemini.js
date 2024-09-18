import { GoogleGenerativeAI } from "@google/generative-ai";
import React from 'react'

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

/* 
Takes in two paramters: array and needsFormatting
The array is the object that contains an answer which was previously stored to the Firbase database
The answers have different formats, so the function considers each format and formats the initial object into the simplified answer to be used in other functions
*/
async function interpretAnswer(array, needsFormatting) {
    if ('duration' in array) {
        let prompt;
        if (needsFormatting) {
            prompt = `The following object contains a start and end date. Format the object in this exact form: 'yyyy-mm-dd, yyyy-mm-dd'. This is the object: ${JSON.stringify(array)} Only output the formatted date range, do not include anything else in your response.`;
        } else {
            prompt = `The following object contains a start and end date. Format the object in this exact form: 'mm/dd/yyyy - mm/dd/yyyy'. This is the object: ${JSON.stringify(array)} Only output the formatted date range, do not include anything else in your response.`;
        }
        const result = await model.generateContent(prompt);
        const final = needsFormatting ? result.response.text().replace(' \n', '').split(', ') : result.response.text();
        console.log(final)
        return needsFormatting ? final : ['duration', final];
    } else {
        let final = [];
        Object.entries(array).forEach(([key, value]) => {
            for (const item of Object.values(value)) {
            final.push(key, item);
            }
        });
        if (needsFormatting) {
            for (let i = 0; i < final.length; i++) {
                final.splice(i, 1);
            }
            let prompt = `If and only if the following list contains country names, output each country code (in lowercase) in a list seperated by commas. If it does NOT include country names, output the exact list seperated by commas with a space in between. Here is the list: ${final}`;
            const result = await model.generateContent(prompt);
            final = result.response.text().replace(' \n', '').split(', ');
        }
        return final;
    }
    
}

export {interpretAnswer};


/*
WORKING PROMPT FOR GPT

Create a news feed based on the following specifications. Duration of the feed: "1/10/1960 - 2/15/1965"; topics to focus on: "science, technology, world events"; countries to focus on: "United States, Argentina." Create up to 3 unique articles based on these specifications, doing the best to find the most important information during the time period. When you have 3 articles and their website source or sources (ENSURE that each website link works), output them in this exact format: "const articles = [
        {
          id: 1,
          headline: 'Article headline here',
          summary: 'A brief summary of the article...',
          source: 'Web URL here',
          imageUrl: 'main image here',
        },
        {
          id: 2,
          headline: 'Article headline here',
          summary: 'A brief summary of the article...',
          source: 'Web URL here',
          imageUrl: 'main image here',
        },
        // Add more articles here
      ];"


*/