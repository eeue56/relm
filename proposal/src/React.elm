module React where

{-| 

@docs render, registerClass
-}

import Native.React

{-| -}
render : String -> String
render = Native.React.render

{-| -}
registerClass : String -> String -> String
registerClass = Native.React.registerClass