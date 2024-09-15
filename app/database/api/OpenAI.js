import OpenAI from "../../../node_modules/openai";
const openai = new OpenAI({apiKey: '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', dangerouslyAllowBrowser: true});


const getArticles = async () => {
    
    const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
            {"role": "user", "content": prompt}
        ]
    });
    console.log(completion)
    //return completion;
}

export {getArticles};
// Right now this prompt sucks
// ALSO IT KEEPS CALLING THE API 4 TIMES - FIX THIS
const prompt = `
Create a news feed based on the following specifications. Duration of the feed: "1/10/1830 - 2/15/1880"; topics to focus on: "science, technology, world events"; countries to focus on: "United States" Create up to 3 unique articles based on these specifications, doing the best to find the most important information during the time period. Make sure you have 3 articles and their website source or sources (ENSURE that each website link works). Also ensure that the websites are from good, well run sources like wikapedia, britannica, history.com, New York Times, CNN, Fox, etc.. Output them in this exact format: "const articles = [
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
      ];" Do not include anything else in your response.`