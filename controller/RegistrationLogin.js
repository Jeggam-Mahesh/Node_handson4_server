const bcrypt=require('bcrypt');
const secretkey="mahesh@$1234"
const saltround=10;
const jwt=require('jsonwebtoken');
let arr=[];
const register=(req,res)=>{ 
const details=req.body;
console.log("details:",details)
const find=arr.find((item)=>item.email===details.email)
if(find){
    return res.send({msg:"user is already registered"})
}
const hashPswrd=bcrypt.hashSync(details.password,saltround);
details.password=hashPswrd;
console.log("hashed password",details.password);
arr.push(details);
return res.status(200).send({msg:"user is successfully registered",result:"OK"})
}
///login ...

const login=async(req,res)=>{
    const details=req.body;
    console.log("details:",details)
    const find=arr.find((item)=>item.email===details.email) 
    if(!find){ 
        return res.send({msg:"user is not registered"}) 
    }
    const validate= await bcrypt.compare(details.password,find.password)
    console.log("validate:",validate)
    if(!validate){
        return res.send({msg:"user password is wrong",error:"user is not authorized"});
    }
    let token =jwt.sign({email:details.email},secretkey,{expiresIn:'30d'}); 
    console.log("token:",token);
    return res.status(200).send({msg:"user is successfully loged in",token:token,result:"OK"})
    }

module.exports={register,login};