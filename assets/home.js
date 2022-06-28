

module.exports.randomColor = function(req,res){ 
    
    return `#${Math.floor(Math.random()*16777215).toString(16)}`

};