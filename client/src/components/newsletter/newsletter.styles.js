import styled from 'styled-components';

export const NewsletterContainer = styled.div`
    width: 100%;
	background: #FFFFFF;
	padding-bottom: 99px;
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

export const NewsletterBorder = styled.div`
    width: 100%;
	border-top: solid 2px #e3e3e3;
`;

export const NewsletterCol = styled.div`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    @media (min-width: 992px) {
        margin-left: 16.666667%;
        -ms-flex: 0 0 66.666667%;
        flex: 0 0 66.666667%;
        max-width: 66.666667%;
    }
`;

export const NewsletterContent = styled.div`
    padding-top: 88px;
    text-align: center!important;
`;

export const NewsletterTitle = styled.div`
    font-size: 30px;
	font-weight: 500;
    color: #1b1b1b;
    
    @media only screen and (max-width: 575px) {
		font-size: 24px;
	}
`;

export const NewsletterText = styled.div`
    margin-top: 8px;
`;

export const NewsletterFormContainer = styled.div`
    width: 100%;
	margin-top: 46px;
`;

export const NewsletterForm = styled.form`
    width: 100%;
`;

export const NewsletterInput = styled.input`
    width: 100%;
	height: 40px;
	border: none;
	border-bottom: solid 2px #787878;
	outline: none;
	text-align: center;
`;

export const NewsletterButton = styled.button`
    position: relative;
	width: 178px;
	height: 61px;
	border: solid 2px #1b1b1b;
	background: #FFFFFF;
	cursor: pointer;
	margin-top: 55px;
    overflow: hidden;
    
    -webkit-transition: all 200ms ease;
	-moz-transition: all 200ms ease;
	-ms-transition: all 200ms ease;
	-o-transition: all 200ms ease;
	transition: all 200ms ease;

    span {
        display: block;
        position: relative;
        z-index: 10;
        font-size: 16px;
        font-weight: 600;
        color: #1b1b1b;
        background: none;
        -webkit-transition: all 200ms ease;
        -moz-transition: all 200ms ease;
        -ms-transition: all 200ms ease;
        -o-transition: all 200ms ease;
        transition: all 200ms ease;
    }

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 150%;
        height: 100%;
        background: #1b1b1b;
        z-index: 0;
        opacity: 0;
        -webkit-transform: rotate3d(0, 0, 1, -45deg) translate3d(0, -3em, 0);
        transform: rotate3d(0, 0, 1, -45deg) translate3d(0, -3em, 0);
        -webkit-transform-origin: 0% 100%;
        transform-origin: 0% 100%;
        -webkit-transition: -webkit-transform 0.3s, opacity 0.3s, background-color 0.3s;
        transition: transform 0.3s, opacity 0.3s, background-color 0.3s;
    }

    &:hover::after {
        opacity: 1;
        -webkit-transform: rotate3d(0, 0, 1, 0deg);
        transform: rotate3d(0, 0, 1, 0deg);
        -webkit-transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
        transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
    }

    &:hover span {
        color: #FFFFFF;
    }

    @media only screen and (max-width: 575px) {
        width: 128px;
		height: 41px;
	
        span {
            font-size: 13px;
        }
	}
`;
