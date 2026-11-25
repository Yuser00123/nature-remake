var fact_num = 8;

function home_page() {
    window.location.href = "index.html";
}

function open_protect() {
    window.location.href = "protect.html";
}

function open_hacks() {
    window.location.href = "hacks.html";
}

function open_facts() {
    window.location.href = "facts.html";
}

function show_enjoyment() {
    fact_num = document.getElementById("fact").value.trim();
    if (fact_num === "") {
        alert("Please enter a fact number.");
        return;
    }
    else if (parseInt(fact_num) <= 0 || parseInt(fact_num) >= 9) {
        alert("Please enter a fact no. from 1 to 8.");
        return;
    }
    else {
    alert(`I also liked the fact no. ${fact_num}!`);
    }
}

function video() {
    window.location.href = "video.html";
}

function random_act() {
    window.location.href = "random.html";
}