
const ejs = require("ejs");
module.exports = 
{
            "/" : (req) =>{
                return ejs.render("./templates/index.html",{"date":new Date()});
            },




}