function handleSubmit(event) {
    // prevent the form from submitting
    event.preventDefault();
    // get the input values
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const address = document.getElementById('address').value;
    const pincode = document.getElementById('pincode').value;
    const gender = document.querySelector('input[name="gender"]:checked').title;
    const state = document.getElementById('state').value;
    const country = document.getElementById('country').value;
  
  
    // create a new table row
    const tableBody = document.getElementById('table-body');
    const newRow = tableBody.insertRow(-1);
  
    // insert cells in the new row and add the input values
    const firstNameCell = newRow.insertCell(0);
    firstNameCell.innerHTML = firstName;
  
    const lastNameCell = newRow.insertCell(1);
    lastNameCell.innerHTML = lastName;
  
    const genderCell = newRow.insertCell(2);
    genderCell.innerHTML = gender;
  
    const addressCell = newRow.insertCell(3);
    addressCell.innerHTML = address;
  
    const pincodeCell = newRow.insertCell(4);
    pincodeCell.innerHTML = pincode;

    const stateCell = newRow.insertCell(5);
    stateCell.innerHTML = state;

    const countryCell = newRow.insertCell(6);
    countryCell.innerHTML = country;

    const choiceCell = newRow.insertCell(7);
    choiceCell.innerHTML =myFunction(event);
    // clear the form inputs
    document.getElementById('form').reset();

  }
  function myFunction(event) 
        { 
            let checkboxes= document.querySelectorAll('input[name="food"]:checked'); 
            let output= [];
            if(checkboxes.length>=2)
            {
            checkboxes.forEach((checkbox) => 
            { 
              output.push(checkbox.value); 
            });
        return output;
         }
        else{
          alert("please select atleast two choice of food");
        } }