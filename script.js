var myVar = setInterval(myTimer, 10000);

function myTimer() {
    const jokes = [
        "Why have one cranky Jewish guy when you could have two?",
        "The only thing they hate more than each other is Donald Trump",
        "They're not even Democrats",
        "What are the chances they both die in office?",
        "A love story waiting to happen",
        "Shot and chaser",
    ];
    document.getElementById("blah").innerHTML = jokes[Math.floor(Math.random() * jokes.length)]; 
 }