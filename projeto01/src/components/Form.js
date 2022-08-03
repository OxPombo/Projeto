import {useState} from 'react'

function Form() {   
    function cadastrarUsuario(e) {
        /* Argumento *e* de submissão, representa evento */ 
        e.preventDefault()
        /* Para a execução do formulário e executa a parte de baixo // Para o comportamento padrão do HTML e imprime a linha de code */
        console.log (name)
        console.log(password)
        console.log ('O usuário foi cadastrado')
        console.log(`Usuário ${name} foi cadastrado com a senha: ${password}`
        /* Sistema de aviso de cadastro ou recuperação de senha, pode ser um post para inserir no banco de dados*/)
    }
    
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    return(
        
        <div>
            
            <h1> Cadastro </h1>
            <form onSubmit={cadastrarUsuario}>
                <div> 
                  <label htmlFor="name"> Nome: </label >
                  <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  placeholder="Digite seu nome: "
                  value={name}
                  onChange={(e) => setName(e.target.value)}/>
                 

                </div>

                <div> 
                 <label htmlFor="password"> Senha: </label >
                  <input 
                  type="text" 
                  id="password" 
                  name="password" 
                  placeholder="Digite sua senha: "
                  onChange={(e) => setPassword(e.target.value)}/>
                  

                </div>

                <div>
                  
                  <input type="submit" value="Cadastrar"/> 

                </div>
            </form>
        </div>
    )
}

export default Form

/* MUUUUUUUUUUITO útil usar !onChange! pra fazer um sistema de edição de dados já cadastrados*/