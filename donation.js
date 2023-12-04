function validateForm() {
    var name = document.getElementById('name').value;
    var staffid = document.getElementById('staffid').value;
    var kcdio = document.getElementById('kcdio').value;
    var contactno = document.getElementById('contactno').value;
    var email = document.getElementById('email').value;
    var amount = document.getElementById('amount').value;


    if (name === '' || staffid === ''|| kcdio === ''|| contactno === ''|| email === ''|| amount === '') {
        alert('Please fill in all fields');
    } else {
        alert('Form submitted successfully!');
    }
}