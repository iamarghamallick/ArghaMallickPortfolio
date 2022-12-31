var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");

}

const scriptURL = 'https://script.google.com/macros/s/AKfycbzPKbpRNBiDQ46XgWbXxZiJ1GvXyqwm4WCm46W_Rh1yJ4aqnaEzpetW17XoHJvqs5iz/exec'
const form = document.forms['submit-to-google-sheet']

let submit_form = document.getElementById("submit-form");
let person_name = document.getElementById("name");
let person_email = document.getElementById("email");
let person_message = document.getElementById("message");
let msg = document.getElementById("msg");

form.addEventListener('submit', e => {
    msg.style.display = "block";
    msg.innerText = "Sending...";
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            console.log('Success!', response);
            msg.style.display = "block";
            msg.innerText = "Message sent sccessfully! Thank you.";
            person_name.value = "";
            person_email.value = "";
            person_message.value = "";
            setTimeout(() => {
                msg.style.display = "none";
            }, 10000)
        })
        .catch(error => {
            console.error('Error!', error.message);
            msg.style.display = "block";
            msg.innerText = "Couldn't send the message!";
            setTimeout(() => {
                msg.style.display = "none";
            }, 10000)
        })
})

let nav_list = document.querySelector(".nav-list");
let menu_open_btn = document.getElementById("menu-open-btn");
let menu_close_btn = document.getElementById("menu-close-btn");
let nav_list_item = document.querySelectorAll(".nav-list-item");

menu_open_btn.addEventListener('click', (e) => {
    e.preventDefault();
    nav_list.style.display = "flex";
    menu_open_btn.style.display = "none";
    menu_close_btn.style.display = "block";
})
menu_close_btn.addEventListener('click', (e) => {
    e.preventDefault();
    nav_list.style.display = "none";
    menu_open_btn.style.display = "block";
    menu_close_btn.style.display = "none";
})
nav_list_item.forEach(c => {
    c.addEventListener('click', () => {
        nav_list.style.display = "none";
        menu_open_btn.style.display = "block";
        menu_close_btn.style.display = "none";
    })
})