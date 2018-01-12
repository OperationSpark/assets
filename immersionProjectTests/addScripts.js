var head = document.getElementsByTagName('head')[0];
var geoipScript = document.createElement('script');
geoipScript.type = 'text/javascript';
geoipScript.src = 'https://rawgit.com/OperationSpark/assets/master/immersionProjectTests/geoip.js';
// theScript.onreadystatechange = callback;
// theScript.onload = callback;
head.appendChild(geoipScript);
