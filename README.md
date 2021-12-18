##WebAPIs bascis - Homework
- Create scenario (Upload,  GetFileMetadata, Delete File) using information from the documentation https://www.dropbox.com/developers/documentation/http/documentation  
- download and install dropbox
- open visual studio code and create file WebAPIs_test.js  
- install xmlhttprequest (npm install xmlhttprequest) in terminal  
- using terminal run "node WebAPIs_test" from directory, where WebAPIs_test.js exists  
- in TeamCity in build step  
-          Runner type - Command Line   
-          Enter build script content - npm install   npm install mocha-teamcity-reporter   npm run mocha --no-timeouts --reporter mochawesome
