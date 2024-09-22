// GNews https://gnews.io/

const getArticleIds = async (query, countries, from, to) => {
  const apikey = process.env.NEXT_PUBLIC_GNEWS_API_KEY;
  const url = `https://gnews.io/api/v4/search?q=${query}&lang=en&country=us&max=10&from=${from}&to=${to}&sortby=relevance&apikey=${apikey}`
  // from=1980-01-01T01:01:01Z&to=2024-09-01T01:01:01Z&
  try {
    const response = await fetch(url);
    const data = await response.json();
    
    let formatted = [];
    const articles = data.articles;
    console.log(articles)
    for (let i = 0; i < articles.length; i++) {
      let date = articles[i]['publishedAt'].substring(0,10);
      let [year, month, day] = date.split('-');
      let formattedDate = `${month}-${day}-${year}`
      formatted.push({
        id: i,
        headline: articles[i]['title'],
        summary: articles[i]['description'],
        content: articles[i]['content'],
        imageUrl: articles[i]['image'],
        url: articles[i]['url'],
        publishedAt: formattedDate,
      });
    }

    console.log(formatted);
    return formatted;
  } catch (error) {
    console.error('Error fetching articles:', error);
    return [];
  }
}

export {getArticleIds};

/*
fetch(url)
    .then(async function (response) {
      return await response.json();
    })
    .then(function (data) {
      let formatted = [];
      const articles = data.articles;
      for (let i = 0; i < articles.length; i++) {
        formatted.push({
          id: i,
          headline: articles[i]['title'],
          summary: articles[i]['description'],
          content: articles[i]['content'],
          imageUrl: articles[i]['image'],
          url: articles[i]['url'],
        })     
      }
      console.log(formatted)
      return formatted;
    });

*/