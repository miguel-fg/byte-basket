const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");
const Schema = mongoose.Schema;

// user model
const userSchema = new Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        role: {
            type: String,
            enum: ["customer", "employee"],
            default: "customer",
            required: true,
        },
    },
    { timestamps: true }
);

// static register method
userSchema.statics.register = async function(email, password){

    // validation
    if(!email || !password){
        throw Error("All fields must be filled");
    }

    if(!validator.isEmail(email)){
        throw Error("Email is not valid");
    }

    if(!validator.isStrongPassword(password)){
        throw Error("Password not strong enough");
    }

    // check for existing email
    const exists = await this.findOne({ email });

    if(exists){
        throw Error("Email already in use");
    }

    let role = "customer";
    if(email.endsWith("@bytebasket.tech")){
        role = "employee";
    }

    // random string added to password
    const salt = await bcrypt.genSalt(10);

    // hash password and store user obj in the DB
    const hash = await bcrypt.hash(password, salt);
    const user = await this.create({ email, password: hash, role});

    return user;
} 

// static login method
userSchema.statics.login = async function(email, password){
    // validation
    if(!email || !password){
        throw Error("All fields must be filled");
    }

    // check for existing user
    const user = await this.findOne({ email }); 

    if(!user){
        throw Error("User not found");
    }

    // check if password matches stored hash
    const match = await bcrypt.compare(password, user.password);

    if(!match){
        throw Error("Incorrect password");
    }

    return user;
}

module.exports = mongoose.model("User", userSchema);