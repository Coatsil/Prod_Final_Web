const wrapper = document.querySelector('.wrapper');
const registerLink = document.querySelector('.link-registro');
const loginLink = document.querySelector('.link-login');

registerLink.onclick = () => {
    wrapper.classList.add('active');

}

loginLink.onclick = () =>{
    wrapper.classList.remove('active');
}