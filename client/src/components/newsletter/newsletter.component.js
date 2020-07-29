import React from 'react'

import { NewsletterContainer, Container, Row, Col, NewsletterBorder, NewsletterCol, NewsletterContent, NewsletterTitle, NewsletterText, NewsletterFormContainer, NewsletterForm, NewsletterInput, NewsletterButton } from './newsletter.styles'


const Newsletter = () => {
    return ( 
        <NewsletterContainer>
            <Container>
                <Row>
                    <Col>
                        <NewsletterBorder />
                    </Col>
                </Row>
                <Row>
                    <NewsletterCol>
                        <NewsletterContent>
                            <NewsletterTitle>Subscribe to our newsletter</NewsletterTitle>
                            <NewsletterText><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a ultricies metus. Sed nec molestie eros</p></NewsletterText>
                            <NewsletterFormContainer>
                                <NewsletterForm action="#" id="newsletter_form">
                                    <NewsletterInput type="email" required="required" />
                                    <NewsletterButton><span>Subscribe</span></NewsletterButton>
                                </NewsletterForm>
                            </NewsletterFormContainer>
                        </NewsletterContent>
                    </NewsletterCol>
                </Row>
            </Container>
        </NewsletterContainer>
    );
}
 
export default Newsletter;