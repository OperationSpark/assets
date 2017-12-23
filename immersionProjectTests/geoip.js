var head = document.getElementsByTagName('head')[0];
var theScript = document.createElement('script');
theScript.type = 'text/javascript';
theScript.src = 'https: //cdnjs.cloudflare.com/ajax/libs/axios/0.17.1/axios.js';
theScript.onreadystatechange = callback;
theScript.onload = callback;
head.appendChild(theScript);

axios.get('http://freegeoip.net/json/')
    .then(({ data: geoip }) => 
        axios.post('http://localhost:9000/api/geoips', geoip))