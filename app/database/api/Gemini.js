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

async function createFeed(answers) {
    // Need the user's answers (can call getAnswers() from Firebase), then prompt engineer
    // For the result, make sure gemini formats it in the articles [] array format from the feed page.js
    // ACTUALLY TRY TO USE NEWSAPI INSTEAD https://newsapi.org/
    const prompt = `prompt`;
    
}

export {interpretAnswer, createFeed};


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