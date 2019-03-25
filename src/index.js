import './css/main1.css'
import home from './home'
import menu from './menu'
import about from './about'
import contact from './contact'
import header from './header'


function component() {
   let  element = document.getElementById('content');
    let body  = document.querySelector("body");
    body.innerHTML=header()
    // use your function!
    element.innerHTML = home()

    const links = document.querySelectorAll('.nav-link');
   links.forEach((link) => {
       link.addEventListener('click', (e)=> {
         console.log(link.textContent)
           if(link.textContent == "Home "){
               element.innerHTML = home()
           } else if(link.textContent == "Menu"){
               element.innerHTML = menu()
           } else if(link.textContent == "About"){
               element.innerHTML = about()
           }else if(link.textContent == "Contact"){
               element.innerHTML = contact()
           }
       })
   });

    return element;
}


document.body.appendChild(component());

