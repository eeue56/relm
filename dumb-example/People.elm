module People where

import Set exposing (Set, toList, fromList)

port newPerson : Signal String
port isUnique : Signal Bool

currentPeople = newPerson

updatePeople newName names =
    names ++ [newName]

names = Signal.foldp updatePeople [] currentPeople

port people : Signal (List String)
port people = 
    let 
        people' isUnique = if isUnique then names else Signal.map (Set.toList << Set.fromList) names
    in
        Signal.map people' isUnique
    

