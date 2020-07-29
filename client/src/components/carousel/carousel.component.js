import React, { useState } from 'react'
import { 
    MainContainer, SliderContainer, Card, Img, ArrowLeft, ArrowRight, ContentContainer, 
    Container, Row, Col, Content, Title, Subtitle, Button,
    DotsContainer, Dots, CustomDots, CustomDot
 } from './carousel.styles'

import Slide from '@material-ui/core/Slide';
import Img1 from '../../assets/Teenage_Engineering_metal_series_Super_Set_1024x10242x.jpg'
import Img2 from '../../assets/nicolas-nowak-pocket-operators.jpg'
import Img3 from '../../assets/PocketOperatorRange.png'


const Carousel = () => {

    const SLIDE_INFO = [
        { img: Img1, title: 'A new Online Shop experience.', subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a ultricies metus. Sed nec molestie eros. Sed viverra velit venenatis fermentum luctus.', button: 'Shop Now' },
        { img: Img2, title: 'Try it!', subtitle: 'Molestie eros sed viverra velit venenatis fermentum luctus.', button: 'Try' },
        { img: Img3, title: 'Play', subtitle: 'Viverra velit venenatis fermentum luctus.', button: 'Listen' }
    ];
    const [index, setIndex] = useState(0);
    const content = SLIDE_INFO[index];
    const numSlides = SLIDE_INFO.length;

    const { img, title, subtitle, button } = content;

    const [slideIn, setSlideIn] = useState(true);
    const [slideDirection, setSlideDirection] = useState('down');

    const onArrowClick = (direction) => {
        const increment = direction === 'left' ? -1 : 1;
        const newIndex = (index + increment + numSlides) % numSlides;

        const oppDirection = direction === 'left' ? 'right' : 'left';
        setSlideDirection(direction);
        setSlideIn(false);

        setTimeout(() => {
            setIndex(newIndex);
            setSlideDirection(oppDirection);
            setSlideIn(true);
        }, 500);
    };
    
    const updateSlide = newIndex => {
        const direction = (newIndex > index) ? 'right' : 'left';
        const oppDirection = (direction === 'left') ? 'right' : 'left';
        setSlideDirection(direction);
        setSlideIn(false);

        setTimeout(() => {
            setIndex(newIndex);
            setSlideDirection(oppDirection);
            setSlideIn(true);
        }, 500);
    };

    return (
        <MainContainer>
            
            <SliderContainer>
        
                {/* <ArrowLeft
                    onClick={() => onArrowClick('left')}
                /> */}
                <Slide in={slideIn} direction={slideDirection}>
                    <Card img={img} className={img}>
                        <Img img={img} />
                        <ContentContainer>
                            <Container>
                                <Row>
                                    <Col>
                                        <Content>
                                            <Title>{title}</Title>
                                            <Subtitle>{subtitle}</Subtitle>
                                            <Button><a href="#">{button}</a></Button>
                                        </Content>
                                    </Col>
                                </Row>
                            </Container>
                        </ContentContainer>
                        <DotsContainer>
                            <Container>
                                <Row>
                                    <Col>
                                        <Dots>
                                            <CustomDots>
                                                {SLIDE_INFO.map((slide, ind) => (
                                                    <CustomDot
                                                        key={ind}
                                                        active={(ind === index)}
                                                        onClick={() => updateSlide(ind)}
                                                    >
                                                        {`0${ind + 1}.`}
                                                    </CustomDot>
                                                ))}
                                            </CustomDots>
                                        </Dots>
                                    </Col>
                                </Row>
                            </Container>	
                        </DotsContainer>
                    </Card>                    
                </Slide>
                {/* <ArrowRight
                    onClick={() => onArrowClick('right')}
                /> */}

            </SliderContainer>

        </MainContainer>        
    );
}

export default Carousel