function SegundaLista ({ itens }) /*Recebe itens */ {

    return(
        <>
            <h3> Lista de coisas boas:</h3> 
            
            {itens.length > 0 ? (
                /*
                ? If else ternário é escrito da forma acima, escrevemos por meio de parentes o que gostaríamos de imprimir quando a 
                ? condição for verdadeira,
                * Quando tiver algum item na lista ele imprime algo*/
                itens.map((item, index) => (  
                /* 
                * Erro de console,  
                ! O index serve como key, normalmente imprimimos um "id: x" que já venha back end para fazer isso",  
                TODO: Index se torna o índice do elemento pra quebrar um galho,
                * KEY - Serve pro react saber o que atualizar quando acontecer algo,*/
                    <p key={index}> {item}  </p>
                    /* O item é um argumento que vai executar algo em cada um dos itens */
                /* Deixar a arrow function com parentes pra programar em Javascript*/
                
            ))) : /*
            TODO: If ternário deve ter um else que é descrito com ":" */ 
            (
                <p> Não há itens na lista</p>
                /*
                * Imprime ao usuário um feedback de quando não tem itens na lista*/
            )}
            
        </>
    )
}

export default SegundaLista