'use client'
// THE GETARTICLES FUNCTION IS NOW RETURNING UNDEFINED WHICH DOESNT MAKE ANY SENSE. CHECK THE NEWSAPI FILE AND SEE WHATS WRONG WITH THE RETURN IN THE FUCNTION
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
    const [articles, setArticles] = useState([])
    
    //let answerCookie = JSON.parse(Cookies.get('answers')); USE COOKIES IN LATER PRODUCTION

    useEffect(() => {
      const fetchAnswer = async () => {
        if (answers === undefined) {
          let answer = await getAnswers(session, true)
          let article;
          let query = '';
          if (answer !== undefined) {
            for (let i = 0; i < answer[1].length; i++) {
              if (answer[1].length - 1 === i) {
                query = query + answer[1][i];
              } else {
                query = query + answer[1][i] + ' OR ';
              }
            }
            article = await getArticleIds(query, 'null', `${answer[0][0]}T01:01:01Z`, `${answer[0][1]}T01:01:01Z`);
          
            setArticles(article)
          }
          
          setAnswers(answer)
          console.log(answer)
        } else {
          return () => {}
        }
      }
      fetchAnswer()
    })

    return (
        <div className="min-h-screen p-4">
            <h1 className="text-4xl font-bold text-center text-primary">Your Personalized News Feed</h1>
            <div className="grid gap-6 mt-6 md:grid-cols-2 lg:grid-cols-3">
                {articles ? articles.map(article => (
                <NewsBox
                    key={article.id}
                    article={article}
                    expanded={expandedArticle === article.id}
                    onExpand={() => setExpandedArticle(article.id)}
                    onCollapse={() => setExpandedArticle(null)}
                />
                )) : <></>}
            </div>
        </div>
    );
}

export default Feed;