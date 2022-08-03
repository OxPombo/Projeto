import {useState} from 'react'

function Condicional () {
    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    function enviarEmail (e) {
        e.preventDefault()
        setUserEmail (email)
        
    }

    function limparEmail (e) {
        e.preventDefault()
        setUserEmail ('')
        
    }
    
    return (
    <div>
        <h2> Cadastre seu email: </h2>
        <form>
            <input 
              type="email" 
              placeholder="Digite o seu email aqui..." 
              onChange={(e) => setEmail(e.target.value)}
              /> 
            
            <button 
            type="submit" 
            onClick={enviarEmail}> 
            Enviar email 
            </button>

            {userEmail && ( /* <-- Isso aqui é um If, resumindo */
                <div>
                    <p> O email inserido é: {userEmail}</p>
                    <button onClick={limparEmail}> Limpar e-mail </button>
                </div>
            /* Cria uma renderização condicional que checa se o *userEmail* é true */ 
            /* Concatenar (Colocar junto) com esse end faz com que o programa crie uma div caso o userEmail esteja preenchido */
            )}

            
             
            
        </form>
    </div>
        
    )
}

export default Condicional