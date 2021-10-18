const form = document.querySelector('form');
// console.log(form)
const input = document.querySelector('input');
console.log(input.value)
const blocs = document.querySelector('ul');
const text = '';
let toutesLesTaches = [];
    form.addEventListener('submit', (e)=>{
        e.preventDefault();
        const text = input.value;
        if(text !== ''){
            inserUneTache(text);
            input.value = '';
        }
    })

    function inserUneTache(text){
        const objet = {
            text,
            id : Date.now()
        }
        afficherTache(objet)
    }
function afficherTache(objet){

    const item = document.createElement('li');
    item.setAttribute('data-key', objet.id);

    const input = document.createElement('input')
    input.setAttribute('type' , 'checkbox')
    input.addEventListener('click', rayerText)
    item.appendChild(input)

    const txt = document.createElement('span')
    txt.innerText = objet.text
    item.appendChild(txt)

    const croix = document.createElement('img')
    croix.setAttribute('src', './ressources/images.png')
    croix.addEventListener('click', supprimTache)
    item.appendChild(croix)

    blocs.appendChild(item);
    toutesLesTaches.push(item)
}

function rayerText(e){
    e.target.parentNode.classList.toggle('rayer')
}
function supprimTache(e) {
    toutesLesTaches.forEach(el => {

      if(e.target.parentNode.getAttribute('data-key') === el.getAttribute('data-key')){
        el.remove();
        toutesLesTaches = toutesLesTaches.filter(li => li.dataset.key !== el.dataset.key);
      }

    })
}


