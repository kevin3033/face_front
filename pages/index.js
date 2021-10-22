import './_app'
import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import style from '../styles/Home.module.css'
import logo from '../assets/logo.svg'
const App = () => {
    return (
        <>
            <div className={style.main}>
                <div class={style.left}>
                    <img className={style.logo} src={logo.src} alt='Facebook'/>
                    <h2 className={style.textl}>Connect with friends and the world around you on Facebook.</h2>
                </div>
                <div class={style.right}>
                    <div className={style.form}>
                        <input className={style.boxinput} placeholder='E-mail or Phone Number'/>
                        <input className={style.boxinput} placeholder='Password'/>
                        <button className={style.loginb}>Log In</button>
                        <a className={style.linkps}>Forget Password?</a>
                        <br/>
                        <button className={style.newbt}>Create New Account</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
