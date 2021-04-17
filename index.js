const fs = require("fs");
const request = require("request");

// fetching data from JSON PLACEHOLDER POSTS
const data = request.get("http://jsonplaceholder.typicode.com/posts", (error, res, body) => {
    if (error) {
      console.log(error);
    }
    //   to display the content of JSON PLACEHOLDER POSTS in the console
    console.log(JSON.parse(body));

    // writing the content of JSON PLACEHOLDER POSTS to post.json
    // dynamically creating a result directory
    fs.mkdir("result", (err) => {
      if (err) {
        console.log(err);
      } else {
        //   writing to a dynamically created post.json file in the result directory
        fs.writeFileSync("result/post.json", body, (err) => {
          if (err) {
            console.log(err);
          }
        });
      }
    });
  }
);
