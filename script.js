function getFormvalue() {
    //Write your code here

	event.preventDefault(); 
            
            var firstName = document.querySelector('input[name="fname"]').value;
            var lastName = document.querySelector('input[name="lname"]').value;

            alert(firstName.value + " " + lastName.value);
}
