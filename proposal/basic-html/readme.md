# A basic example of rendering HTML with Elm

## Motivation

A lot of people ask about writing plain old HTML in Elm, then rendering the string in the browser. Angular already functions like this - each directive's template is just a string. React doesn't quite work like that, as everything gets wrapped with React's createFactory when using JSX.

## How it works

Basically:

- Find the context that Elm is running in (fullscreen vs embedded)
- Set the innerHtml of the container to the string passed to renderRoot

## Usefulness

This is only useful as an example. It doesn't serve a purpose outside of being show that it's possible.