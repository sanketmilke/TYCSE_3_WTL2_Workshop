const http=require('http')
const books = JSON.stringify([
    { title: "The Alchemist", author: "Paulo Coelho", year: 1988 },
    { title: "The Prophet", author: "Kahlil Gibran", year: 1923 }
  ]);
  
  const authors = JSON.stringify([
    { name: "Paulo Coelho", countryOfBirth: "Brazil", yearOfBirth: 1947 },
    { name: "Kahlil Gibran", countryOfBirth: "Lebanon", yearOfBirth: 1883 }
  ]);
  
  http.createServer(function (req, res) {
    res.setHeader("Content-Type", "application/json");
      switch (req.url) {
          case "/books":
              res.writeHead(200);
              res.end(books);
              break
          case "/authors":
              res.writeHead(200);
              res.end(authors);
              break
          default:
              res.writeHead(404);
              res.end(JSON.stringify({error:"Resource not found"}));
      }
  
  }).listen(8080);
  console.log('server started ')
  