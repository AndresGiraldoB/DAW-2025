const theme = document.querySelector(".dark-light");
const html = document.documentElement;

theme.addEventListener("click", lightDark);
function lightDark(){  
  const esOscuro = html.getAttribute("data-bs-theme") === "dark";
  //console.log(esOscuro);
  html.setAttribute("data-bs-theme", esOscuro ? "light" : "dark");
  theme.textContent = esOscuro ? "🌙" : "☀️";
}

//popover incializacion global

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new window.bootstrap.Popover(popoverTriggerEl))


//scrollspy js script

document.querySelectorAll('.nav-item>[data-bs-toggle="tab"]').forEach(el => {
  //console.log(el);
  el.addEventListener('shown.bs.tab', () => {
    const target = el.getAttribute('data-bs-target')
    const scrollElem = document.querySelector(`${target} [data-bs-spy="scroll"]`);
    if(scrollElem){
      window.bootstrap.ScrollSpy.getOrCreateInstance(scrollElem).refresh();
      console.log('ScrollSpy refrescado sobre:', scrollElem);
    }
    //console.log(scrollElem);
  })
});


//alert script

const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn');
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    appendAlert('¡Todo ha salido bien! Esto es un Alert personalizado', 'success');
  });
}