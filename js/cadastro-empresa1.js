   // INSERIR empresa

   document.addEventListener('DOMContentLoaded', function() {
    console.log('JavaScript carregado'); // Verifica se o script está carregado

    const nome = document.getElementById('nome');
    const razaoSocial = document.getElementById('razaoSocial');
    const cep = document.getElementById('cep');
    const cnpj = document.getElementById('cnpj');
    const button = document.getElementById('next');

    console.log('nome:', nome); // Verifica se o elemento foi encontrado
    console.log('razaoSocial:', razaoSocial);
    console.log('cep:', cep);
    console.log('cnpj:', cnpj);
    console.log('button:', button);

    if (!nome || !razaoSocial || !cep || !cnpj || !button) {
        console.error('Um ou mais elementos não foram encontrados.');
        return;
    }

    button.addEventListener('click', (event) => {
        event.preventDefault();  // Impede o comportamento padrão do formulário

        const nomeInput = nome.value;
        const razaoInput = razaoSocial.value;
        const cepInput = cep.value;
        const cnpjInput = cnpj.value;

        // Validação dos campos
        if (!nomeInput ||  !razaoInput || !cepInput || !cnpjInput) {
            console.error('Todos os campos são obrigatórios.');
            return;
        }

        const insert = {
            nome: nomeInput,
            razaoSocial: razaoInput,
            cep: cepInput,
            cnpj: cnpjInput,
           
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
    


