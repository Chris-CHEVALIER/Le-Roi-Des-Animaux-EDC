function changeTheme () {
  if (document.body.classList.contains('dark-theme')) {
    document.body.classList.remove('dark-theme')
  } else {
    document.body.classList.add('dark-theme')
  }
}

/* let age = 31
age += 1
const firstName = 'Chris'
let vaccinated = false

if (age >= 18 && vaccinated == true) {
  console.log('Je suis majeur et vacciné !')
} else {
  console.log('Je suis mineur et non vacciné.')
} */

let preys = ['Buffle', 'Zèbre', 'Antilope', 'Hyenes', 'Humain']
const foodTitle = document.getElementById('eating')
const ul = document.getElementById('preys-container')
preys.sort()
preys.reverse()
//preys[2] = 'Crocodile'
foodTitle.addEventListener('click', () => {
  /* const addButton = document.createElement('button')
  addButton.innerText = '+'
  foodTitle.appendChild(addButton)
  addButton.addEventListener('click', () => {
    preys.push('Nuggets')
  }) */
  if (ul.innerHTML != '') {
    ul.innerHTML = ''
  } else {
    /* for (let i = 0; i < preys.length; i++) {
      let li = document.createElement('li') // <li></li>
      li.innerText = preys[i] // <li>Antilope</li>
      ul.appendChild(li) // <ul><li>Antilope</li></ul>
    } */
    preys.forEach(prey => {
      let li = document.createElement('li') // <li></li>
      li.innerText = prey // <li>Antilope</li>
      ul.appendChild(li) // <ul><li>Antilope</li></ul>
    })
  }
})

let cosmo = {
    name: "Cosmo",
    age: 1,
    breed: "Golden Retriever",
    weight: 31,
    color: "sable" 
}

cosmo.age += 3

document.write("Mon chien s'appelle " + cosmo.name + " et a " + cosmo.age + " ans !")