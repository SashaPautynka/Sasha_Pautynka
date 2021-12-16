var XMLHttpRequest = require('xhr2');
var data = "WebAPIs bascis - Homework";

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "https://content.dropboxapi.com/2/files/upload");
xhr.setRequestHeader("Dropbox-API-Arg", "{\"path\": \"/NewTestFile.txt\",\"mode\": \"add\",\"autorename\": true,\"mute\": false,\"strict_conflict\": false}");
xhr.setRequestHeader("Content-Type", "application/octet-stream");
xhr.setRequestHeader("Authorization", "Bearer 7xb5S1JB54wAAAAAAAAAAUaQrh1MppPPv0tDo-u2A9Am7JH5_IB8tuCq1-DbScnH");

xhr.send(data);
