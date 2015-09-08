var app = Elm.worker(Elm.Utils, { incomingString: "" })
app.ports.upCase.subscribe(function(upperCase){
    console.log(upperCase);
});
var f = function(text){
    app.ports.incomingString.send(text);
};

f("hello");
f("dave");