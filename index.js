function myFunc(){
    var FullnameText = document.getElementById("fullname").value;
    if (FullnameText.length > 1){
        alert("Full Name - " + FullnameText)
    }
    else{
        alert("Full Name is missing")
    }
}