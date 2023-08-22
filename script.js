function getFormvalue() {
    //Write your code here
    
    // alert(firstName.value);
    // alert(lastName.value);

	event.preventDefault(); 
            
            // var firstName = document.querySelector('input[name="fname"]').value;
            // var lastName = document.querySelector('input[name="lname"]').value;

	const firstName=document.getElementsByClassName("fname");
    const lastName=document.getElementsByClassName("lname");

            alert(firstName + " " + lastName);

}
