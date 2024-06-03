function calcular(){
    let txtnumber = window.document.querySelector('input#txtnumber')
    let res = window.document.querySelector('div#res')
    let num = Number(txtnumber.value)

    if(num <= 0){
        alert('Número inválido!')
    } else {
        alert('Número inserido com sucesso!')
    }

    res.innerHTML = `O número inserido foi o ${num}`
    

}
