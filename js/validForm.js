function validForm () {
    const lista = [nome, numero, mes, ano, cvc];
    const erros = [];

    lista.forEach( (item) => {
        const erro = item.parentNode.querySelector('small');
        const campo = item.parentNode.querySelector('label').textContent;
        
        // Limpar erros anteriores
        item.classList.remove('info-erro');
        erro.classList.remove('erro');
        erro.classList.add('remove');
        
        // Validar campo vazio
        if (item.value === '') {
            item.classList.add('info-erro')
            erro.classList.add('erro')
            erro.classList.remove('remove')
            erro.textContent = `Preencha o Campo ${campo}`
            erros.push(item)
            return;
        }
        
        // Validações específicas
        if (item.id === 'num') {
            // Remover espaços e validar se tem 16 dígitos
            const numLimpo = item.value.replace(/\s/g, '');
            if (numLimpo.length !== 16 || !/^\d{16}$/.test(numLimpo)) {
                item.classList.add('info-erro')
                erro.classList.add('erro')
                erro.classList.remove('remove')
                erro.textContent = 'Número do cartão deve ter 16 dígitos'
                erros.push(item)
                return;
            }
        }
        
        if (item.id === 'mes') {
            const mesVal = parseInt(item.value);
            if (mesVal < 1 || mesVal > 12) {
                item.classList.add('info-erro')
                erro.classList.add('erro')
                erro.classList.remove('remove')
                erro.textContent = 'Mês inválido (01-12)'
                erros.push(item)
                return;
            }
        }
        
        if (item.id === 'ano') {
            const anoVal = parseInt(item.value);
            const anoAtual = new Date().getFullYear() % 100; // Últimos 2 dígitos
            if (anoVal < anoAtual) {
                item.classList.add('info-erro')
                erro.classList.add('erro')
                erro.classList.remove('remove')
                erro.textContent = 'Cartão expirado'
                erros.push(item)
                return;
            }
        }
        
        if (item.id === 'cvc') {
            if (item.value.length !== 3 || !/^\d{3}$/.test(item.value)) {
                item.classList.add('info-erro')
                erro.classList.add('erro')
                erro.classList.remove('remove')
                erro.textContent = 'CVC deve ter 3 dígitos'
                erros.push(item)
                return;
            }
        }
    })

    if (erros.length === 0) {
        // Salvar dados no sessionStorage antes de redirecionar
        sessionStorage.setItem('cardData', JSON.stringify({
            nome: nome.value,
            numero: numero.value,
            mes: mes.value,
            ano: ano.value,
            cvc: cvc.value
        }));
        
        form.reset()
        window.location.href = 'finaliza.html'
    }
}
