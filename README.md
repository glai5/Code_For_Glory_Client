If running node Server.js doesn't work, that's because you probably don't have node downloaded (https://nodejs.org/en). Download node and select ADD TO PATH when installing.
If you get: "running scripts is disabled on this system," run Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser. This is temporary fix, idk how to permanently do it, you can probably find it online or chatgpt it.
If you get react-scripts is not recognized as internal or external command, run npm install react-scripts.
