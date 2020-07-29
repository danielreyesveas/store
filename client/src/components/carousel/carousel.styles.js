import styled from 'styled-components'
import { FaChevronLeft, FaChevronRight,  } from 'react-icons/fa';

export const MainContainer = styled.div`
    width: 100%;
	height: 700px;
	background: #FFFFFF;
    z-index: 2;
    margin-bottom: 30px;
    
    @media only screen and (max-width: 575px) {
		height: 100vh;
	}
`

export const SliderContainer = styled.div`
    width: 100%;
	height: 100%;
	padding-top: 30px;
    padding-bottom: 30px;
    
    @media only screen and (max-width: 991px){ 
		padding-left: 30px;
        padding-right: 30px;
    }

    @media only screen and (max-width: 767px){
		padding-left: 0px;
		padding-right: 0px;
    }

    @media only screen and (max-width: 575px) {
		padding-left: 0px;
		padding-right: 0px;
		padding-top: 0;
		padding-bottom: 0;
	}
`

export const Card = styled.div`
    position: relative;
    min-height: 1px;
    width: 100%;
    height: 100%;
    float: left;
`
export const Img = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: ${props => `url(${props.img})`};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
`
export const ArrowLeft = styled(FaChevronLeft)`
    cursor: pointer;
`

export const ArrowRight = styled(FaChevronRight)`
    cursor: pointer;
`

export const ContentContainer = styled.div`
    position: absolute;
	left: 0;
	top: 32.3%;
	width: 100%;
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
    max-width: 580px;

    @media only screen and (max-width: 767px) {
		max-width: 100%;
	}
`;

export const Title = styled.div`
    font-size: 60px;
	font-weight: 600;
	color: #FFFFFF;
    line-height: 1.2;
    
    @media only screen and (max-width: 991px) {
		font-size: 48px;
    }
    
    @media only screen and (max-width: 575px) {
		font-size: 24px;
	}
`;

export const Subtitle = styled.div`
    font-size: 14px;
	font-weight: 400;
	color: #FFFFFF;
	line-height: 2.14;
    margin-top: 22px;
    
    @media only screen and (max-width: 575px) {
		font-size: 13px;
		margin-top: 15px;
	}
`;

export const Button = styled.div`
    margin-top: 40px;
    width: 178px;
	height: 61px;
	background: none;
	text-align: center;
	overflow: hidden;
    cursor: pointer;
    border: solid 2px #FFFFFF;


    a {
        display: block;
        position: relative;
        font-size: 16px;
        font-weight: 600;
        line-height: 57px;
        color: #FFFFFF;
        background: none;
        z-index: 1;
        -webkit-transition: all 200ms ease;
        -moz-transition: all 200ms ease;
        -ms-transition: all 200ms ease;
        -o-transition: all 200ms ease;
        transition: all 200ms ease;
    }

    &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 150%;
        height: 100%;
        background: #FFFFFF;
        z-index: 0;
        opacity: 0;
        -webkit-transform: rotate3d(0, 0, 1, -45deg) translate3d(0, -3em, 0);
        transform: rotate3d(0, 0, 1, -45deg) translate3d(0, -3em, 0);
        -webkit-transform-origin: 0% 100%;
        transform-origin: 0% 100%;
        -webkit-transition: -webkit-transform 0.3s, opacity 0.3s, background-color 0.3s;
        transition: transform 0.3s, opacity 0.3s, background-color 0.3s;
    }

    &:hover:after {
        opacity: 1;
        -webkit-transform: rotate3d(0, 0, 1, 0deg);
        transform: rotate3d(0, 0, 1, 0deg);
        -webkit-transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
        transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
    }
        
    &:hover a {
        color: #1b1b1b;
    }

    @media only screen and (max-width: 575px) {
        margin-top: 32px;
        width: 148px;
		height: 41px;
        
        a {
            font-size: 13px;
            line-height: 37px;
        }
    }
`;

export const DotsContainer = styled.div`
    display: inline-block;
	position: absolute;
	left: 0;
	bottom: 0;
	z-index: 10;
	width: 100%;
	padding-left: 60px;
    padding-right: 60px;
    
    @media only screen and (max-width: 991px) {
		padding-left: 30px;
		padding-right: 30px;
    }
    
    @media only screen and (max-width: 767px) {
		display: none;
	}
`;

export const Dots = styled.div`
    position: absolute;
	left: 15px;
	bottom: 56px;
`;

export const CustomDots = styled.ul`
`;

export const CustomDot = styled.li`
    display: inline-block;
    position: relative;
    color: #FFFFFF;
    cursor: pointer;
    font-size: 14px;
    font-weight: 600;
    -webkit-transition: all 200ms ease;
    -moz-transition: all 200ms ease;
    -ms-transition: all 200ms ease;
    -o-transition: all 200ms ease;
    transition: all 200ms ease;
    
    &:hover {
        color: #e95a5a;
    }

    ${({ active }) => active && `
        color: #e95a5a;
    `}
`;