/*eslint-env browser*/

//SUBMIT FORM
function submitForm() {
    
    var tour = document.forms["bookingForm"]["tour"].value;
        
    var pickTime = document.forms["bookingForm"]["times"].value;
       
    var firstName = document.forms["bookingForm"]["firstname"].value;
    
    var lastName = document.forms["bookingForm"]["lastname"].value;
        
    var email = document.forms["bookingForm"]["email"].value;
        
    var ccn = document.forms["bookingForm"]["ccn"].value;
    
    var expiry = document.forms["bookingForm"]["expiry"].value;
    
    var cvc = document.forms["bookingForm"]["cvc"].value;
    
        
    if(tour==""){
       alert("Please select a tour");
    }
    else if(pickTime==""){
        alert("Please select a time");
    }
    else if(firstName==""){
        alert("Please enter a first name");
    }
    else if(lastName==""){
        alert("Please enter a last name");
    }
    else if(email==""){
        alert("Please enter an email");
    }
    else if(ccn==""){
        alert("Please enter the credit card number");
    }
    else if(expiry==""){
        alert("Please enter the credit card expiry");
    }
    else if(cvc==""){
        alert("Please enter the credit card cvc");
    }
    else{
        alert("Submission Completed!");
    }
    
}