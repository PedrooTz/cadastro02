   // INSERIR motorista
   import { postMotorista } from "./funcoes.js";

   const cadastromotorista1 = JSON.parse(localStorage.getItem('cadastromotorista1'));

   
if (cadastromotorista1) {
    console.log(cadastromotorista1); // Verifique se os dados foram recuperados corretamente
    // Exibir os dados na interface, se necessário
} else {
    console.error('Nenhum dado encontrado no localStorage.');
}


   document.addEventListener('DOMContentLoaded', function() {
    console.log('JavaScript carregado'); // Verifica se o script está carregado
    const cpf = document.getElementById('cpf');
    const email = document.getElementById('email');
    const senha = document.getElementById('senha');
    const button = document.getElementById('next');

    console.log('cpf:', cpf); // Verifica se o elemento foi encontrado
    console.log('email:', email);
    console.log('senha:', senha);
    console.log('button:', button);

    if (!cpf || !email || !senha || !button) {
        console.error('Um ou mais elementos não foram encontrados.');
        return;
    }

    button.addEventListener('click', async (event) => {
        event.preventDefault();  // Impede o comportamento padrão do formulário

        const cpfInput = cpf.value;
        const emailInput = email.value;
        const senhaInput = senha.value;

        // Validação dos campos
        if (!cpfInput || !senhaInput || !emailInput) {
            console.error('Todos os campos são obrigatórios.');
            return;
        }

        cadastromotorista1.cpf = cpfInput,
        cadastromotorista1.email = emailInput,
        cadastromotorista1.senha = senhaInput


        try {
            // Tenta enviar os dados
            const sucesso = await postMotorista(cadastromotorista1);
            if (sucesso) {
                alert("Cadastrado efetuado com sucesso!")
                console.log('Cadastrado efetuado com sucesso!');
                window.location.href = '';
            } else {
                alert("Falha ao cadastrar o motorista. Por favor, tente novamente.")
                console.error('Falha ao cadastrar o motorista. Por favor, tente novamente.');
            }
        } catch (error) {
            console.error('Erro ao tentar cadastrar  o motorista:', error);
        }
    });

        //   try {
        //     const sucesso = (insert)
        //     sucesso = window.location.href = '../html/cadastro-empresa2.html'
        //     if (sucesso) {
        //         console.error('Filme adicionado com sucesso!')
        //     } else {
        //         console.error('Falha ao adicionar o Filme. Por favor, tente novamente.')
        //     }
        // } catch (error) {
        //     console.error('Erro ao adicionar Filme:', error)
        // }
    


   })