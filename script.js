
let swiper1=new Swiper(".one",{
  slidesPerView : 4 ,
  spaceBetween : 20,
  navigation : {
    nextEl : ".nextone",
    prevEl : ".prevone",
  },
});
let swiper2=new Swiper(".two",{
  slidesPerView : 4 ,
  spaceBetween : 20,
  navigation : {
    nextEl : ".nexttwo",
    prevEl : ".prevtwo",
  },
});
let swiper3=new Swiper(".three",{
  slidesPerView : 4 ,
  spaceBetween : 20,
  navigation : {
    nextEl : ".nextthree",
    prevEl : ".prevthree",
  },
});

let signin=document.querySelector("#signin");
signin.addEventListener("click",()=>{
  document.querySelector(".modal-signup").showModal();
});
let register=document.querySelector("#register");
register.addEventListener("click",()=>{
  document.querySelector(".modal-signup").showModal();
});
let movieModal=document.querySelector(".modal-movie");
let test=document.querySelector(".swiper-slide");
test.addEventListener("click",()=>{
  movieModal.showModal();
});