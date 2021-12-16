var XMLHttpRequest = require('xhr2');
var data = JSON.stringify({
    "path": "/NewFile.txt"
  });
  
  var xhr = new XMLHttpRequest();
  xhr.withCredentials = true;
  
  xhr.addEventListener("readystatechange", function() {
    if(this.readyState === 4) {
      console.log(this.responseText);
    }
  });
  
  xhr.open("POST", "https://api.dropboxapi.com/2/files/get_metadata");
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.setRequestHeader("Authorization", "Bearer 7xb5S1JB54wAAAAAAAAAAUaQrh1MppPPv0tDo-u2A9Am7JH5_IB8tuCq1-DbScnH");
  
  xhr.send(data);