var searchYouTube = (options, callback) => {
  console.log('I was called', options.query);
  
  $.get('https://www.googleapis.com/youtube/v3/search', 
    {part: 'snippet', q: options.query, key: options.key, type: 'video', maxResults: 10, videoEmbeddable: true }
  ).done(({items}) => {
    if (callback && items) {
      callback(items);
    }
  }).fail(() => { console.log('error!!!!!'); });
};

window.searchYouTube = searchYouTube;
