const express = require("express");
const app = express();
const port = 3001;
// 设置跨域，允许所有域名访问
app.all("*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild"
  );
  res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");
  if (req.method == "OPTIONS") {
    res.send(200);
  } else {
    next();
  }
});

const testdata = [
  {
    bookName: "The Lord of the Rings",
    price: 100,
    author: "J.R.R. Tolkien",
    publishDate: "1954-07-29",
  },
  {
    bookName: "The Hobbit",
    price: 50,
    author: "J.R.R. Tolkien",
    publishDate: "1937-09-21",
  },
  {
    bookName: "Harry Potter and the Philosopher's Stone",
    price: 80,
    author: "J.K. Rowling",
    publishDate: "1997-06-26",
  },
  {
    bookName: "西游记",
    price: 30,
    author: "吴承恩",
    publishDate: "1986-06-26",
  },
  {
    bookName: "红楼梦",
    price: 30,
    author: "曹雪芹",
    publishDate: "1986-06-26",
  },
];

app.get("/books", (req, res) => {
  //   发送 testdata 数组
  res.send(testdata);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
