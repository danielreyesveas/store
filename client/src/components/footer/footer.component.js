import React, { useState, useEffect } from 'react'

import { Overlay, FooterContainer, Background, Container, Row, Col, Content, Logo, Copyright, Social } from './footer.styles'

const Footer = () => {

    const [date , setDate] = useState();

    useEffect(() => {
        const getYear = () =>  {
            setDate(new Date().getFullYear())
        }

        getYear()
    }, [])

    return (
        <>

            <FooterContainer>

                <Background />
                
                <Container>
                    <Row>
                        <Col>
                            <Content>
                                <Logo><a href="#">Sublime.</a></Logo>
                                <Copyright>
                                    &copy;{date} <i className="fa fa-keyboard-o" aria-hidden="true"></i> <a href="https://reciclatusanimales.com" target="_blank">Tienda Ñoña</a>
                                </Copyright>
                                <Social>
                                    <ul>
                                        <li><a href="#"><i className="fa fa-pinterest" aria-hidden="true"></i></a></li>
                                        <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                                        <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                        <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                    </ul>
                                </Social>
                            </Content>
                        </Col>
                    </Row>
                </Container>

            </FooterContainer>
        </>
    );
}
 
export default Footer;