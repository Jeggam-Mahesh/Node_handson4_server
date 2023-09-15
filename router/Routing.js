const route=require('express').Router();
const home=require('../controller/Home')
const {register,login}=require('../controller/RegistrationLogin')
// const login=require('../controller/Login');
route.get("/",home);
route.post('/register',register)
route.post('/login',login);
module.exports=route; 