Elm.Native.HtmlRender = {};
Elm.Native.HtmlRender.make = function(localRuntime) {
    localRuntime.Native = localRuntime.Native || {};
    localRuntime.Native.HtmlRender = localRuntime.Native.HtmlRender || {};
    if (localRuntime.Native.HtmlRender.values)
    {
        return localRuntime.Native.HtmlRender.values;
    }

    var node = localRuntime.isFullscreen()
        ? document.body
        : localRuntime.node;

    var newElement = function(html, root){
        if (root === null){
            root = node;
        }

        return {
            html: html,
            root: root,
            rendered: false
        };
    };


    var createRoot = function(html){
        var node = newElement(html, null);

        return node;
    };

    var createNode = function(html, parent){
        var node = newElement(html, parent);
        return node;
    }

    var render = function(node){
        node.root.innerHTML = node.html;
        node.rendered = true;

        return node;
    };

    return Elm.Native.HtmlRender.values = {
        createRoot: createRoot,
        render: render
    };
};