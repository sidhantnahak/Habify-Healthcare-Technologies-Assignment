import React from 'react'
import image from './images/logo.png'
import './home.css'

const Home = () => {
    return (
        <>

            <div className="home">
                <nav>
                    <div className='nav_first'><img src={image} alt="" /></div>
                    <div style={{height:"100%",border:"1px solid rgb(228, 219, 219)"}}></div>


                    <div className='nav_second'>

                        <div>
                            <i style={{ position: "absolute",color:"rgb(98, 90, 90)",fontSize:"2rem" }} class="fa-solid fa-magnifying-glass"></i>
                            <input type="text" placeholder='Search all forums' />
                        </div>
                        <div>
                            <span>Topics <i class="fa-solid fa-angle-down"></i></span>
                        </div>

                    </div>
                    <div style={{height:"100%",border:"1px solid rgb(228, 219, 219)"}}></div>
                    <div className='nav_third'>
                        <span>Latest Topics </span>
                        <i class="fa-solid fa-bars"></i>
                        <i class="fa-solid fa-bell"></i>
                        <div style={{ height: "40px", width: "40px", borderRadius: "50%", background: "blue", color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.2rem" }}>A</div>
                        <span>Sidhant<i style={{paddingLeft:"0.5rem"}} class="fa-solid fa-angle-down" /></span>
                        
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Home