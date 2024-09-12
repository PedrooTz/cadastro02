   // INSERIR motorista

   document.addEventListener('DOMContentLoaded', function() {
    console.log('JavaScript carregado'); // Verifica se o script está carregado

    const nome = document.getElementById('nome');
    const data_nascimento = document.getElementById('data');
    const cpf = document.getElementById('cpf');
    const telefone = document.getElementById('telefone');
    const button = document.getElementById('next');

    console.log('nome:', nome); // Verifica se o elemento foi encontrado
    console.log('data_nascimento:', data_nascimento);
    console.log('cpf:', cpf);
    console.log('telefone:', telefone);
    console.log('button:', button);

    if (!nome || !telefone || !cpf || !data_nascimento || !button) {
        console.error('Um ou mais elementos não foram encontrados.');
        return;
    }

    button.addEventListener('click', (event) => {
        event.preventDefault();  // Impede o comportamento padrão do formulário

        const nomeInput = nome.value;
        const dataInput = data_nascimento.value;
        const cpfInput = cpf.value;
        const telefoneInput = telefone.value;

        // Validação dos campos
        if (!nomeInput || !telefoneInput || !cpfInput || !dataInput) {
            console.error('Todos os campos são obrigatórios.');
            return;
        }

        const insert = {
            nome: nomeInput,
            data_nascimento: dataInput,
            cpf: cpfInput,
            telefone: telefoneInput,
        };

        localStorage.setItem('cadastromotorista1', JSON.stringify(insert));
        window.location.href = '../html/cadastro-motorista2.html';
    });
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
    


