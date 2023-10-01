
// Skills circle 

let circularProgress = document.querySelector("#circular-progress"),
progressValue = document.querySelector("#progress-value");
let progressStartValue = 0,    
progressEndValue = 95,    
speed = 15;

let progress = setInterval(() => {
progressStartValue++;
progressValue.textContent = `${progressStartValue}%`
circularProgress.style.background = `conic-gradient(#0c2911 ${progressStartValue * 3.6}deg, #8ca18e 0deg)`
if(progressStartValue == progressEndValue){
    clearInterval(progress);
}    
}, speed);

let circularProgress1 = document.querySelector("#circular-progress1"),
progressValue1 = document.querySelector("#progress-value1");
let progressStartValue1 = 0,    
progressEndValue1 = 70,    
speed1 = 15;

let progress1 = setInterval(() => {
progressStartValue1++;
progressValue1.textContent = `${progressStartValue1}%`
circularProgress1.style.background = `conic-gradient(#0c2911 ${progressStartValue1 * 3.6}deg, #8ca18e 0deg)`
if(progressStartValue1 == progressEndValue1){
    clearInterval(progress1);
}    
}, speed1);

let circularProgress2 = document.querySelector("#circular-progress2"),
progressValue2 = document.querySelector("#progress-value2");
let progressStartValue2 = 0,    
progressEndValue2 = 50,    
speed2 = 15;

let progress2 = setInterval(() => {
progressStartValue2++;
progressValue2.textContent = `${progressStartValue2}%`
circularProgress2.style.background = `conic-gradient(#0c2911 ${progressStartValue2 * 3.6}deg, #8ca18e 0deg)`
if(progressStartValue2 == progressEndValue2){
    clearInterval(progress2);
}   2
}, speed2);

let circularProgress3 = document.querySelector("#circular-progress3"),
progressValue3 = document.querySelector("#progress-value3");
let progressStartValue3 = 0,    
progressEndValue3 = 90,    
speed3 = 15;

let progress3 = setInterval(() => {
progressStartValue3++;
progressValue3.textContent = `${progressStartValue3}%`
circularProgress3.style.background = `conic-gradient(#0c2911 ${progressStartValue3 * 3.6}deg, #8ca18e 0deg)`
if(progressStartValue3 == progressEndValue3){
    clearInterval(progress3);
}   2
}, speed3);

let circularProgress4 = document.querySelector("#circular-progress4"),
progressValue4 = document.querySelector("#progress-value4");
let progressStartValue4 = 0,    
progressEndValue4 = 80,    
speed4 = 15;

let progress4 = setInterval(() => {
progressStartValue4++;
progressValue4.textContent = `${progressStartValue4}%`
circularProgress4.style.background =`conic-gradient(#0c2911 ${progressStartValue4 * 3.6}deg, #8ca18e 0deg)`
if(progressStartValue4 == progressEndValue4){
    clearInterval(progress4);
}   2
}, speed4)

let circularProgress5 = document.querySelector("#circular-progress5"),
progressValue5 = document.querySelector("#progress-value5");
let progressStartValue5 = 0,    
progressEndValue5 = 75,    
speed5 = 15;

let progress5 = setInterval(() => {
progressStartValue5++;
progressValue5.textContent = `${progressStartValue5}%`
circularProgress5.style.background = `conic-gradient(#0c2911 ${progressStartValue5 * 3.6}deg, #8ca18e 0deg)`
if(progressStartValue5 == progressEndValue5){
    clearInterval(progress5);
}   2
}, speed5);


// contact form 

function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "",
        Password : "",
        To: 'mdamanata8@gmail.com',
        From: document.getElementById("email").value,
        From: "mdamanata8@gmail.com",
        Subject: "mail from your portfolio",
        Body: "Name: " + document.getElementById("name").value +
            "<br> Email: " + document.getElementById("email").value +
            "<br> Phone: " + document.getElementById("phone").value +
            "<br> Message: " + document.getElementById("message").value
    }).then(
        message => {
            console.log(message);
            alert("Not Working, Please contact me via LinkedIn, Twitter, or email");
        },
        error => {
            console.error("Error sending message:", error);
            alert("There was an error sending the message. Please try again later.");
        }
    );
}


// get cv 

document.getElementById("downloadButton").addEventListener("click", function() {
    const resumeUrl = 'assets/ResumeSDE.pdf';
    const downloadLink = document.createElement("a");
    downloadLink.href = resumeUrl;
    downloadLink.download = "Resume.pdf";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
});