(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

$(function () {

  var translateHeadline = function translateHeadline(lang) {
    var headlines = document.getElementsByClassName('article-headline'),
        content = [];

    for (var n = 0; n < headlines.length; n++) {
      var selectedText = $(headlines[n]).text();
      var text = selectedText.split(' ');

      text.forEach(function (str) {
        if (str.length > 3) {
          var newWord = /[A-Z]/.test(str) ? 'Boinga' : 'boinga';
          content.push(newWord);
        } else {
          content.push(str);
        }
      });
      $(headlines[n]).text(content.join(' '));
    }
  };

  $(".js-toggle-language").on('click', function (ele) {

    var language = $(ele.currentTarget).data('lang');
    translateHeadline(language);
  });
});

},{}]},{},[1]);
