let nopictur = document.getElementById('NOPIC')
let pictur = document.getElementById('PIC')
pictur.style.display='none'
function action(){
  setTimeout(() => {
    pictur.style.display =''
    nopictur.style.display = 'none'
  }, 1000);
}

function action1(){
  window.location='https://drive.google.com/file/d/1b-85fWu0hEP7EufDNTOYiJSCYYktiIqC/view'
}