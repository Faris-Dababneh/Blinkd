'use client'
// CALL THE GETARTICLES FUNCTION USING THE FORMATTED ANSWERS
import React, {useState, useEffect} from 'react';
import { NewsBox } from '../../components/feed/NewsBox';
import { getAnswers } from '../../app/database/Firebase'
import { Button } from '@nextui-org/react'
import { useSession } from 'next-auth/react';
import { getArticles } from '../database/api/OpenAI';
import { getArticleIds } from '../database/api/NewsAPI';
import Cookies from 'js-cookie'

function Feed()
{
    const {data: session } = useSession();
    const [expandedArticle, setExpandedArticle] = useState(null);
    const [answers, setAnswers] = useState(undefined)
    const [articles1, setArticles] = useState(undefined)
    
    //let answerCookie = JSON.parse(Cookies.get('answers')); USE COOKIES IN LATER PRODUCTION

    useEffect(() => {
      const fetchAnswer = async () => {
        if (answers === undefined) {
          let answer = await getAnswers(session, true)
          setAnswers(answer)
          console.log(answer)
        } else {
          //let articles = await getArticleIds(answers[1], 'us', '1980-01-01T01:01:01Z', '2024-09-01T01:01:01Z');
          return () => {}
        }
      }
      fetchAnswer()
    })
    /*const fetchArticles = async () => {
        let articles = await getArticleIds('business', 'us', '1980-01-01T01:01:01Z', '2024-09-01T01:01:01Z');
        console.log(articles)
        return () => {}
    }
    useEffect(() => {
      fetchArticles()
    }, [])*/

    const articles = [
        {
          id: 1,
          headline: 'New Breakthrough in Science',
          summary: 'A brief summary of the article...',
          content: 'Full article content here...',
          imageUrl: 'path/to/image1.jpg',
        },
        {
          id: 2,
          headline: 'Tech Innovations in 2024',
          summary: 'A brief summary of the article...',
          content: 'Full article content here...',
          imageUrl: 'path/to/image2.jpg',
        },
        // Add more articles here
      ];

    return (
        <div className="min-h-screen p-4">
            <h1 className="text-4xl font-bold text-center text-primary">Your Personalized News Feed</h1>
            <div className="grid gap-6 mt-6 md:grid-cols-2 lg:grid-cols-3">
                {articles.map(article => (
                <NewsBox
                    key={article.id}
                    article={article}
                    expanded={expandedArticle === article.id}
                    onExpand={() => setExpandedArticle(article.id)}
                    onCollapse={() => setExpandedArticle(null)}
                />
                ))}
                <Button onClick={async () => await getArticleIds('business', 'us', '1980-01-01T01:01:01Z', '2024-09-01T01:01:01Z')}>GET IDS</Button>
            </div>
        </div>
    );
}

export default Feed;