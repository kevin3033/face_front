import './_app'
import {  } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import style from '../styles/Home.module.css'
import logo from '../assets/logo.svg'
const App = () => {
    return (
        <>
            <div className={style.left}>
                <div className={style.cardleft}>
                    <img className={style.logo} src={logo.src} alt='Facebook'/>
                    <h2 className={style.textl}>Connect with friends and the world around you on Facebook.</h2>
                </div>
            </div>
            <div className={style.right}>
                <div className={style.cardright}>

                </div>
            </div>
        </>
    )
}

export default App
