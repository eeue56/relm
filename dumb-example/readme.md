# A basic example of rendering HTML with React and Elm

## Motivation

A lot of people ask about writing plain old HTML in Elm, then rendering the string in the browser. Angular already functions like this - each directive's template is just a string. React doesn't quite work like that, as everything gets wrapped with React's createFactory when using JSX. 

## How it works

In this case, we're using React + JSX for all the views, and Elm for the logic and data control.

## Usefulness

This is probably the best way of going about doing React with Elm at the moment. [This](http://noredinktech.tumblr.com/post/126978281075/walkthrough-introducing-elm-to-a-js-web-app) blog post does something similar.