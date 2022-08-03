function Pessoa({nome, idade, profissao, foto}){

    return(
        <div>
           <img alt="Minha imagem" src={foto}/>
           <h2> Nome: {nome} </h2>
           <p> Idade: {idade} </p>
           <p> Profissão: {profissao} </p> 
        </div>
    )
}

export default Pessoa