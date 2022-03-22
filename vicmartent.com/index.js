let bar = document.querySelector(".hamburger")
let nav = document.querySelector(".navlinks")
let mobileNav = document.querySelector(".mobile_navigation")
let mobileLinks = document.querySelector(".mobile_links")
const openForm = document.querySelector(".open_form")

bar.addEventListener("click", () =>{
    nav.classList.toggle("flip")
    mobileNav.classList.toggle("flip")
    mobileLinks.classList.toggle("flip")

})
openForm.addEventListener("click", ()=>{
    alert("Messaging is currently unavailable, try again later")
    
})