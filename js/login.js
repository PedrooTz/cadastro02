'use strict'

const empresa = document.getElementById('empresa');
const funcionario = document.getElementById('funcionario');

// Alterna seleção entre 'empresa' e 'funcionario'
empresa.addEventListener('change', function() {
    if (empresa.checked) {
        funcionario.checked = false;
    }
});

funcionario.addEventListener('change', function() {
    if (funcionario.checked) {
        empresa.checked = false;
    }
});

const userName = document.getElementById('email');
const password = document.getElementById('senha');
const loginButton = document.getElementById('signin');

const validarLogin = async () => {
    const email = userName.value;
    const senha = password.value;

    if (email === '' || senha === '') {
        alert('Preencha os campos!');
        return;
    }

    const url = 'http://localhost:8080/v1/transportaweb/usuarios';

    try {
        const response = await fetch(url);

        // Verifica se a requisição foi bem-sucedida
        if (!response.ok) {
            throw new Error('Erro ao buscar os usuários');
        }

        const data = await response.json();

        // Acessa o array 'usuarios' do JSON retornado
        const users = data.usuarios;

        if (!Array.isArray(users)) {
            throw new Error('Os dados retornados não são um array');
        }

        let validaUser = false;

        // Verifica se o email e senha correspondem
        users.forEach(user => {
            if (user.email === email && user.senha === senha) {
                validaUser = true;
                alert('Login efetuado com sucesso!');
                window.location.href = ''; // Redirecionamento
            }
        });

        if (!validaUser) {
            alert('Usuário não cadastrado');
        }

    } catch (error) {
        console.error('Erro no login:', error);
        alert('Erro ao tentar realizar login: ' + error.message);
    }
};

// Adiciona o evento de clique ao botão de login
loginButton.addEventListener('click', validarLogin);
