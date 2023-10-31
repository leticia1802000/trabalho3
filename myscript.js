function gebi(id) {
    return document.getElementById(id)
}

function mult() {
    let recupera = parseInt(document.getElementById('numero_participantes').value); 

    let vn1 = parseInt(gebi("n1").value);
    let vn2 = parseInt(gebi("n2").value);
    let vn3 = parseInt(gebi("n3").value);
    let vn4 = parseInt(gebi("n4").value);
    let vn5 = parseInt(gebi("n5").value);
    let vn6 = parseInt(gebi("n6").value);
    let vn7 = parseInt(gebi("n7").value);
    let vn8 = parseInt(gebi("n8").value);
    let vn9 = parseInt(gebi("n9").value);
    let vn10 = parseInt(gebi("n10").value);
    let vn11 = parseInt(gebi("n11").value);
    let vn12 = parseInt(gebi("n12").value);
    let res1 = recupera * vn2 * vn1
    let res2 = recupera * vn4 * vn3
    let res3 = recupera * vn6 * vn5
    let res4 = recupera * vn8 * vn7
    let res5 = recupera * vn10 * vn9
    let res6 = recupera * vn12 * vn11
    gebi("res1").value = res1
    gebi("res2").value = res2
    gebi("res3").value = res3
    gebi("res4").value = res4
    gebi("res5").value = res5
    gebi("res6").value = res6
}

function ali() {
    let va1 = parseInt(gebi("res1").value);
    let va2 = parseInt(gebi("res2").value);
    let va3 = parseInt(gebi("res3").value);
    totalali = va1 + va2 + va3
    gebi("totalali").value = totalali
}

function divu() {
    let vd1 = parseInt(gebi("res4").value);
    let vd2 = parseInt(gebi("res5").value);
    let vd3 = parseInt(gebi("res6").value);
    totaldivu = vd1 + vd2 + vd3
    gebi("totaldivu").value = totaldivu
}

function total() {
    let vt1 = parseInt(gebi("totalali").value);
    let vt2 = parseInt(gebi("totaldivu").value);
    total = vt1 + vt2
    gebi("total").value = ("R$" + total)
}



function textomontar() {
    gebi('text').value = ("Total de comida em reais foi " + totalali + ", e o Total de divulgação em reais foi " + totaldivu + ".  o Total de tudo que foi gasto é de R$" + total + ". Feito por Thiago e Leticia.");
}


function idForm() {
    var participantes = gebi("idparticipantes").value
}

function validarFormulario() {
    // Obter os valores dos campos
    var Aluno = document.getElementById('Aluno').value;
    var email = document.getElementById('email').value;
    var CPF = document.getElementById('CPF').value;
    var Matricula = document.getElementById('Matricula').value;
    var Turma = document.getElementById('Turma').value;

    // Realizar a validação (adapte de acordo com suas regras)
    if (Aluno.trim() === '' || email.trim() === '' || CPF.trim() === '' || Matricula.trim() === '' || Turma.trim() === '') {
        alert('Por favor, preencha todos os campos.');
        return false;
    } incrementarInscritos();

    // Exibir mensagem de sucesso
    alert('Inscrição efetuada com sucesso!');
    return true; // Permite o envio do formulário
}



window.onload = function recupera() {
    // Verifica se o localStorage possui o item com a chave "total_inscritos"
    if (localStorage.getItem("total_inscritos")) {
        // Recupera o valor associado à chave "total_inscritos"
        var totalInscritos = localStorage.getItem("total_inscritos");
        // Converte o valor para o tipo numérico, se necessário
        totalInscritos = parseInt(totalInscritos, 10); // 10 é a base decimal
        document.getElementById('numero_participantes').value = totalInscritos
    }
}