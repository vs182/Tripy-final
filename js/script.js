const menubtn =  document.querySelector(".menu-btn")
const nav =  document.querySelector(".navigation")
const sec = document.querySelector(".second-sec");
menubtn.addEventListener("click",()=>{
    menubtn.classList.toggle("active")
    nav.classList.toggle("active")
})

const btns = document.querySelectorAll(".nav-btn")
const slides = document.querySelectorAll(".video-slide")
const content = document.querySelectorAll(".content")

var slider = function(manual){

    btns.forEach((btn)=>{
        btn.classList.remove("active")
    })
    slides.forEach((slide)=>{
        slide.classList.remove("active")
    })

    content.forEach((conten)=>{
        conten.classList.remove("active")
    })
    
    slides[manual].classList.add("active")
    btns[manual].classList.add("active")
    content[manual].classList.add("active")

}   

btns.forEach((btn,i)=>{
    btn.addEventListener("click",()=>{
        slider(i)
    })
})


function showimage() {
    var res = localStorage.getItem("curretuser") 
    var result = localStorage.getItem(res).split(',').toString().split('"')  // geting item from local dtorage// geting item from local dtorage
    var profile = result[15]  // format : {"username":"Hari"}
    var profileimg = document.querySelector(".user");
    var image = new Image()
    image.src = profile;
    profileimg.appendChild(image)
}
showimage()