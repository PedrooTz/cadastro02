import { postEmpresas } from "./funcoes.js"

const cadastro1 = JSON.parse(localStorage.getItem('cadastro1'));

if (cadastro1) {
    console.log(cadastro1); // Verifique se os dados foram recuperados corretamente
    // Exibir os dados na interface, se necessário
} else {
    console.error('Nenhum dado encontrado no localStorage.');
}
// Certifique-se de que os elementos estão sendo acessados corretamente antes de usar os valores
const cep = document.getElementById('cep');
const img = document.getElementById('img');
const email = document.getElementById('email');
const senha = document.getElementById('senha');
const button = document.getElementById('next2');

// Função para validar os campos
    const validarCep = (cep) => /^[0-9]{5}-[0-9]{3}$/.test(cep);
    const validarEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const validarSenha = (senha) => senha.length >= 8;

button.addEventListener('click', async (event) => {
    event.preventDefault();

    // Coleta os valores dos inputs **após** o evento de clique
    const cepInput = cep.value;  // Inicializa a variável corretamente
    const imgInput = img.value;
    const emailInput = email.value;
    const senhaInput = senha.value;

    console.log('cep:', cepInput);
    console.log('img:', imgInput);
    console.log('email:', emailInput);
    console.log('senha:', senhaInput);

    // Validação dos campos
    if (!cepInput || !imgInput || !emailInput || !senhaInput) {
        console.error('Todos os campos são obrigatórios.');
        return;
    }

    if (!validarCep(cepInput)) {
        console.error('CEP inválido.');
        return;
    }

    if (!validarEmail(emailInput)) {
        console.error('Email inválido.');
        return;
    }

    if (!validarSenha(senhaInput)) {
        console.error('A senha deve ter no mínimo 8 caracteres.');
        return;
    }

    // Cria o objeto para ser enviado
   
        cadastro1.cep = cepInput,
        cadastro1.img = imgInput,
        cadastro1.email = emailInput,
        cadastro1.senha = senhaInput

    try {
        // Tenta enviar os dados
        const sucesso = await postEmpresas(cadastro1);
        if (sucesso) {
            console.log('Empresa cadastrada com sucesso!');
            window.location.href = '../html/cadastro-empresa2.html';
        } else {
            console.error('Falha ao cadastrar a empresa. Por favor, tente novamente.');
        }
    } catch (error) {
        console.error('Erro ao tentar cadastrar a empresa:', error);
    }
});
