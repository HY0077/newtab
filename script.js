var greeting = "Willkommen"

function sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

function search() {
    const regex = new RegExp("[.]");
    if (event.keyCode == 13 || event.which == 13) {
        let search = (encodeURIComponent(document.getElementById("textbox").value));
        console.log(search);
        if (regex.test(search)) {
            const win2 = window.open("https://www." + search, "_blank");
            win2.focus;
        } else {
            const win3 = window.open("https://www.google.com/search?q=" + search, "_blank");
            win3.focus;
        }
    }
}


async function datum() {
    while (true) {

        var today = new Date();
        var day = today.getDay();
        var daylist = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];
        var date = today.getDate() + "." + (today.getMonth() + 1) + "." + today.getFullYear();
        var seconds = today.getSeconds();
        var minutes = today.getMinutes();

        if (today.getSeconds() < 10) {
            seconds = String("0") + today.getSeconds();
        }

        if (today.getMinutes() < 10) {
            minutes = String("0") + today.getMinutes();
        }
        var time = today.getHours() + ":" + minutes + ":" + seconds;



        var dateTime = date + ' ' + time;




        if (today.getHours() >= 6 && today.getHours() < 10) {
            greeting = "Guten Morgen"
        } else if (today.getHours() >= 10 && today.getHours() < 13) {
            greeting = "Guten Mittag"
        } else if (today.getHours() >= 13 && today.getHours() < 19) {
            greeting = "Guten Nachmittag";
        } else if (today.getHours() >= 19 && today.getHours() < 21) {
            greeting = "Guten Abend"
        } else if (today.getHours() >= 21) {
            greeting = "Gute Nacht"
        } else if (today.getHours() < 6) {
            greeting = "Gute Nacht"
        } else {
            greeting = "Willkommen"
        }

        document.getElementById("welcome").innerHTML = greeting + " Henry";
        document.getElementById("displayDateTime").innerHTML = "Es ist " + daylist[day] + " der " + dateTime;
        await sleep(200);
    }
}

datum()