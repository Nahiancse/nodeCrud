const mongoose=require('mongoose');

var employeeSchema=new mongoose.Schema({
    fullname:{
        type:String,
        required:'this field is required'
    },
    email:{
        type:String
    },
    mobile:{
        type:String
    },
    city:{
        type:String
    }
});

//custom validation for email
employeeSchema.path('email').validate((val)=> {
    emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailRegex.test(val); // Assuming email has a text attribute
 }, 'invalid email')
mongoose.model('Employee',employeeSchema);