module People where

import Dict exposing (Dict)
import Set exposing (Set, toList, fromList)
import Time exposing (every, second, Time)

port newPerson : Signal String
port isUnique : Signal Bool

personId = every <| second

addPerson : (String, Time) -> Dict Time String -> Dict Time String
addPerson (newName, time) people =
  Dict.insert time newName people

people' : Dict Time String
people' = Dict.empty 

people = 
  Signal.foldp addPerson people'
    <| 
      Signal.map2 (\x y -> (x, y)) (newPerson) (Signal.sampleOn newPerson personId)

port names : Signal (List String)
port names = 
  let 
    names' : Bool ->  Dict Time String -> List String
    names' isUnique people = 
      let 
        values = Dict.values people
      in
        if isUnique then 
          (Set.toList << Set.fromList) values 
        else 
            values
  in
    Signal.map2 (names') (isUnique) (people)

