import styled from 'styled-components';

export const IconBoxesContainer = styled.div`
    width: 100%;
	padding-top: 99px;
	padding-bottom: 99px;
	background: #FFFFFF;
	z-index: 2;
`;

export const Container = styled.div`
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;

    @media (min-width: 576px) {
        max-width: 540px;
    }    
    @media (min-width: 768px) {
        max-width: 720px;
    }
    @media (min-width: 992px) {
        max-width: 960px;
    }
    @media only screen and (max-width: 1199px)
    {
        max-width: 100%;
    }
    @media (min-width: 1200px) {
        max-width: 1170px;
    }
`;

export const Row = styled.div`
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
`;

export const IconBoxCol = styled.div`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    @media (min-width: 992px) {
        -ms-flex: 0 0 33.333333%;
        flex: 0 0 33.333333%;
        max-width: 33.333333%;
    }

    @media only screen and (max-width: 991px) {
        &:not(:last-of-type)
        {
            margin-bottom: 60px;
        }
    }
`;

export const IconBox = styled.div`
    width: 100%;
    text-align: center;
    
    @media only screen and (max-width: 991px) {
		padding-left: 80px;
		padding-right: 80px;
    }
    
    @media only screen and (max-width: 767px) {
		padding-left: 50px;
		padding-right: 50px;
    }
    
    @media only screen and (max-width: 480px) {
		padding-left: 30px;
		padding-right: 30px;
	}
`;

export const IconBoxImage = styled.div`
    width: 75px;
	height: 75px;
	margin-left: auto;
	margin-right: auto;

    & > *
    {
        max-width: 100%;
    }    
`;

export const IconBoxTitle = styled.div`
    font-size: 18px;
	font-weight: 500;
	color: #1b1b1b;
	margin-top: 33px;
`;

export const IconBoxText = styled.div`
    margin-top: 20px;
`;