import HtmlRender
import String
import Graphics.Element exposing (..)

myPage = ["<h1>Hello</h1>",
          "<ul>",
            "<li>One</li>",
            "<li>Two</li>",
            "<li>Three</li>",
          "</ul>"]

root = HtmlRender.renderRoot <| String.concat myPage

-- show is ignored here while Elm is in fullscreen
main = show <| "boot"