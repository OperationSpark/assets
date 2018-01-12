var postJSON = function (url, data, cb) {
  var xhr = new XMLHttpRequest();
  xhr.open('POST', url, true);
  xhr.setRequestHeader('Content-type', 'application/json');
  xhr.onload = function () {
    cb(null, this.responseText);
  };
  xhr.send(JSON.stringify(data));
};

var getJSON = function (url, cb) {
  var xhr = typeof XMLHttpRequest != 'undefined'
    ? new XMLHttpRequest()
    : new ActiveXObject('Microsoft.XMLHTTP');
  xhr.open('get', url, true);
  xhr.onreadystatechange = function () {
    var status;
    var data;
    // https://xhr.spec.whatwg.org/#dom-xmlhttprequest-readystate
    if (xhr.readyState == 4) { // `DONE`
      status = xhr.status;
      if (status == 200) {
        data = JSON.parse(xhr.responseText);
        cb && cb(null, data);
      } else {
        cb && cb(status);
      }
    }
  };
  xhr.send();
};

getJSON('http://freegeoip.net/json/', (err, geoip) => {
  postJSON('https://www.operationspark.org/api/geoips', geoip, (err, res) => {
    console.error(err);
    console.log(res);
  });
});
  
