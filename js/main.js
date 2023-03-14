function convertToSuccessButton(button){
    button.classList.remove('btn-primary')
    button.classList.add('btn-success')
}

let cardList = Array.from(document.querySelectorAll('.container .row:nth-of-type(3) .col-lg-3'))
let cardsSection = document.querySelector('.container .row:nth-of-type(3)')

let animalsCard = cardList.splice(0,1)

let buttonAnimals = animalsCard[0].querySelector('.btn')
convertToSuccessButton(buttonAnimals)

cardList.splice(2, 0, animalsCard[0])

cardList.reverse()

cardList.forEach(card => {
    cardsSection.appendChild(card)
})

let headerRow = document.querySelector(".container .row:nth-of-type(2)")
let jumbotron = headerRow.querySelector('.jumbotron')
jumbotron.classList.add(...['bg-secondary', 'text-right', 'text-light'])

let headerButton = headerRow.querySelector('.btn')
convertToSuccessButton(headerButton)

let menuRow = document.querySelector(".container .row:nth-of-type(1)")
let btnGroup = document.querySelector(".btn-group-vertical")

btnGroup.classList.remove('btn-group-vertical')
btnGroup.classList.add('btn-group-horizontal')

let listGroup = document.querySelector('.list-group')
let groupItemToClone = listGroup.querySelector('.list-group-item')
let newGroupItemList = ['Quarto Item', 'Quinto Item']

newGroupItemList.forEach(text => {
    let groupItemClone = groupItemToClone.cloneNode(true)
    groupItemClone.innerText = text
    listGroup.appendChild(groupItemClone)
})

let groupItemList = document.querySelectorAll('.list-group-item')

groupItemList.forEach(item => item.classList.remove('active'))

console.log(groupItemList.item(3).classList.add('active'))