String.prototype.endsWith = function(pattern) {
    var d = this.length - pattern.length;
    return d >= 0 && this.lastIndexOf(pattern) === d;
};

document.addEventListener('beforeload', function(event) {
    
if (event.url.indexOf("/chemistry/all.css")!=-1){/*alert(event.url);event.srcElement.src=chrome.extension.getURL("main.css");*/ event.preventDefault();}
}, true);
