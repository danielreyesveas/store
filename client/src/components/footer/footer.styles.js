import styled from 'styled-components'
import img from '../../assets/footer.jpg';

export const Overlay = styled.div`
    width: 100%;
	height: 129px;
	background: transparent;
    z-index: 1;
    
    @media only screen and (max-width: 991px) {
		height: 200px;
	}
`

export const FooterContainer = styled.footer`
    display: block;
    position: fixed;
	left: 0;
	bottom: 0;
	width: 100%;
	z-index: 1;
`

export const Background = styled.div`
    background-image: url(${img});
    position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center center;
`

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

export const Col = styled.div`
    -ms-flex-preferred-size: 0;
    flex-basis: 0;
    -ms-flex-positive: 1;
    flex-grow: 1;
    max-width: 100%;
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
`;

export const Content = styled.div`
    width: 100%;
    height: 129px;
    justify-content: flex-start!important;
    align-items: center!important;
    display: flex!important;

    @media (min-width: 992px) {
        -ms-flex-direction: row!important;
        flex-direction: row!important;
    }
    
    @media only screen and (max-width: 991px) {
		height: 200px;
	}
`;

export const Logo = styled.div`
    width: 30%;

    a {
        font-size: 30px;
        line-height: 0.75;
        color: #1b1b1b;
        font-weight: 700;
    }

    @media only screen and (max-width: 991px) {
		text-align: center;
		width: 100%;
    }
    
    @media only screen and (max-width: 575px) {
        a
        {
            font-size: 24px;
        }
	}
`;

export const Copyright = styled.div`
    width: 40%;
	text-align: center;
	font-size: 14px;
	font-weight: 400;
    color: #1b1b1b;

    @media only screen and (max-width: 991px) {
		text-align: center;
		width: 100%;
		margin-top: 15px;
    }
    
    @media only screen and (max-width: 575px) {
		font-size: 13px;
	}
`;

export const Social = styled.div`
    width: 30%;
	text-align: right;

    ul li {
        display: inline-block;
    }
    ul li:not(:last-child) {
        margin-right: 26px;
    }
    ul li a i {
        font-size: 17px;
        color: #1b1b1b;
        -webkit-transition: all 200ms ease;
        -moz-transition: all 200ms ease;
        -ms-transition: all 200ms ease;
        -o-transition: all 200ms ease;
        transition: all 200ms ease;
    }
    ul li a i:hover {
        color: #FFFFFF;
    }

    @media only screen and (max-width: 991px) {
		text-align: center;
		width: 100%;
		margin-top: 21px;
	}
`;