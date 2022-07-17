const btnMobile = document.querySelector(".btn-mobile");

function toggleMenu(event) {
  if(event.type === "touchstart") event.preventDefault()

  const nav = document.querySelector('[data-menu="nav"]');
  nav.classList.toggle('ativo')

  const ativo = nav.classList.contains('ativo')
  event.currentTarget.setAttribute('aria-expanded', 'true')
  
  if(ativo){
    event.currentTarget.setAttribute('aria-label',  'Fechar menu')
  }else {
    event.currentTarget.setAttribute('aria-label',  'Abrir menu')
  } 
}
btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu);

const signIn = document.querySelector('.input-newslater')

function handleKeyUp(event){
  const target = event.target
  if(!target.checkValidity()){
    signIn.classList.add('error')
  }
  setTimeout(()=>{
    signIn.classList.remove('error')
  },1000)
}

signIn.addEventListener('change', handleKeyUp)

                 