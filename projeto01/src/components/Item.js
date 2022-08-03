import PropTypes from 'prop-types'
function Item ({marca, ano_lancamento}){

    return(
        <>
            <li> {marca} - {ano_lancamento} </li>
        
        </>
    )
}

Item.propTypes = {
    /* Perceba que o "props" fica com minúscula no começo */
    marca: PropTypes.string.isRequired,
    /* PropTypes: Serve como restrições para a Props se não enviar valor*/
    /* isRequired: Caso nada seja declarado ele reclama*/
    /* São validações úteis pra programação */
    ano_lancamento: PropTypes.number,
}

Item.defaultProps = {
    marca: 'Faltou a marca',
    ano_lancamento: '0',
}

export default Item