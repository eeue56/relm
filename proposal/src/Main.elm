module Main (main) where
{-| 
@docs main
-}
import React exposing (render, registerClass)
import Graphics.Element exposing (show, Element)

{-| -}
dinosaur = registerClass "dinosaur" "<h1>hello</h1>"
{-| -}
rabbit = render "dinosaur"

{-| -}
main : Element
main = show rabbit