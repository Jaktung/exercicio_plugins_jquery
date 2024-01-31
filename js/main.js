$(document).ready(function(){
    $('#telefone').mask('(00) 00000-0000')
    $('#cpf').mask('000.000.000-00')
    $('#cep').mask('00000-00')

    $('form').validate({
        rules: {
            nome: {required: true},
            email: {required: true},
            telefone: {required: true},
            cpf: {required: true},
            endereco: {required: true},
            cep: {required: true},
        },
        messages: {
            nome: 'Insira seu nome completo',
            email: 'Insira seu email',
            telefone: 'Insira seu número de telefone',
            cpf: 'Insira seu cpf',
            endereco: 'Insira seu endereço',
            cep: 'Insira o cep de sua cidade',
        },
        submitHandler: function(form) {
            alert('Cadastro concluído com sucesso')
        },
        invalidHandler: function (evento, validador){
            let camposIncorretos = validador.numberOfInvalids();
            if(camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos ou vazios`)
            }
        }
    })
})