// const fs = require("fs")

// const { default: createServer } = require("next/dist/server/next")

// fs.writeFile("output.txt","Hello Everyone this side Prateek Sakuniya here", (err) =>{
//     if(err) console.log("Error Occured");
//     else console.log("successfully Compiled")
// })

// // how to create a server
// const http = require('http')

// function requestListener(req,res){
//     console.log(req)
// }

// http.createServer(requestListener)

// //Better Way of representation of server creation
// const http = require('http')

// const server =http.createServer((req,res) => {
//     console.log(req)
// })

// server.listen(3000)

// how to define a server on a particular port
// const http = require('http')

// const server = http.createServer((req,res) => {
//     console.log(req)
// });

// const PORT = 3000;
// server.listen(PORT,() => {
//     console.log(`Server is running on port ${PORT}`)
// })

// how to Make server automatically exit
// const http = require('http')
// const server = http.createServer((req, res) => {
//     console.log(req)
//     process.exit()
// });

// const port=3000;
// server.listen(port,() =>{
//     console.log(`Server is running on port ${port}`)
// })

// //request method, url, headers
// const http = require('http')

// const server = http.createServer((req, res) => {
//     console.log(req.method) // GET, POST, PUT, DELETE
//     console.log(req.url) // /, /about, /contact
//     console.log(req.headers) // { host: 'localhost:3000', connection: 'keep-alive', ... }
// })

// const PORT = 3000;
// server.listen (PORT,() =>{
//     console.log(`Server is running on port ${PORT}`)
// })

// //write about res
// const http = require ('http')

// const server = http.createServer((req, res) => {
//     res.setHeader('Content-Type', 'text/html')
//     res.write('<html>')
//     res.write('<head><title> Hello World </title></head>')
//     res.write('<body><h1>Welcome to that world</h1></body>')
//     res.write('</html>')
//     res.end()
// })

// const PORT = 3000;
// server.listen(PORT,() =>{
//     console.log(`Server is running on port ${PORT}`)
// })

// // requesting routing
// const http = require('http')

// const server = http.createServer((req, res) => {
//     if(req.url === '/'){
//         res.write("Welcome to the Home Page")
//         return res.end()
//     }
//     else if (req.url === '/product'){
//         res.write("Welcome to the Product Page")
//         return res.end()
//     }
//     else{
//         res.setHeader('content-typt', 'text/html')
//         res.write("<html><head><title>Hello World</title></head><body><h1>Welcome to the world</h1></body></html>")
//         res.end()
//     }
// })

// const PORT = 3000;
// server.listen(PORT ,() => {
//     console.log(`Server is running on port ${PORT}`)
// })

// // Redirecting request (req methods (GET, POST, PUT, DELETE) to different pages)
// const http = require("http");
// const fs = require("fs");

// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     res.setHeader("Content-Type", "text/html");
//     res.write("<html><head><title>submission form</title></head>");
//     res.write('<body><form action ="/submit-details" method="POST">');
//     res.write('<input type = "text" name ="username" placeholder="Enter your name">');
//     res.write('<br/><label for="Male" id = "gender">Male</label>');
//     res.write('<input type="radio" name="gender" value="male" id="male" />');
//     res.write('<label for="Female" id = "gender">Female</label>');
//     res.write('<input type="radio" name="gender" value="male" id="male" />');
//     res.write('<br/> <button type="submit">Submit</button>');
//     res.write("</form></body></html>");
//     return res.end();
//   } else if (req.url === "/submit-details" && req.method === "POST") {
//     fs.writeFileSync("output.txt", "Prateek Sakuniya");
//     res.statusCode = 302;
//     res.setHeader("Location", "/");
//     res.end();
//   }
// });

// const PORT = 3000;
// server.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

// Practice set of creating a myntra page in which you can perform nevigation
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Welcome to home Page");
    return res.end();
  } else if (req.url === "/man") {
    res.write("Welcome to Man section");
    return res.end();
  } else if (req.url === "/woman") {
    res.write("Welcome to Woman Section");
    return res.end();
  } else if (req.url === "/kids") {
    res.write("Welcome to Kids Section");
    return res.end();
  } else if (req.url === "/cart") {
    res.write("Welcome to Cart");
    return res.end();
  } else {
    res.write("404 Not Found");
  }
  res.end();
});


const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on localhost:${PORT}`);
});