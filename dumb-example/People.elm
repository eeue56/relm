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
        people' : Bool ->  List String -> List String
        people' isUnique names = 
            if isUnique then 
                (Set.toList << Set.fromList) names 
            else names
    in
        Signal.map2 (people') (isUnique) (names)

