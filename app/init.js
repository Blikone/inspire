function namePrompt() {
    var userName = prompt("Please enter your name", "Spike Spiegel");
    console.log(userName);
    var firstName = userName.split(' ')[0];
    console.log(firstName);
    if (firstName) {
        console.log("Hello, " + firstName)
        document.getElementById('first-name').innerText = firstName;
    }
}
namePrompt();