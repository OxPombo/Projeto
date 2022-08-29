import { FaGithub, FaInstagram, FaMailchimp, FaTwitter, FaFacebook, FaWhatsapp } from 'react-icons/fa'

/* Import do React-icons que possibilita uma maneira simples de encorpar vários aspectos, facilitando o desenvolvimento da aplicação */

import styles from './Footer.module.css'

function Footer (){

    return(
        
        <footer >
            
            <ul className={styles.icons_list}>
                <li>
                    <FaMailchimp />
                </li>

                <li>
                    <FaInstagram />
                </li>

                <li>
                    <FaFacebook />
                </li>

                <li>
                    <FaGithub />
                </li>

                <li>
                    <FaTwitter />
                </li>

                <li>
                    <FaWhatsapp />
                </li>
            </ul>
          
            <p> Rodapé</p>
        </footer>
    );
}

export default Footer