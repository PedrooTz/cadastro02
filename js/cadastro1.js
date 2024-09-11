   // INSERIR empresa

   document.addEventListener('DOMContentLoaded', function() {
    console.log('JavaScript carregado'); // Verifica se o script está carregado

    const nome = document.getElementById('nome');
    const telefone = document.getElementById('telefone');
    const cnpj = document.getElementById('cnpj');
    const razaoSocial = document.getElementById('razaoSocial');
    const button = document.getElementById('next');

    console.log('nome:', nome); // Verifica se o elemento foi encontrado
    console.log('telefone:', telefone);
    console.log('cnpj:', cnpj);
    console.log('razaoSocial:', razaoSocial);
    console.log('button:', button);

    if (!nome || !telefone || !cnpj || !razaoSocial || !button) {
        console.error('Um ou mais elementos não foram encontrados.');
        return;
    }

    button.addEventListener('click', (event) => {
        event.preventDefault();  // Impede o comportamento padrão do formulário

        const nomeInput = nome.value;
        const telefoneInput = telefone.value;
        const cnpjInput = cnpj.value;
        const razaoInput = razaoSocial.value;

        // Validação dos campos
        if (!nomeInput || !telefoneInput || !cnpjInput || !razaoInput) {
            console.error('Todos os campos são obrigatórios.');
            return;
        }

        const insert = {
            nome: nomeInput,
            telefone: telefoneInput,
            cnpj: cnpjInput,
            razaoSocial: razaoInput
        };

        localStorage.setItem('cadastro1', JSON.stringify(insert));
        window.location.href = '../html/cadastro-empresa2.html';
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
    


