function calcular(){
    let txtnumber = window.document.querySelector('input#txtnumber')
    let res = window.document.querySelector('div#res')
    let num = Number(txtnumber.value)
    
    if(num >= 0){
        fat = 1
        for(let c = num; c > 1; c--){
            fat *= c
        }
        res.innerHTML = `O fatorial de ${num} é ${fat}`
    } else {
        alert('[ERRO] Tente novamente!')
        res.innerHTML = 'Insira um valor válido!'
    }
   
    
}
