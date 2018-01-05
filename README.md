### designMode Bookmarklet
A handy bookmarklet toggle for designMode in a modern browser.

// Original code via stackoverflow user [srbrussell](https://stackoverflow.com/questions/4883190/combining-designmode-on-off-bookmarklets-into-one-toggling-bookmarklet).

#### Bookmarklet

```<div><a href="javascript:(function () {if (document.documentElement.contentEditable === false || document.designMode === "off") {document.body.contentEditable='true';document.designMode='o‌​n';void 0;} else if (document.documentElement.contentEditable === true || document.designMode === "on") {document.body.contentEditable='false';document.designMode='‌​off';void 0;}})();">Design mode</a></div>```
