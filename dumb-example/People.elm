module People where

import Dict exposing (Dict)
import Set exposing (Set, toList, fromList)
import Time exposing (every, second, Time)
import Json.Encode

port newPerson : Signal String
port isUnique : Signal Bool

personId = every <| second

addPerson : (String, Time) -> Dict Time String -> Dict Time String
addPerson (newName, time) people =
  Dict.insert time newName people

encodePerson : (Time, String) -> Json.Encode.Value
encodePerson (id, person) =
  Json.Encode.object 
    [ ("id", Json.Encode.float id), ("name", Json.Encode.string person) ]

people' : Dict Time String
people' = Dict.empty 

people = 
  Signal.foldp addPerson people'
    <| 
      Signal.map2 (\x y -> (x, y)) (newPerson) (Signal.sampleOn newPerson personId)

names' : Dict Time String -> List String
names' people = 
  Dict.values people

count : a -> List a -> Int
count x xs =  
  List.length 
    <| List.filter (\y -> y == x) xs
    
port peopleObject : Signal (Json.Encode.Value)
port peopleObject =
  let 

    filtering : Dict Time String -> Bool -> List (Time, String) -> List (Time, String)
    filtering peopleDict isUnique people = 
      let
        names = names' peopleDict
      in
        if isUnique then 
          List.filter (\(id, name) -> count name names == 1) people
        else
          people

    converter people isUnique =
      Dict.toList people
        |> filtering people isUnique
        |> List.map encodePerson
        |> Json.Encode.list
  in
  Signal.map2 (converter) people isUnique