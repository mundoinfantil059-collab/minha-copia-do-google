const button= document.querySelector("chrome")
button.addEventListener('mouseenter',()=>{
button.classList.add("balancar");
setTimeout(()=>{
    button.classList.remove("balancar");
},300)
})