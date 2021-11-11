const mongoose = require('mongoose');



const Account = mongoose.Schema;

const accountSchema = new Account({
    image: String,
    user_name: String,
    user_lastname: String,
    user_email: String,
    user_password: String,
    date: String,
});


const account = mongoose.model('account', accountSchema);



module.exports = account;
