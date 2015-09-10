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

    var renderRoot = function(html){
        node.innerHTML = html;

        return html;
    };

    return Elm.Native.HtmlRender.values = {
        renderRoot: renderRoot
    };
};