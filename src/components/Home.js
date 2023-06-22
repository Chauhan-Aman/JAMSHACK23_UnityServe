import React,{useEffect} from 'react'
import {Link} from 'react-router-dom'

const Home = () => {

    useEffect(() => {
        document.title = "UnityServe" ;
        // eslint-disable-next-line
    }, [])

    return (
        <>
            <div className="homepage">
                <div className="homepage_intro">
                    <img src="./img/heading.png" alt="" className="homepage_intro_heading" />
                    <p className="lead pb-4">SEIZE THE CAMPUS MARKET: UNITE, THRIVE, AND TRANSACT WITH EASE</p>
                    {!localStorage.getItem('token')?
                    <button type="button" className="btn btn-outline-info py-2 mx-1" id="start_button_explore" disabled>EXPLORE</button>:
                    <Link to="/marketplace"><button type="button" className="btn btn-outline-info py-2 mx-1" id="start_button_explore">EXPLORE</button></Link>}
                    {!localStorage.getItem('token')?
                    <Link to="/login"><button type="button" className="btn btn-outline-info py-2 mx-1" id="start_button">LOGIN</button></Link>:""}
                </div>
            </div>

            <div className="break container-fluid mb-5">
                <div>
                    <h1 className="display-1 pb-2">ALL YOUR NEEDS IN ONE PLACE</h1>
                </div>
            </div>

            <div className="vision pt-5 mt-5" id="vision">
                <div className="container vision_intro my-5">
                    <h1 className="display-2">OUR VISION</h1>
                    <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim deleniti accusamus tempore odit!</p>
                </div>
                <div className="vision_cards container my-5">
                    <div className="card px-4 py-4 mx-4">
                        <div className="card_heading">
                            <h1>heading</h1>
                        </div>
                        <div className="card_content">
                            <p className="lead">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores magnam praesentium eaque, nulla totam numquam odit consequatur hic a dolore.</p>
                        </div>
                    </div>
                    <div className="card px-4 py-4 mx-4">
                        <div className="card_heading">
                            <h1>heading</h1>
                        </div>
                        <div className="card_content">
                            <p className="lead">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores magnam praesentium eaque, nulla totam numquam odit consequatur hic a dolore.</p>
                        </div>
                    </div>
                    <div className="card px-4 py-4 mx-4">
                        <div className="card_heading">
                            <h1>heading</h1>
                        </div>
                        <div className="card_content">
                            <p className="lead">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores magnam praesentium eaque, nulla totam numquam odit consequatur hic a dolore.</p>
                        </div>
                    </div>
                </div>
                <div className="vision_cards container my-5">
                    <div className="card px-4 py-4 mx-4">
                        <div className="card_heading">
                            <h1>heading</h1>
                        </div>
                        <div className="card_content">
                            <p className="lead">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores magnam praesentium eaque, nulla totam numquam odit consequatur hic a dolore.</p>
                        </div>
                    </div>
                    <div className="card px-4 py-4 mx-4">
                        <div className="card_heading">
                            <h1>heading</h1>
                        </div>
                        <div className="card_content">
                            <p className="lead">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores magnam praesentium eaque, nulla totam numquam odit consequatur hic a dolore.</p>
                        </div>
                    </div>
                    <div className="card px-4 py-4 mx-4">
                        <div className="card_heading">
                            <h1>heading</h1>
                        </div>
                        <div className="card_content">
                            <p className="lead">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores magnam praesentium eaque, nulla totam numquam odit consequatur hic a dolore.</p>
                        </div>
                    </div>
                </div>

            </div>

            <div className="container team py-5" id="team">
                <div className="container team_intro my-5">
                    <h1 className="display-2">THE TEAM</h1>
                    <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim deleniti accusamus tempore odit!</p>
                </div>
                <div className="member py-5">
                    <img src="./img/member1.png" alt="" className="member_img" />
                    <h1 className="display-7">Aditya Gupta</h1>
                    <h1 className="display-6 member_post">Frontend-Dev</h1>
                    <p className="lead">thoda sa bio</p>
                    <a href="/"><button type="button" className="btn btn-outline-info  start_button py-2" id="member_button">PORTFOLIO</button></a>
                </div>
                <div className="member py-5">
                    <img src="./img/member2.png" alt="" className="member_img" />
                    <h1 className="display-7">Aman Chauhan</h1>
                    <h1 className="display-6 member_post">Backend-Dev</h1>
                    <p className="lead">thoda sa bio</p>
                    <a href="/"><button type="button" className="btn btn-outline-info  start_button py-2" id="member_button">PORTFOLIO</button></a>
                </div>
                <div className="member py-5">
                    <img src="./img/member3.png" alt="" className="member_img" />
                    <h1 className="display-7">Anmol Sharma</h1>
                    <h1 className="display-6 member_post">Ui-Ux Designer</h1>
                    <p className="lead">thoda sa bio</p>
                    <a href="/"><button type="button" className="btn btn-outline-info  start_button py-2" id="member_button">PORTFOLIO</button></a>
                </div>
            </div>

        </>
    )
}

export default Home
































