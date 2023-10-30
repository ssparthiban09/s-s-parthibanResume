const resume = document.querySelector("#btn-1");
const firstPage = document.querySelector(".profile-card");
const viewResume=document.querySelector("#main");
const closeBtn=document.querySelector("#xBtn");
const share=document.querySelector("#share")


resume.addEventListener("click",()=>{
    firstPage.style.display="none"
    viewResume.style.display="block"
})

closeBtn.addEventListener("click",()=>{
    viewResume.style.display="none"
    firstPage.style.display="flex"
})

share.addEventListener("click",()=>{
    alert("Heyyy !!! Thank you for clicking....Sorry you can't share this link")
})