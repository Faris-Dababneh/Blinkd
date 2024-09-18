// GNews https://gnews.io/

const getArticleIds = async (query, countries, from, to) => {
  const apikey = process.env.NEXT_PUBLIC_GNEWS_API_KEY;
  const url = `https://gnews.io/api/v4/search?q=${query}&lang=en&country=us&max=10&from=${from}&to=${to}&sortby=relevance&apikey=${apikey}`
  // from=1980-01-01T01:01:01Z&to=2024-09-01T01:01:01Z&
  fetch(url)
    .then(function (response) {
      return response.json();
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
      return formatted
    });
}

export {getArticleIds};
