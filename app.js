 const signinBtnlink=document.querySelector('.signinBtn-link');
const signupBtnlink=document.querySelector('.signupBtn-link');
const wrapper=document.querySelector('.wrapper');
 signupBtnlink.addEventListener('click', () => {
   wrapper.classList.toggle('active');
})
signinBtnlink.addEventListener('click',() => {
    wrapper.classList.toggle('active');
})