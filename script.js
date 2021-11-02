function logout() {
if(localStorage.getItem("Name") != null){
    localStorage.removeItem('Name')
}
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
// let login=document.getElementById("Feed")
// const logins=async (e)=>{
//     let feedback = prompt("Please enter your feedback")
//     e.preventDefault()
//     let na=document.getElementById('Name')
//     let js={
//         FeedBack:feedback,
//     }
//     let rest = await fetch("https://blog-c7e27-default-rtdb.firebaseio.com/Feedback.json",
//     {
//         method:"POST",
//         headers: {
//             "Content-Type":"application/json",
//         }, 
//         body: JSON.stringify(js)
//     })
// }
// login.addEventListener("click",logins())
async function feedback(){
    alert(`${localStorage.getItem("Name")} welcome to the feedback. If your star rating is 5 then enter 5 if you or 4 enter 4 or 3 enter 3 or 2 enter 2 or 1 enter 1`)
    let feedback = prompt("Please enter your feedback")
    let query="null"
    // let feedback="s"
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
        query=prompt("Enter the query why you are not happy with the blog please 😣")
        alert("Thank you for your feedback sir/mam 👍")
    }
    else if (feedback == 1) {
        alert("We are so sorry sir/mam we will do updates and we will improve the website 😣")
        query=prompt("Enter the query why you are not happy with the blog please 😣")
        alert("Thank you for your feedback sir/mam 👍")
    }
    else {
        alert("Sir/Mam can't understand please try again 😅")
    }
    let js={
        FeedBack:feedback,
        Query:query,
    }
    let rest = await fetch("https://blog-c7e27-default-rtdb.firebaseio.com/Feedback.json",
    {
        method:"POST",
        headers: {
            "Content-Type":"application/json",
        }, 
        body: JSON.stringify(js)
    })
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