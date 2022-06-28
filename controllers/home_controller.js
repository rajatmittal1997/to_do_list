module.exports.home = function(req,res){

    return res.render('home',{ title: "TODO App", X: "aqua" ,form_data: formData});
}


var formData = [{
    discription: "",
    date : "",
    category: ""

}]


// module.exports.actionName = function(req,res){}