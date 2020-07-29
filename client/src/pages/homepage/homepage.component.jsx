import React from 'react';

import Directory from '../../components/directory/directory.component';

import { MainContainer, Container } from './homepage.styles';

const HomePage = () => (
    <MainContainer>
        <Container>
            <Directory />
        </Container>
    </MainContainer>
);

export default HomePage;