import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderMain = styled.header`
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;
`;

export const HeaderContainer = styled.div`
    width: 100%;
    z-index: 1;
    background: #FFFFFF;

    @media only screen and (max-width: 1199px) {
		padding-left: 45px;
		padding-right: 45px;
    }
    @media only screen and (max-width: 575px) {
		padding-left: 0px;
		padding-right: 0px;
	}
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

export const HeaderContent = styled.div`
    width: 100%;
	height: 130px;
	-webkit-transition: all 200ms ease;
	-moz-transition: all 200ms ease;
	-ms-transition: all 200ms ease;
	-o-transition: all 200ms ease;
    transition: all 200ms ease;

    -ms-flex-align: center!important;
    align-items: center!important;
    -ms-flex-pack: start!important;
    justify-content: flex-start!important;
    -ms-flex-direction: row!important;
    flex-direction: row!important;
    display: -ms-flexbox!important;
    display: flex!important;
    
    @media only screen and (max-width: 575px) {
		height: 70px;
	}
`;

export const LogoContainer = styled(Link)`
    font-size: 30px;
    font-weight: 700;
    color: #1b1b1b;
    -webkit-transition: all 200ms ease;
    -moz-transition: all 200ms ease;
    -ms-transition: all 200ms ease;
    -o-transition: all 200ms ease;
    transition: all 200ms ease;
`;

export const Nav = styled.nav`
    margin-left: 156px;
    
    & > ul > li
    {
        display: inline-block;
        position: relative;
    }
    & > ul > li:not(:last-child)
    {
        margin-right: 46px;
    }
    & > ul > li > a
    {
        font-size: 16px;
        font-weight: 600;
        color: #767676;
        -webkit-transition: all 200ms ease;
        -moz-transition: all 200ms ease;
        -ms-transition: all 200ms ease;
        -o-transition: all 200ms ease;
        transition: all 200ms ease;
    }
    & > ul > li > a:hover,
    & > ul > li.active > a
    {
        color: #1b1b1b;
    }
    ul li.hassubs::after
    {
        position: absolute;
        top: 50%;
        -webkit-transform: translateY(-50%);
        -moz-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        -o-transform: translateY(-50%);
        transform: translateY(-50%);
        left: calc(100% + 3px);
        font-family: 'FontAwesome';
        font-size: 10px;
        content: '\f078';
        color: #767676;
    }
    & ul li:hover::after,
    & ul li.active::after
    {
        color: #1b1b1b;
    }

    @media only screen and (max-width: 1199px) {
        margin-left: 50px;
        
        & > ul > li:not(:last-child) {
            margin-right: 40px;
        }
    }

    @media only screen and (max-width: 991px) {
        display: none;
    }
`;

export const HeaderExtra = styled.div`
    margin-left: auto!important;
`;

export const ShoppingCart = styled.div`
    display: inline-block;
    
    a svg
    {
        display: inline-block;
        width: 20px;
        height: 20px;
        vertical-align: middle;
        -webkit-transition: all 200ms ease;
        -moz-transition: all 200ms ease;
        -ms-transition: all 200ms ease;
        -o-transition: all 200ms ease;
        transition: all 200ms ease;
    }
    &:hover svg,
    &:hover div
    {
        fill: #e95a5a;
        color: #e95a5a;
    }
    a div
    {
        display: inline-block;
        vertical-align: middle;
        font-size: 14px;
        font-weight: 500;
        color: #1b1b1b;
        margin-left: 13px;
        -webkit-transition: all 200ms ease;
        -moz-transition: all 200ms ease;
        -ms-transition: all 200ms ease;
        -o-transition: all 200ms ease;
        transition: all 200ms ease;
    }
    a div span
    {
        margin-left: 4px;
    }
`;

export const Search = styled.div`
    display: inline-block;
    margin-left: 51px;
    cursor: pointer;
    vertical-align: sub;
    -webkit-transform: translateY(-1px);
    -moz-transform: translateY(-1px);
    -ms-transform: translateY(-1px);
    -o-transform: translateY(-1px);
    transform: translateY(-1px);        

    @media only screen and (max-width: 1199px) {
		margin-left: 25px;
	}
    
    @media only screen and (max-width: 991px) {
		display: none;
    }
`;

export const SearchIcon = styled.div`
    width: 13px;
    height: 13px;
    
    svg
    {
        -webkit-transition: all 200ms ease;
        -moz-transition: all 200ms ease;
        -ms-transition: all 200ms ease;
        -o-transition: all 200ms ease;
        transition: all 200ms ease;
    }
    &:hover svg
    {
        fill: #e95a5a;
    }    
`

export const Hamburger = styled.div`
	display: none;
	margin-left: 30px;
	cursor: pointer;
	margin-right: 4px;
	-webkit-transform: translateY(2px);
	-moz-transform: translateY(2px);
	-ms-transform: translateY(2px);
	-o-transform: translateY(2px);
	transform: translateY(2px);

    i {
        font-size: 18px;
        color: #1b1b1b;
    }

    @media only screen and (max-width: 991px) {
		display: inline-block;
	}
`;

export const OptionSub = styled.li`
    &::after {
        position: absolute;
        top: 50%;
        -webkit-transform: translateY(-50%);
        -moz-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        -o-transform: translateY(-50%);
        transform: translateY(-50%);
        left: calc(100% + 3px);
        font-family: 'FontAwesome';
        font-size: 10px;
        content: '\f078';
        color: #767676;
    }
    ul {
        position: absolute;
        right: -15px;
        top: calc(100% + 20px);
        text-align: right;
        background: #FFFFFF;
        padding-right: 25px;
        padding-left: 35px;
        padding-top: 25px;
        padding-bottom: 25px;
        visibility: hidden;
        opacity: 0;
        -webkit-transition: all 200ms ease;
        -moz-transition: all 200ms ease;
        -ms-transition: all 200ms ease;
        -o-transition: all 200ms ease;
        transition: all 200ms ease;
    }
    &:hover ul {
        visibility: visible;
        opacity: 1;
        top: calc(100% + 0px);
    }
    ul li:not(:last-child) {
        margin-bottom: 11px;
    }
    ul li a {
        font-size: 14px;
        font-weight: 600;
        color: #767676;
        -webkit-transition: all 200ms ease;
        -moz-transition: all 200ms ease;
        -ms-transition: all 200ms ease;
        -o-transition: all 200ms ease;
        transition: all 200ms ease;
    }
    ul li a:hover {
        color: #1b1b1b;
    }
`;