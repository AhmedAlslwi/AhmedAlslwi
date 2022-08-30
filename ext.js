// const check = () => {
//     var fname;
//     var pass;
//     fname = document.getElementById("name").value;
//     pass = document.getElementById("pass").value;

//     if (fname == "Ahmed" && pass == 12345) {
//         console.log("wellcome ahmmed");
//         document.getElementById("title").innerHTML = "wellcome " + fname;
//         document.getElementById('img').src = '123.png'
//         window.location.replace('http://www.temmam.com')
//         // window.location.reload()
//     }
//     else {
//         console.log("you are not Ahmmed")
//         document.getElementById("title").innerHTML = "Error username or password";
//         document.getElementById('img').src = '12.png'
//     }

// }
// alert



function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    console.log(username, password)

    if ((username == "Ahmed" && password == "3000") || (username == "Ali" && password == "12345")) {
    
        alert("login succesfully");
        window.location.assign('https://temmam.com/')
    }
    else {
        alert(
            "login falid"
        )
    }
}


document.getElementById('form').addEventListener('click', () => {
    var username = document.getElementById("username").Value;
    var password = document.getElementById("password").Value;
    console.log(username, password)

    if (username == "Ahmed" && password == "1234") {
        alert("login succesfully");
        return false;
    }
    else {
        alert(
            "login falid"
        )
    }
})