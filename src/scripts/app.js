$(function(){

  var translateHeadline = function(lang) {
    var headlines = document.getElementsByClassName('article-headline'),
        content = [];

    for (var n = 0; n < headlines.length; n++) {
      var selectedText = $(headlines[n]).text();
      var text = selectedText.split(' ');


      text.forEach(function(str) {
        if (str.length > 3) {
            var newWord = /[A-Z]/.test( str) ? 'Boinga' : 'boinga'
            content.push( newWord);
        } else {
          content.push(str);
        }
      });
      $(headlines[n]).text(content.join(' '));
    }

  };

  $(".js-toggle-language").on('click', function(ele){

    var language = $(ele.currentTarget).data('lang');
    translateHeadline(language);

  });
});
