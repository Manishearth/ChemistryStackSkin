String.prototype.endsWith = function(pattern) {
    var d = this.length - pattern.length;
    return d >= 0 && this.lastIndexOf(pattern) === d;
};

document.addEventListener('beforeload', function(event) {
    
if (event.url.indexOf("/chemistry/all.css")!=-1){
    event.preventDefault();
    var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = chrome.extension.getURL("main.css");
    link.media = 'all';
    head.appendChild(link);

}
if (event.url.indexOf("/chemistry/img/favicon.ico")!=-1){
    event.preventDefault();
    (function() {
      var link = document.createElement('link');
      link.type = 'image/x-icon';
      link.rel = 'shortcut icon';
      link.href = chrome.extension.getURL('favicon.ico');
      document.getElementsByTagName('head')[0].appendChild(link);
   }());
}



}, true);
