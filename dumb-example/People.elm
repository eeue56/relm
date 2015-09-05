module People where

port newPerson : Signal String

currentPeople = newPerson

updatePeople newName names =
    names ++ [newName]

names = Signal.foldp updatePeople [] currentPeople

port people : Signal (List String)
port people =
    names