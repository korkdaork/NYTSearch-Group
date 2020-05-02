function findArticle(article) {
    var movie = movie;
    var queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy";
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + article + "&api-key=NVoGlLtsGsUaQLvenonyPlDsY7im5ekp";
    

    $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);

  });
}

findArticle("Lincoln");