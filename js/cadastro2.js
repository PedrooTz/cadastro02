import { postEmpresas } from "./funcoes.js"

JSON.parse(localStorage.getItem('cadastro1'))
        // INSERIR empresa 2
        /***********************************************/
        const cep = document.getElementById('cep')
        const img = document.getElementById('img')
        const email = document.getElementById('email')
        const senha = document.getElementById('senha')
        const button = document.getElementById('next2')

        button.addEventListener('click', async (event) => {
            event.preventDefault();
    
            
            const cepInput = cep.value;
            const imgInput = img.value;
            const emailInput = email.value;
            const senhaInput = senha.value;
            const insert = {
                cep: cepInput,
                img: imgInput,
                email: emailInput,
                senha: senhaInput

            };



            try {
                const sucesso = await postEmpresas(insert)
                if (sucesso) {
                    console.error('Filme adicionado com sucesso!')
                } else {
                    console.error('Falha ao adicionar o Filme. Por favor, tente novamente.')
                }
            } catch (error) {
                console.error('Erro ao adicionar Filme:', error)
            }
        });
       
        button.addEventListener('click', function(){
            window.location.href = '../html/cadastro-empresa2.html'
        })

    