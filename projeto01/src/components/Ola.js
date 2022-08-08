function Ola ({ name }) {
    function gerarOla(someName){
        return `Olá, ${someName}, como está?`
    }
    return(
        <>

            {name ? ( 
            
            <p> {gerarOla(name)}</p>
            ) : 
            (
                <p> O nome não está definido </p>
            )}
        </> 
    

    )
}


export default Ola