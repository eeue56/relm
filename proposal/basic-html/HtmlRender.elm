module HtmlRender where
{-|

@docs renderRoot
-}
import Native.HtmlRender

{-| -}
renderRoot : String -> String
renderRoot = Native.HtmlRender.renderRoot