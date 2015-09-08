module Utils where

import String

port incomingString : Signal String

upperCase str =
    String.toUpper str

port upCase : Signal String
port upCase = Signal.map upperCase incomingString