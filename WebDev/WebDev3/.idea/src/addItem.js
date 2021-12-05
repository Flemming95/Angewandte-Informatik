function validateForm() {
    return ValidateDOB();
}

function ValidateDOB() {
    var labelError = document.getElementById("labelError");

    //Get Data and split it into dd/mm/yyyy
    var dateString = document.getElementById("dob");
    var regex = /(((0|1)[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/((19|20)\d\d))$/;

    //Check if format is valid
    if (regex.test(dateString)) {
        var parts = dateString.split("/");
        var dtDOB = new Date(parts[1] + "/" + parts[0]+ "/" + parts[2]);
        var dtCurrent = new Date();
        labelError.innerHTML = "Must be between 17 and 60 years old!"
        if (dtCurrent.getFullYear() - dtDOB.getFullYear() < 17 || dtCurrent.getFullYear() - dtDOB.getFullYear() > 61){
            //False if below 60 or higher than 61 (61 can still be 60, if they havent had birthday yet)
            return false;
        }
        else if (dtCurrent.getFullYear() - dtDOB.getFullYear() == 17){
            if (dtCurrent.getMonth() < dtDOB.getMonth()) {
                return false;
            }
            if (dtCurrent.getMonth() == dtDOB.getMonth()){
                //if its in the same month, need to confirm by date
                if (dtCurrent.getDate() < dtDOB.getDate()){
                    return false;
                }
            }
        }
        else {
            if (dtCurrent.getMonth() > dtDOB.getMonth()){
                //If the month is higher , then they will have turned 61 already
                return false;
            }
            if (dtCurrent.getMonth() == dtDOB.getMonth()){
                //If in the same month, need to validate if theyve had their birthday yet
                if (dtCurrent.getDate() >= dtDOB.getDate()){
                    return false;
                }
            }
        }
        labelError.innerHTML = "";
        return true;
    } else {
        labelError.innerHTML = "Please enter date in dd/mm/yyyy format!"
        return false;
    }
}

function addItem() {
    var ul = document.getElementById("new-list");
    var candidate1 = document.getElementById("staffID");
    var candidate2 = document.getElementById("fname");
    var candidate3 = document.getElementById("lname");
    var candidate4 = document.getElementById("dob");
    var candidate5 = document.getElementById("email");
    var candidate6 = document.getElementById("gender");

    var li = document.createElement("li");
    li.setAttribute('id', candidate1.value);
    li.appendChild(document.createTextNode(candidate1.value));
    ul.appendChild(li);
}


