var express = require('express');
const fs = require("fs");
var app = express();

const path = require('path')
const publicPath = path.join(__dirname, "/views")
// app.use(express.static(publicPath))

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.json());
// app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, () => {
  console.log("server is up on port 3000");
});


app.get("/",function(req,resp){
  fs.readFile(__dirname + "/public/todos/todos.json","utf8" ,(err,data)=>{
    if(err){
      console.log(err)
    }
    console.log("getObjFromFile: " + data)
    console.log(typeof(data))
    data = JSON.parse(data)
    console.log("getObjFromFile: " + data)
    console.log(typeof(data))
    resp.render("index",{title: "this is fake title", taskList: data})
  })
})

app.post("/todos",(req,res)=>{
  const timestamp = Date(Date.now())
  const status = "NOT FINISH"
  var title = req.body.title
  var desc = req.body.desc
  var id = req.body.id

  const content = {
    title: title,
    desc: desc,
    id: id,
    timestamp:timestamp,
    status:status,
  }
  // console.log(content)
  var contStr
  fs.readFile(__dirname + "/public/todos/todos.json","utf8",(err,contents)=>{
    if (err) {console.error(err)}
    // contents = JSON.parse(contents)
    // console.log(contents)
    // console.log(typeof(contents))
    contStr = contents.replace("]",",")+JSON.stringify(content)+']'
    // console.log("heres readFile: ")
    // console.log(contStr)
    // console.log(typeof(contStr))
  })
  fs.writeFile(__dirname + "/public/todos/todos.json",contStr,{flag:"w"})

  // if (fs.existsSync(__dirname + "/public/todos/todos.json")){
  //   var dataContent
  //   fs.readFile(__dirname + "/public/todos/todos.json","utf8",function(err,data){
  //     dataContent = JSON.parse(data)
  //     dataContent.push(content)
  //   })
  //   fs.writeFile(__dirname + "/public/todos/todos.json",dataContent,{flag:"w+"})
    
  // }else{
  //   var data = []
  //   data.push(content)
  //   fs.writeFile(__dirname + "/public/todos/todos.json",JSON.stringify(data),{flag:"w+"},e=>{if(e){console.log(e)}})
  // }

  res.send("nice job")
})

app.put("/todo/",(req,res)=>{
  console.log("put todo/")
  var content = getObjFromFile()
  console.log(content)
  console.log(typeof(content))
  res.send("end put")
})

function getObjFromFile(){
  fs.readFile(__dirname + "/public/todos/todos.json","utf8" ,(err,data)=>{
    if(err){console.log(err)}
    console.log("getObjFromFile: " + data)
    return data
  })
}

module.exports = app;
