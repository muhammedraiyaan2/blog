function login() {
    if (localStorage.getItem("Name") == null) {
        let name = prompt("Enter your name")
        localStorage.setItem("Name", name)
    }
    else if (localStorage.getItem("Name") == "") {
        let name = prompt("Enter your name")
        localStorage.setItem("Name", name)
    }
    else if (localStorage.getItem("Name") != "") {
        alert("Already logged in")
    }
}
if (localStorage.getItem("Name") == null) {
    localStorage.setItem("Name", "")
}
function logout() {
    localStorage.clear()
    if (localStorage.getItem("Name") == null) {
        localStorage.setItem("Name", "")
    }
}
if (localStorage.getItem("Name") == null) {
    localStorage.setItem("Name", "")
}
else if (localStorage.getItem("Name") == `null`) {
    localStorage.setItem("Name", "")
}
function feedback() {
    alert(`${localStorage.getItem("Name")} welcome to the feedback. If your star rating is 5 then enter 5 if you or 4 enter 4 or 3 enter 3 or 2 enter 2 or 1 enter 1`)
    let feedback = prompt("Please enter your feedback")
    if (feedback == 5) {
        alert("Thank you very much sir/mam you like our blog 😊")
        alert("Thank you for your feedback sir/mam 👍")
    }
    else if (feedback == 4) {
        alert("Thank you sir/mam 😀")
        alert("Thank you for your feedback sir/mam 👍")
    }
    else if (feedback == 3) {
        alert("Ok sir/mam 😶")
        alert("Thank you for your feedback sir/mam 👍")
    }
    else if (feedback == 2) {
        alert("Sorry sir/mam we will improve the blog 😨")
        alert("Thank you for your feedback sir/mam 👍")
    }
    else if (feedback == 1) {
        alert("We are so sorry sir/mam we will do updates and we will improve the website 😣")
        alert("Thank you for your feedback sir/mam 👍")
    }
    else {
        alert("Sir/Mam can't understand please try again 😅")
    }
}
let i = 0
let txt = `Hi ${localStorage.getItem("Name")} welcome to the blog`
let speed = 50
let txt2 = `Blogs`
function typeWriter() {
    setInterval(() => {
        if (i < txt.length) {
            document.getElementById(`typings`).innerHTML += txt.charAt(i)
            document.getElementById(`blogs`).innerHTML += txt2.charAt(i)
            i++
        }
    }, speed);
}