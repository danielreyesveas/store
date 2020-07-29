import styled from 'styled-components';

export const MainContainer = styled.div`
    width: 100%;
	height: 950px;
	background: #FFFFFF;
    z-index: 2;
    
    @media only screen and (max-width: 575px) {
		height: 100vh;
	}
`;

export const Container = styled.div`
    width: 100%;
	height: 100%;
	padding-top: 130px;
	padding-left: 60px;
	padding-right: 60px;
    padding-bottom: 30px;
    
    @media only screen and (max-width: 991px) {
		padding-left: 30px;
		padding-right: 30px;
    }

    @media only screen and (max-width: 767px) {
		padding-left: 0px;
		padding-right: 0px;
	}
    
    @media only screen and (max-width: 575px) {
		padding-left: 0px;
		padding-right: 0px;
		padding-top: 0;
		padding-bottom: 0;
    }
`;