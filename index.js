
const express = require('express');
const port = 8000;
const app = express();

var randomColor = function(){
    return `#${Math.floor(Math.random()*16777215).toString(16)}`
}

// use express router

app.get('/',function(req,res){

    DbSchema.find({}, function(err,Dbm){
        if(err){
            console.log('error in fetching data from database');
            return
        }
        return res.render('home',{ title: "TODO App" , form_data: Dbm});
    })
    
})

app.set('view engine','ejs');
app.set('views','./views');
app.use(express.urlencoded())
app.use(express.static('assets'));
const db = require('./config/mongoose')
const DbSchema = require('./models/schema')

var format = require('date-fns/format')

app.post('/create-form', function(req,res){

    // formData.push(req.body) date: format(req.body.date, 'MM/dd/yyyy'),
   // console.log(req.body)
    // DbSchema.create(req.body,function(err, newDb){
        DbSchema.create({...req.body, color: randomColor()}, function(err, newDb){
        if(err){
            console.log('error in create a list');
            return ;}
            console.log('**********',newDb);
            return res.redirect('back')
            
        });
});


app.get('/delete-data/', function(req,res){

    let id = req.query.id
    console.log(id)
    DbSchema.findByIdAndDelete(id,function(error){

        if(error){
            console.log('Error in deleting an list from database')
            return;
        }
        return res.redirect('back')
    })
    
})
app.get('/delete-list', function(req,res){

    var id = req.query;
    var count = Object.keys(id).length;
    for( let i=0; i<count;i++){
    DbSchema.findByIdAndDelete(Object.keys(id)[i],function(error){
        DbSchema.deleteMany
        if(error){
            console.log('Error in deleting an list from database')
        }
        })
    }
        return res.redirect('back');
    
})
app.listen(port,function(err){
    if(err){
    console.log(`Error in running the server: ${err}`);
    }
    else
    console.log(`Server is up and running on port: ${port}`)
});