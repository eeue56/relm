console.log("lalalala");

React.DOM["hello"] = React.createClass({
    render: function() {
        return React.createElement("h1", null, "hi there");
    }
});

Elm.Native.React = {};
Elm.Native.React.make = function(localRuntime) {
    localRuntime.Native = localRuntime.Native || {};
    localRuntime.Native.React = localRuntime.Native.React || {};
    if (localRuntime.Native.React.values)
    {
        return localRuntime.Native.React.values;
    }

    var renderSpace = document.createElement("div");
    document.body.appendChild(renderSpace);


    var registerClass = function(name, html) {
        console.log("creating..");
        React.DOM[name] = React.createClass({
            render: function() {
                return React.createElement("h1", null, "hi there");
            }
        });

        return name;
    };

    var render = function(name){
        React.render(React.createElement(name), document.body);
        return name;
    };



    return Elm.Native.React.values = {
        render: render,
        registerClass: F2(registerClass)
    };

};