function validateData(){
    var validateFlag=true;
    var nameRegex=/^[a-zA-Z][^#&<>\"~;$^%{}?]{1,20}$/;
    var numericRegex=/^[0-9]+/;
    var emailRegex=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if(document.getElementById("name").value==""){
        alert("Name is mandatory field");
        validateFlag=false;
        return validateFlag;
    }
    else{
        if(nameRegex.test(document.getElementById("name").value)==false){
            alert("Invalid data in Name field");
            validateFlag=false;
            return validateFlag;
        }
    }
    
    if(document.getElementById("age").value==""){
        alert("Age is mandatory field");
        validateFlag=false;
        return validateFlag;
    }
    else{
        if(numericRegex.test(document.getElementById("age").value)==false){
            alert("Only numeric data is allowed in Age field");
            validateFlag=false;
            return validateFlag;
        }
    }
    if(document.getElementById("number").value==""){
        alert("Number is mandatory field");
        validateFlag=false;
        return validateFlag;
    }
    else{
        if(numericRegex.test(document.getElementById("number").value)==false){
            alert("Only numeric data is allowed in Number field");
            validateFlag=false;
            return validateFlag;
        }
    }
    if(document.getElementById("email").value==""){
        alert("Email is mandatory field");
        validateFlag=false;
        return validateFlag;
    }
    else{
        if(emailRegex.test(document.getElementById("email").value)==false){
            alert("Invalid data in E-mail field");
            validateFlag=false;
            return validateFlag;
        }
    }
    if(validateFlag){
        document.getElementById("addForm").action="add.php";
        document.getElementById("addForm").submit();
    }
    

}