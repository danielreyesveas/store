import React from 'react'


import { IconBoxesContainer, Container, Row, IconBoxCol, IconBox, IconBoxImage, IconBoxTitle, IconBoxText } from './icon-boxes.styles'

import Icon1 from '../../assets/icon_1.svg';
import Icon2 from '../../assets/icon_2.svg';
import Icon3 from '../../assets/icon_3.svg';


const IconBoxes = () => {
    
    return (  
        <IconBoxesContainer>
            <Container>
                <Row>                    
                    <IconBoxCol>
                        <IconBox>
                            <IconBoxImage>
                                <img src={Icon1} alt="Free Shipping Worldwide" />
                            </IconBoxImage>
                            <IconBoxTitle>Free Shipping Worldwide</IconBoxTitle>
                            <IconBoxText>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a ultricies metus. Sed nec molestie.</p>
                            </IconBoxText>
                        </IconBox>
                    </IconBoxCol>

                    <IconBoxCol>
                        <IconBox>
                            <IconBoxImage>
                                <img src={Icon2} alt="Free Returns" />
                            </IconBoxImage>
                            <IconBoxTitle>Free Returns</IconBoxTitle>
                            <IconBoxText>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a ultricies metus. Sed nec molestie.</p>
                            </IconBoxText>
                        </IconBox>
                    </IconBoxCol>

                    <IconBoxCol>
                        <IconBox>
                            <IconBoxImage>
                                <img src={Icon3} alt="24h Fast Support" />
                            </IconBoxImage>
                            <IconBoxTitle>24h Fast Support</IconBoxTitle>
                            <IconBoxText>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a ultricies metus. Sed nec molestie.</p>
                            </IconBoxText>
                        </IconBox>
                    </IconBoxCol>
                </Row>
            </Container>
        </IconBoxesContainer>
    )
}
 
export default IconBoxes