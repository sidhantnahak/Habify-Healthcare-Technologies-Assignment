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
                        <input type="text" id='username' />   </div>
                    <div><label htmlFor="email">Email Address</label>
                        <br />
                        <input type="email" /></div>
                    <div><label htmlFor="password">Password</label>
                        <br />
                        <input type="password" />
                    </div>

                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "2.5rem" }}><p>Privacy Settings <strong>(OPTIONAL)</strong></p><hr style={{ height: "0.1px", width: "62%", backgroundColor: "black" }} /> </div>

                    <p style={{ margin: "2rem 0 1rem 0" }}>Who Can see my  Profile?</p>

                    <div className="privacy_div">
                        <div>

                            <input type="checkbox" id='everyone' />
                            <label htmlFor="everyone">Everyone</label>

                        </div>
                        <div><input type="checkbox" id='onlyfreinds' />
                            <label htmlFor="onlyfreinds">Only Friends</label></div>
                        <div><input type="checkbox" id='inviteonly' />
                            <label htmlFor="inviteonly">Invite Only</label></div>
                    </div>

                    <p style={{ margin: "1.5rem 0 1rem 0" }}>Automatically share my posts and replies on Socila Networks</p>

                    <div className="social_div">
                        <div>

                            <input type="checkbox" id='facebook' />
                            <i style={{ color: "#3b5998" }} class="fa-brands fa-square-facebook"></i>
                            <label htmlFor="facebook">Facebook</label>

                        </div>
                        <div><input type="checkbox" id='twitter' />
                            <i style={{ color: "#00acee" }} class="fa-brands fa-twitter"></i>
                            <label htmlFor="twitter">Twitter</label></div>
                        <div><input type="checkbox" id='google' />
                            <i style={{ color: "#db4a39" }} class="fa-brands fa-google-plus-g"></i>
                            <label htmlFor="google">Google+</label></div>
                    </div>


                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", margin: "2.5rem 0 2rem 0" }}><p>Small Survey <strong>(OPTIONAL)</strong></p><hr style={{ height: "0.1px", width: "65%", backgroundColor: "black" }} /> </div>

                    <div className='name_div'>
                        <div>
                            <label htmlFor="name">How old are you?</label>
                            <br />

                            <input style={{ width: "200%" }} type="number" min="1" max="50" />
                        </div>
                        <div>
                            <label htmlFor="name">Who are you?</label>
                            <br />
                            <select style={{ width: "260%" }} name="gender" id="gender">
                                <option value="select">Select</option>

                                <option value="male">   male</option>
                                <option value="female">female   </option>
                                <option value="other">other</option>
                            </select>
                        </div><br />
                    </div>

                    <div className='name_div'>
                        <div>
                            <label htmlFor="name">will you be freindly here?</label>
                            <br />

                            <select style={{ width: "140%" }} name="Friendly" id="friendly">
                                <option value="select">Select</option>
                                <option value="yes">   yes</option>
                                <option value="no">no   </option>
                            </select>
                        </div>
                        <div style={{ marginLeft: "3.5rem" }}>
                            <label htmlFor="name">Where do you heard about us?</label>
                            <br />

                            <select style={{ width: "120%" }} name="heard" id="heard">
                                <option value="by_search_engine">By Search Engine</option>
                                <option value="by_search_engine1">By Search Engine1</option>
                                <option value="by_search_engine2">By Search Engine2</option>
                                <option value="by_search_engine3">By Search Engine3</option>

                            </select>
                        </div><br />
                    </div>


                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", margin: "3rem 0 2rem 0" }}><p>Link Social Network <strong>(OPTIONAL)</strong></p><hr style={{ height: "0.1px", width: "55%", backgroundColor: "black" }} /> </div>

                    <div className="social_links">
                        <div>
                            <p><i style={{ color: "#3b5998" }} class="fa-brands fa-square-facebook"></i> Facebook URL</p>
                            <strong>facebook.com/Azyrus-themes</strong>

                        </div>
                        <div>
                            <p><i style={{ color: "#00acee" }} class="fa-brands fa-twitter"></i>Twitter Username</p>
                            <strong>themeforest</strong>

                        </div>
                        <div>
                            <p><i style={{ color: "#db4a39" }} class="fa-brands fa-google-plus-g"></i>Google+ Account ID</p>
                            <strong>azyrus_themes</strong>

                        </div>
                        <div>
                            <p><i style={{ color: "#CD201F" }} class="fa-brands fa-youtube"></i>Youtube Channel URL</p>
                            <strong>azyrusthemes</strong>
                        </div>
                    </div>


                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", margin: "3rem 0 2rem 0" }}><p>Interested Categories <strong>(OPTIONAL)</strong></p><hr style={{ height: "0.1px", width: "55%", backgroundColor: "black" }} /> </div>

                    <p>Categories i'm interested in</p>


                    <div className="category_div">
                        <div>
                            <input type="checkbox" id='Select All' />
                            <label htmlFor="Select All">Select All</label>
                        </div>
                        <div>
                            <input type="checkbox" id='Mental Health' />
                            <label htmlFor="Mental Health">Mental Health</label>
                        </div>
                        <div>
                            <input type="checkbox" id='MH Tips' />
                            <label htmlFor="MH Tips">MH Tips</label>
                        </div>

                        <div>
                            <input type="checkbox" id='Support' />
                            <label htmlFor="Support">Support</label>
                        </div>

                        <div>
                            <input type="checkbox" id='Enabler' />
                            <label htmlFor="Enabler">Enabler</label>
                        </div>
                        <div>
                            <input type="checkbox" id='Exchange' />
                            <label htmlFor="Exchange">Exchange</label>
                        </div>
                        <div>
                            <input type="checkbox" id='Art' />
                            <label htmlFor="Art">Art</label>
                        </div>

                        <div>
                            <input type="checkbox" id='Q&As' />
                            <label htmlFor="Q&As">Q&As</label>
                        </div>
                        <div>
                            <input type="checkbox" id='Social' />
                            <label htmlFor="Social">Social</label>
                        </div>
                        <div>
                            <input type="checkbox" id='Random' />
                            <label htmlFor="Random">Random</label>
                        </div>
                        <div>
                            <input type="checkbox" id='music' />
                            <label htmlFor="music">Music</label>
                        </div>

                        <div>
                            <input type="checkbox" id='Science' />
                            <label htmlFor="Science">Science</label>
                        </div>
                        <div>
                            <input type="checkbox" id='pets' />
                            <label htmlFor="pets">Pets</label>
                        </div>
                        <div>
                            <input type="checkbox" id='education' />
                            <label htmlFor="education">Education</label>
                        </div>
                        <div>
                            <input type="checkbox" id='video' />
                            <label htmlFor="video">Video</label>
                        </div>




                    </div>
                    <hr style={{ width: "108%", position: "relative", right: "22px", marginTop: "2.5rem" }} />

                    <div className="term">

                        <div>
                            <input type="checkbox" id='term' />
                            <label htmlFor="term">i agree to the Terms & Conditions</label>
                        </div>
                        <div>
                            <input type="checkbox" id='subscribe' />
                            <label htmlFor="subscribe">Subscribe to newsletter</label>
                        </div>
                    </div>

                   <Link to='/home'> <input id='submit' type="submit" value="Create New Account"  /></Link>


                </form>

            </div>

            <div className="bottom_items">
                <p>Terms</p> <p>Privacy</p>
                <p>Send Feedback</p>
                <div style={{display:"flex",gap:"1rem"}} className="logos">

                    <i style={{ color: "#3b5998" }} class="fa-brands fa-square-facebook"></i>

                    <i style={{ color: "#00acee" }} class="fa-brands fa-twitter"></i>


                    <i style={{ color: "#db4a39" }} class="fa-brands fa-google-plus-g"></i>


                    <i style={{ color: "green" }}class="fa-solid fa-basketball"></i>
                    <i style={{ color: "black" }}class="fa-solid fa-cloud"></i>
                    <i style={{ color: "red" }}class="fa-solid fa-wifi"></i>


                </div>
            </div>
        </div>

    )
}

export default Login