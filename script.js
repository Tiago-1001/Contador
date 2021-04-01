function contar() {
    var inicio = document.getElementById('txti')
    var fim = document.getElementById('txtf')  
    var passo = document.getElementById('txtp')
    var res = document.querySelector('div#res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert('[ERRO] Dando incompletos!!!')
    }   else {
            res.innerHTML = 'Contagem: '
            var i = Number(inicio.value)
            var f = Number(fim.value)
            var p = Number(passo.value)

            while (i <= f){ 
                res.innerHTML += `${i}; ` //Nunca esqueça de por concatenação "+= para pode utilizar o ``"
                i = i + p
            }
        }
}