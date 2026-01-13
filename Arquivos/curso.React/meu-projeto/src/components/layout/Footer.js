import styles from './Footer.module.css'

import {FaFacebook, FaInstagram, FaTiktok} from 'react-icons/fa'

function Footer () {
    return <footer>
        <ul className = {styles.lista}>
            <li className ={styles.icon}><FaInstagram/></li>
            <li className ={styles.icon}><FaFacebook/></li>
            <li className ={styles.icon}><FaTiktok/></li>
        </ul>
    </footer>

}

export default Footer