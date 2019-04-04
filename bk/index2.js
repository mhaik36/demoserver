const express = require("express");
const app = express();
const cors =  require('cors');

const {json} = require("body-parser");
const { Word, User} = require('./words.model')
app.use(json());
app.use(cors());

// app.get('/word' , (req,res) => {
//     Word.find({})
//     .then(words => res.send({success : true , words}));
// })
app.post('/word' , (req ,res) =>{
    const {en , vn} = req.body;
    const newWord = new Word({en , vn})
    newWord.save()
    .then(word => res.send({success : true , word}))
    .catch(error => res.send({success : false , message : 'INVALID_INPUT!'}));
})
app.post('/user' , (req ,res) => {
    const {username , password} = req.body;
    const newUser = new User({username , password})
    newUser.save()
    .then(user => res.send({success : true }))
    .catch(error => res.send({success : false , message : 'INVALID_INPUT!'}));
})
// app.get('/login' , (req ,res) => {
//     const {username , password} = req.body;
//     res.send({success : true , userData : 'OK'})
//     const user = new User({username , password})
//     user.findOne({username , password})
//     .then(user => res.send({success : true , userData : user}))
//     .catch(error => res.send({success : false , message : 'INVALID_INPUT!'}));
// })
app.get('/login' , (req ,res) => {
    // const {username , password} = req.body;
    // res.send({success : true , userData : 'OK'})
    User.find({})
     .then(users => res.send({success : true , users}));
    // const user = new User({username , password})
    // user.findOne({username , password})
    // .then(user => res.send({success : true , userData : user}))
    // .catch(error => res.send({success : false , message : 'INVALID_INPUT!'}));
})
// app.delete('/word/:_id' ,(req,res) => {
//     Word.findByIdAndRemove(req.params._id)
//     .then(w => {
//         if(!w) throw new Error("CANNOT_FIND_WORD");
//         res.send({success : true , w})
//     })
//     .catch(error => res.send({success : false , message : 'INVALID_INPUT!'}));
// })
// app.put('/word/:_id' ,(req,res) => {
//     const {isMemorized} = req.body;
//     Word.findByIdAndUpdate(req.params._id , {isMemorized} , {new : true})
//     .then(w => {
//         if(!w) throw new Error("CANNOT_FIND_WORD");
//         res.send({success : true , w})
//     })
//     .catch(error => res.send({success : false , message : 'INVALID_INPUT!'}));
// })
app.listen( process.env.PORT || 4000 , ()=> console.log("Server start"));

// mongodb://abc:A123456@ds047504.mlab.com:47504/server2912
// app.get("/cong/:a/:b" , (req , res) =>{
//     const {a , b} = req.params;
//     if(isNaN(a) || isNaN(b)){
//         return res.send({ success : false , message : 'INVALID_TYPE'});
//     }
//     if(b == 0){
//         return res.send({success : false , message : 'DIVIDE_BY-ZERO'});
//     }
//     const result = +a + +b;
//     res.send({success : true , result});
// });
// app.post("/chia" , (req,res) => {
//     const {a , b} = req.body;
//     if(isNaN(a) || isNaN(b)){
//         return res.send({ success : false , message : 'INVALID_TYPE'});
//     }
//     if(b == 0){
//         return res.send({success : false , message : 'DIVIDE_BY-ZERO'});
//     }
//     const result = +a / +b;
//     res.send({success : true , result});
// });
// mongodb://abc:A123456@ds047504.mlab.com:47504/server2912