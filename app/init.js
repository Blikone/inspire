function getName() {
    // debugger;
    var name = localStorage.getItem('inspire-name');
    if (name) {
        // console.log("Hello, " + name)
        document.getElementById('first-name').innerText = name;
        return;
    }
    namePrompt();
}

function namePrompt() {
    var userName = prompt("Please enter your name", "Spike Spiegel");
    // console.log(userName);
    var firstName = userName.split(' ')[0];
    // console.log(firstName);
    if (firstName) {
        // console.log("Hello, " + firstName)
        document.getElementById('first-name').innerText = firstName;
        localStorage.setItem('inspire-name', firstName);
    }
}
function startTime() {
   	var today = new Date();
   	var h = today.getHours();
	var m = today.getMinutes();
	// var s = today.getSeconds();
	m = checkTime(m);
	// s = checkTime(s);
    setGreeting(h);
	document.getElementById('current-time').innerHTML = h + ":" + m;
	setTimeout(startTime, 500);
}
function checkTime(i) {
	if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
function setGreeting(h) {
    var greeting
    switch(h) {
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
            greeting = "Good morning, ";
            break;
        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
            greeting = "Good afternoon, ";
            break;
        case 17:
        case 18:
        case 19:
        case 20:
        case 21:
            greeting = "Good evening, ";
            break;
        case 22:
        case 23:
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
            greeting = "Go to bed, ";
    }
    document.getElementById('greeting').innerHTML = greeting;
}

getName();
startTime();