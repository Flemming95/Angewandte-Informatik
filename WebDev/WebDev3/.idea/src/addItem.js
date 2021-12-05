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


