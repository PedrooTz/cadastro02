   // INSERIR motorista

   document.addEventListener('DOMContentLoaded', function() {
    console.log('JavaScript carregado'); // Verifica se o script está carregado

    const nome = document.getElementById('nome');
    const foto_url = document.getElementById('foto_url');
    const data_nascimento = document.getElementById('data');
    const button = document.getElementById('next');

    console.log('nome:', nome); // Verifica se o elemento foi encontrado
    console.log('foto_url:', foto_url);
    console.log('data_nascimento:', data_nascimento);
    console.log('button:', button);

    if (!nome || !foto_url || !data_nascimento || !button) {
        console.error('Um ou mais elementos não foram encontrados.');
        return;
    }

    button.addEventListener('click', (event) => {
        event.preventDefault();  // Impede o comportamento padrão do formulário

        const nomeInput = nome.value;      
        const foto_urlInput = foto_url.value;
        const dataInput = data_nascimento.value;
        // Validação dos campos
        if (!nomeInput || !foto_urlInput || !dataInput) {
            console.error('Todos os campos são obrigatórios.');
            return;
        }

        const insert = {
            foto_url: foto_urlInput,
            nome: nomeInput,
            data_nascimento: dataInput,
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
    


