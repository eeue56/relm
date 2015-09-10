module HtmlRender where
{-|

@docs Element, createRoot, render, renderRoot
-}
import Native.HtmlRender

{-| -}
type alias Element =
    { html : String,
      rendered : Bool,
      root : String
}

{-| -}
createRoot : String -> Element
createRoot = Native.HtmlRender.createRoot

{-| -}
render : Element -> Element
render = Native.HtmlRender.render

{-| -}
renderRoot : String -> Element
renderRoot = createRoot >> render