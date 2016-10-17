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
function startTime() {
   	var today = new Date();
   	var h = today.getHours();
	var m = today.getMinutes();
	// var s = today.getSeconds();
	m = checkTime(m);
	// s = checkTime(s);
	document.getElementById('current-time').innerHTML = h + ":" + m;
	var t = setTimeout(startTime, 500);
}
function checkTime(i) {
	if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
function setGreeting() {
    var today = new Date();
    var h = today.getHours();
    console.log("h is a " + typeof(h));
    var greeting
    switch(h) {
        case 5, 6, 7, 8, 9, 10, 11:
            greeting = "Good morning, ";
            break;
        case 12, 13, 14, 15, 16:
            greeting = "Good afternoon, ";
            break;
        case 17, 18, 19, 20, 21:
            greeting = "Good evening, ";
            break;
        case 22, 23, 0, 1, 2, 3, 4:
            greeting = "Go to bed, ";
    }
    document.getElementById('greeting').innerHTML = greeting;
}

namePrompt();
startTime();
setGreeting();