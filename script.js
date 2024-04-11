document.getElementById('fname').addEventListener('blur', function() {
    // code to execute when the input field loses focus goes here
});
document.getElementById('fname').addEventListener('blur', function() {
    let s = document.getElementById('fname').value;
    s = s.toUpperCase();
    document.getElementById('fname').value = s;
});