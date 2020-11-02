
Date.prototype.toShortFormat = function() {

    var month_names =["Jan","Feb","Mar",
                      "Apr","May","Jun",
                      "Jul","Aug","Sep",
                      "Oct","Nov","Dec"];
    
    var day = this.getDate();
    var month_index = this.getMonth();
    var year = this.getFullYear();
    
    return "" + day + "-" + month_names[month_index] + "-" + year;
}

var today = new Date();
var terminationDate = new Date(new Date().setFullYear(new Date().getFullYear() + 5));

module.exports = () =>{
    return {
        "Owner":"Murlidhar Varma",
        "CreationDate": today.toShortFormat(),
        "TerminationDate": terminationDate.toShortFormat(),
        "ApplicationName":"Workflow",
        "ApplicationOwner":"Murlidhar Varma",
        "BU":"POC",
        "Description":"Workflow",
    }
}