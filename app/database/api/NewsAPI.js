// GNews https://gnews.io/

const getArticleIds = async (query, from, to) => {
  const apikey = '75eb1b918f7fb4a31a790ebeb7f798a3';
  const url = `https://gnews.io/api/v4/search?q=science&lang=en&country=us&max=10&from=1980-01-01T01:01:01Z&to=2005-09-01T01:01:01Z&sortby=publishedAt&apikey=` + process.env.GNEWS_API_KEY ;
  
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      const articles = data.articles;
  
      for (let i = 0; i < articles.length; i++) {
        // articles[i].title
        console.log("Title: " + articles[i]['title']);
        // articles[i].description
        console.log("Description: " + articles[i]['description']);
        console.log(articles[i])
        // You can replace {property} below with any of the article properties returned by the API.
        // articles[i].{property}
        // console.log(articles[i]['{property}']);
  
        // Delete this line to display all the articles returned by the request. Currently only the first article is displayed.
        
      }
    });
}

export {getArticleIds};