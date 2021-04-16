const fs = require("fs");
const http = require("http");
const request = require("request");

// fetching data from JSON PLACEHOLDER POSTS
request.get("http://jsonplaceholder.typicode.com/posts", (error, res, body) => {
  if (error) {
    console.log(error);
  }
//   console.log(JSON.parse(body));
});

// writing the content of JSON PLACEHOLDER POSTS to post.json 
// const content ="I am a female Programmer. I write the backend logic of systems";
const content = request.get("http://jsonplaceholder.typicode.com/posts", ( res, body));
   
    fs.writeFile("./result/post.json", content, err =>{
        if(err){
            console.log(err)
        }
    } )
