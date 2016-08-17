var fs = require('fs');

function writeToFile(text){
var fs = require('fs');

fs.appendFile(path.join(__dirname, 'public/test.txt'), text, function(err){
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
});
}
