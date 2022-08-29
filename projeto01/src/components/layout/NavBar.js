import { Link } from 'react-router-dom'

import styles from './NavBar.module.css'
function NavBar () {

    return(

        <ul className={styles.navList} > 
        <li className={styles.item}>
          <Link to="/"> Home </Link>
        </li> 
        <li className={styles.item}>
          <Link to="/AboutUs"> About us </Link>
        </li>
        <li className={styles.item}>
          <Link to="/Contact"> Contact  </Link>
        </li>
      </ul>

    );
}

export default NavBar