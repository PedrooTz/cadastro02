import { postEmpresas } from "./funcoes.js";

const cadastro1 = JSON.parse(localStorage.getItem('cadastro1'));

if (cadastro1) {
    console.log(cadastro1); // Verifique se os dados foram recuperados corretamente
} else {
    console.error('Nenhum dado encontrado no localStorage.');
}

// Certifique-se de que os elementos estão sendo acessados corretamente antes de usar os valores
const numero_telefone = document.getElementById('numero_telefone');
const img_perfil = document.getElementById('img_perfil');
const email = document.getElementById('email');
const senha = document.getElementById('senha');
const button = document.getElementById('next2');

// Verificar se todos os elementos foram encontrados
if (!numero_telefone || !img_perfil || !email || !senha || !button) {
    console.error('Um ou mais elementos não foram encontrados no DOM.');
} else {
    // Função para validar os campos
    const validarNumero_telefone = (numero_telefone) => /^[0-9]{11}$/.test(numero_telefone); // Valida 8 dígitos
    const validarEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const validarSenha = (senha) => senha.length >= 8;

    button.addEventListener('click', async (event) => {
        event.preventDefault();

        // Coleta os valores dos inputs **após** o evento de clique
        const numero_telefoneInput = numero_telefone.value;
        const imgInput = img_perfil.value;
        const emailInput = email.value;
        const senhaInput = senha.value;

        console.log('numero_telefone:', numero_telefoneInput);
        console.log('img_perfil:', imgInput);
        console.log('email:', emailInput);
        console.log('senha:', senhaInput);

        // Validação dos campos
        if (!numero_telefoneInput || !imgInput || !emailInput || !senhaInput) {
            console.error('Todos os campos são obrigatórios.');
            return;
        }

        if (!validarNumero_telefone(numero_telefoneInput)) {
            console.error('Número de telefone inválido. Deve conter 8 dígitos.');
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

        // Atualiza o objeto cadastro1 com os novos dados
        cadastro1.numero_telefone = numero_telefoneInput;
        cadastro1.img_perfil = imgInput;
        cadastro1.email = emailInput;
        cadastro1.senha = senhaInput;

        console.log(cadastro1)

        try {
            // Tenta enviar os dados
            const sucesso = await postEmpresas(cadastro1);
            if (sucesso) {
                alert("cadastrado com sucesso!")
                console.log('Empresa cadastrada com sucesso!');
                window.location.href = '../html/cadastro-empresa2.html';
            } else {
                alert("Falha ao cadastrar empresa, tente novamente")
                console.error('Falha ao cadastrar a empresa. Por favor, tente novamente.');
            }
        } catch (error) {
            console.error('Erro ao tentar cadastrar a empresa:', error);
        }
    });
}
