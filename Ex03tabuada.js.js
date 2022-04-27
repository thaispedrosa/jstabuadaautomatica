function calcular() {
    let n = document.getElementById('número')
    let tab = document.getElementById('tabuada')
    
    if (n.value.length == 0) {
    window.alert('[ERRO] Digite um número!')
} else {
    let num = Number(n.value)
    let c = 1
    tab.innerHTML=""
        while (c <= 10) {
        let item = document.createElement('option')
        item.text = `${num} x ${c} = ${num*c}`
        tab.appendChild(item)
        c++
        }
    }
}