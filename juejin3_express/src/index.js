const express = require('express');
const bodyParser = require('body-parser');
const httpRequest=require('./api');
const app = express()
app.use(express.static('static'))
app.use(bodyParser.json({ extended: false }));
app.use( async (request, response, next) => {
  try{
    const {url,method,query,path,protocol,body}=request;
    console.log(request.body)
    let res= null;
    if(method==='GET'){
         res= await httpRequest(method.toLowerCase(),path,query);

    }
    else{
          res= await httpRequest(method.toLowerCase(),path,body);
    }
  
    response.send(res);
    next();

  }
  catch(e){
    response.end(e);
    next()

  }
  
})


app.listen(3001, () => console.log(`App listening on port 3001!`))
