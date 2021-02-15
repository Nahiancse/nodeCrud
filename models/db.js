const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27017/employeeDB', {useNewUrlParser: true, useUnifiedTopology: true},(err)=>{
    if(!err){console.log('mongodb connected successfully')}
    else{console.log('connection failed'+err)}

});
require('./employee.model');