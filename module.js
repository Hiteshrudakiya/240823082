const path = require('path');
const moment=require('moment');
const fs = require('fs')
console.log(path.dirname(__dirname));
console.log(path.extname('a.txt'));


console.log(moment().format("DD-MM-YYYY HH:MM a"));
console.log(moment().format("ddddd"));
console.log(moment().add(8,"months").format("DD-MM-YYYY HH:MM"))



// write file
const path_about="hello"
console.log(fs.writeFile("one.txt",path_about,function (err){
    if(err)throw err;
    console.log("file save");
}));

// read file
console.log(fs.readFile("one.txt","utf8",function (err,data){
    if(err)throw err;
    console.log("file data are",data);
}));

// delete file
fs.unlink("one.txt",function (err){
        if(err)throw err;
        console.log("file delete");
});

// update/append file
new_data="good morning"
fs.appendFile("one.txt",new_data,function (err){
        if(err)throw err;
        console.log("data update")
})
