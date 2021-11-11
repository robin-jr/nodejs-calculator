let express=require('express');

let port=8000;
let app=express();

app.set('view engine','ejs');

app.use(express.urlencoded({extended:true}));

let num1="";
let operator="";
let num2="";
let a="";

app.get('/',(req,res)=>{
    if(operator=="+"){
        a= num1+num2;
    }
    else if(operator=="-"){
        a= num1-num2;
    }
    else if(operator=="*"){
        a= num1*num2;
    }
    else if(operator=="/"){
        a= num1/num2;
    }
    else if(operator=="%"){
       a= num1%num2;
    }
   console.log(a);
    res.render('form',{resultvalue:a})
});



app.post('/',(req,res)=>{
   num1=Number(req.body.one); 
   operator=req.body.operator;
   num2=Number(req.body.two);
   res.redirect('/');
})

app.listen(port,(res)=>{
    console.log(`the server runs on ${port}`)
});