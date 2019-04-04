const mongoose = require('mongoose');
// mongoose.connect('mongodb://abc:A123456@ds047504.mlab.com:47504/server2912', {useMongoClient : true});
mongoose.connect('mongodb://abc:A123456@ds047504.mlab.com:47504/server2912', {useNewUrlParser : true});

const coffee_shops = mongoose.model('coffee_shops' , {
    name: { type: String, require: true, trim: true },
    images: { type: String, require: true, trim: true },
    likes: { type: String, require: true, trim: true },
    comments: { type: String, require: true, trim: true },
    hours: { type: String, require: true, trim: true}
}); 
 
// 1 : SELECT cac gia tri ben trong database

// coffee_shops.find({})
// .then(word => console.log(word))
// .catch(error => console.log(error));

//2 : Them du lieu vao
// const word = new Word({en : 'Four' , vn : 'Bon'});
// word.save()
// .then(word => console.log(word));

//3 : Xoa du lieu
// Word.findByIdAndRemove('5c4c2eb89375ee2a409773b0')
// .then(word => console.log(word));


// 4 : Update du lieu
// Word.findByIdAndUpdate('5c4c2f6fc48e6901ec4b5cd6' , 
//                         {isMemorized : false} , 
//                         {new : true})
// .then(word => console.log(word))

module.exports = {coffee_shops};