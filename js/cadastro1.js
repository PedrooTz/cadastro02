   // INSERIR empresa


        /***********************************************/
        const nome = document.getElementById('nome')
        const telefone = document.getElementById('telefone')
        const cnpj = document.getElementById('cnpj')
        const razao = document.getElementById('razao')
        const button = document.getElementById('next')
    
        
        button.addEventListener('click', async (event) => {
            event.preventDefault();
    
            const nomeInput = nome.value;
            const telefoneInput = telefone.value;
            const cnpjInput = cnpj.value;
            const razaoInput = razao.value;
            const insert = {
                nome: nomeInput,
                telefone: telefoneInput,
                cnpj: cnpjInput,
                razao: razaoInput

            };
      

            

          localStorage.setItem('cadastro1', JSON.stringify(insert))

          try {
            const sucesso = (insert)
            sucesso = window.location.href = '../html/cadastro-empresa2.html'
            if (sucesso) {
                console.error('Filme adicionado com sucesso!')
            } else {
                console.error('Falha ao adicionar o Filme. Por favor, tente novamente.')
            }
        } catch (error) {
            console.error('Erro ao adicionar Filme:', error)
            console.log(error)
        }
    });
    
    


