import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    username: {
        type: String, 
        required: true, 
        unique: true
    },
    email:{
        type: String, 
        required: true , 
        unique: true 
    },
    passwordHash: {
        type: String,
        required: true 
    },
    bio: {
        type: String,
    },
    profileImage: String, 
    
    socialLinks : {
        github: String, 
        X: String, 
        LinkedIn: String 
    }
}, {timestamps: true});


userSchema.pre("save", async function (next){
    if(!this.idModified("password")) return next();

    this.password = await bcrypt.hash(this.password, 10)
    return next()
});


userSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password, this.password);
}

userSchema.methods.generateAccessToken = function(){
    return jwt.sign(
        {
            _id : this._id,
            email: this.email,
            username: this.username,
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
} 


userSchema.methods.generateRefreshToken = function(){
    return jwt.sign(
        {
            _id: this._id 
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}



module.exports = mongoose.model("User", userSchema);

