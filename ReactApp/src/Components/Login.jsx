import React from 'react'
import { Link } from 'react-router-dom'
import './login.css'
import logo from './images/logo.png'

const Login = () => {
    return (

        <div className="login_div">

            <div className="goto_signin">
                <Link to="/login">Already have an account</Link><Link to='/signup'>Signup</Link>
            </div>
            <div className="form_div">
                <div className="form_top">
                    <div className="form_top_1">


                        <img src={logo} alt="" />
                        <hr style={{ width: "40%" }} />
                        <h3>Create a Emotional First Aid-Enabler Account</h3>
                        <p>By signin up you can start posting, replaying to topics, earn badges, favorite, vote topics and many more</p>

                    </div>
                </div>

                <form action="">
                    <div className='name_div'>
                        <div>
                            <label htmlFor="name">First Name</label>
                            <br />

                            <input type="text" /></div>
                        <div>
                            <label htmlFor="name">Last Name</label>
                            <br />

                            <input type="text" /></div><br />
                    </div>
                    <div><label htmlFor="username">Username</label>
                        <br />
                        <input type="text" />   </div>
                    <div><label htmlFor="email">Email Address</label>
                        <br />
                        <input type="email" /></div>
                    <div><label htmlFor="password">Password</label>
                        <br />
                        <input type="password" />
                    </div>

                    <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}><p>Privacy Settings <strong>(OPTIONAL)</strong></p><hr style={{height:"0.1px",width:"62%",backgroundColor:"black"}}/> </div>
                    
                   
                </form>

            </div>
        </div>

    )
}

export default Login