// designMode bookmarklet
javascript:(
function () {
    if (document.documentElement.contentEditable === false || document.designMode === "off") {
        document.body.contentEditable='true';
        document.designMode='on';
        void 0;
    } else if (document.documentElement.contentEditable === true || document.designMode === "on") {
        document.body.contentEditable='false';
        document.designMode='off';
        void 0;
    }
})();
