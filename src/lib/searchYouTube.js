var searchYouTube = (options, callback) => {
  console.log('I was called', options.query);
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search' +
         '?part=snippet' +
         '&q=' + options.query +
         '&key=' + options.key +
         '&type=video' +
         '&maxResults=' + options.max,
    type: 'GET',
    data: {
      type: 'jsonp'
    },
    success: function(data) {
      callback(data.items);
    },
    error: function() {
      console.log('error fetching videos');
    }
  });
};

window.searchYouTube = searchYouTube;
