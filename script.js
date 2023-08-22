function getFormvalue() {
    //Write your code here
    // const firstName=document.getElementsByClassName("fname");
    // const lastName=document.getElementsByClassName("lname");
    // alert(firstName.value);
    // alert(lastName.value);

	event.preventDefault(); 
            
            var firstName = document.querySelector('input[name="fname"]').value;
            var lastName = document.querySelector('input[name="lname"]').value;

            alert("First Name: " + firstName + "\nLast Name: " + lastName);

}
