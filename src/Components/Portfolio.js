import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import todo from '../images/todo.png'
import resume from '../images/resume.png'
import chatApp from '../images/chatApp.png'
import corsesystem2020 from '../images/corsesystem2020.png'
import booksRESTful  from '../images/booksRESTful .png'
import Flip from 'react-reveal/Flip';


class Portfolio extends Component {
    render() {
        return (
            <div className=' py-5' id='portfolio'>
                <Row className='mx-auto'>
                    <h1 className='mx-auto pb-5 py-5'>Recent Projects </h1>
                </Row>
                <Row className='justify-content-center text-center'>
                    <Col md='12' className='projects '>
                        <Flip top>
                            <div className='box'>
                                <a target='_blank' rel="noopener noreferrer" href='https://github.com/mulualm1997/TODO-LIST'>
                                    <img className='img-fluid shadow-lg' src={todo} alt="todo"
                                        style={{
                                            height: '200px',
                                            width: '250px'
                                        }}
                                    />
                                    <div className="overlay">
                                        <div className="text">TODO-LIST</div>
                                    </div>
                                </a>
                            </div>
                        </Flip>
                    </Col>
                    <Col md='12' className='projects '>
                        <Flip top>
                            <div className='box '>
                                <a target='_blank' rel="noopener noreferrer" href=''>
                                    <img className='img-fluid shadow-lg' src={resume} alt="fullstack-resume"
                                        style={{
                                            height: '200px',
                                            width: '250px'
                                        }}
                                    />
                                    <div className="overlay">
                                        <div className="text">Fullstack Resume</div>
                                    </div>
                                </a>
                            </div>
                        </Flip>

                    </Col>
                    <Col md='12' className='projects '>
                        <Flip top>
                            <div className='box '>
                                <a target='_blank' rel="noopener noreferrer" href='https://github.com/mulualm1997/chat---app'>
                                    <img className='img-fluid shadow-lg' src={chatApp} alt="chatApp"
                                        style={{
                                            height: '200px',
                                            width: '250px'
                                        }}
                                    />
                                    <div className="overlay">
                                        <div className="text">Chat-App</div>
                                    </div>
                                </a>
                            </div>
                        </Flip>

                    </Col>
                    <Col md='12' className='projects '>
                        <Flip top>
                            <div className='box '>
                                <a target='_blank' rel="noopener noreferrer" href='https://github.com/mulualm1997/corseSystem'>
                                    <img className='img-fluid shadow-lg' src={corsesystem2020} alt="corsesystem2020"
                                        style={{
                                            height: '200px',
                                            width: '250px'
                                        }}
                                    />
                                    <div className="overlay">
                                        <div className="text">Corse System</div>
                                    </div>
                                </a>
                            </div>
                        </Flip>

                    </Col>
                    <Col md='12' className='projects '>
                        <Flip top>
                            <div className='box '>
                                <a target='_blank' rel="noopener noreferrer" href='https://github.com/mulualm1997/corseSystem'>
                                    <img className='img-fluid shadow-lg' src={booksRESTful } alt="booksRESTful "
                                        style={{
                                            height: '200px',
                                            width: '250px'
                                        }}
                                    />
                                    <div className="overlay">
                                        <div className="text">books RESTful </div>
                                    </div>
                                </a>
                            </div>
                        </Flip>

                    </Col>
                </Row>
            </div>
        )
    }
}
export default Portfolio