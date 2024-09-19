const elem = document.getElementById('elem')
const wartosc = [11,5,7,5,4,7,8,9,2]
wartosc.forEach((element)=>{
    const content = document.createElement('li')
    content.style.color = '#000'
    content.innerHTML = `Wartości danego kafla: ${element}`
    elem.appendChild(content)
})


wartosc.filter(elementy => elementy%2 == 0).map((elementy)=>{
    const content = document.createElement('li')
    content.style.color = '#000'
    content.style.backgroundColor = "red"
    content.innerHTML = "<br>"
    content.innerHTML = `Wartości danego kafla: ${elementy} podzielne przez 2`
    elem.appendChild(content)
})



