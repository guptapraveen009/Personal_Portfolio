let startbtn = document.getElementById("start-btn");
let startScreen = document.getElementById("start-Screen");
let MainScreen = document.getElementById("Main-Screen")
let Color = document.getElementById("color-changer")
let container = document.querySelector("container");
let Nav = document.getElementById("nav-bar");
let Section = document.getElementById("sections")
let about = document.getElementById("about-section");
let skill = document.getElementById("skill-section");
let Education = document.getElementById("Education-Section")
let Works = document.getElementById("MyWorks");
let skilllist = document.getElementById("skill-list")
let inputName = document.getElementById("Name")
let inputNumber = document.getElementById("Number");
let inputemail = document.getElementById("E-mail");
let Message = document.getElementById("message")
let submitbtn = document.getElementById("submit")

startbtn.addEventListener("click", function start(e) {
    startScreen.classList.remove("active");
    MainScreen.classList.add("active")
    e.preventDefault()
})

Color.addEventListener("click", function color() {
    document.body.classList.toggle("Dark");

})

submitbtn.addEventListener('click' , (e) => {
e.preventDefault();
if(inputName.value === "" ||inputNumber.value === "" ||inputemail.value === "" || Message.value === ""){
    alert("Please Fill All Boxes");
}else{
    alert(` Hey ${inputName.value} Thank You For Contacting Me`);
}
})
