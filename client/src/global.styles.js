import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        -webkit-font-smoothing: antialiased;
        -webkit-text-shadow: rgba(0,0,0,.01) 0 0 1px;
        text-shadow: rgba(0,0,0,.01) 0 0 1px;
    }
    html, body {
        height: 100%;
    }
    body {
        font-family: 'Poppins', sans-serif;
        font-size: 14px;
        font-weight: 400;
        background: #FFFFFF;
        color: #a5a5a5;

        @media screen and (max-width: 800px) {
            padding: 10px;
        }
    }

    div {
        display: block;
        position: relative;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    ul {
        list-style: none;
        margin-bottom: 0px;
    }
    p {
        font-family: 'Poppins', sans-serif;
        font-size: 14px;
        line-height: 2.14;
        font-weight: 400;
        color: #6c6a74;
        -webkit-font-smoothing: antialiased;
        -webkit-text-shadow: rgba(0,0,0,.01) 0 0 1px;
        text-shadow: rgba(0,0,0,.01) 0 0 1px;
    }
    p a {
        display: inline;
        position: relative;
        color: inherit;
        border-bottom: solid 1px #ffa07f;
        -webkit-transition: all 200ms ease;
        -moz-transition: all 200ms ease;
        -ms-transition: all 200ms ease;
        -o-transition: all 200ms ease;
        transition: all 200ms ease;
    }
    p:last-of-type {
        margin-bottom: 0;
    }
    a, a:hover, a:visited, a:active, a:link {
        text-decoration: none;
        -webkit-font-smoothing: antialiased;
        -webkit-text-shadow: rgba(0,0,0,.01) 0 0 1px;
        text-shadow: rgba(0,0,0,.01) 0 0 1px;
    }
    a:hover {
        cursor: pointer;
    }
    p a:active {
        position: relative;
        color: #FF6347;
    }
    p a:hover {
        color: #FFFFFF;
        background: #ffa07f;
    }
    p a:hover::after {
        opacity: 0.2;
    }
    ::selection {
        
    }
    p::selection {
        
    }
    h1 {
        font-size: 48px;
    }
    h2 {
        font-size: 36px;
    }
    h3 {
        font-size: 24px;
    }
    h4 {
        font-size: 18px;
    }
    h5 {
        font-size: 14px;
    }
    h1, h2, h3, h4, h5, h6 {
        font-family: 'Open Sans', sans-serif;
        -webkit-font-smoothing: antialiased;
        -webkit-text-shadow: rgba(0,0,0,.01) 0 0 1px;
        text-shadow: rgba(0,0,0,.01) 0 0 1px;
    }
    h1::selection, 
    h2::selection, 
    h3::selection, 
    h4::selection, 
    h5::selection, 
    h6::selection {
        
    }
    .form-control {
        color: #db5246;
    }
    section {
        display: block;
        position: relative;
        box-sizing: border-box;
    }
    .clear {
        clear: both;
    }
    .clearfix::before, .clearfix::after {
        content: "";
        display: table;
    }
    .clearfix::after {
        clear: both;
    }
    .clearfix {
        zoom: 1;
    }
    .float_left {
        float: left;
    }
    .float_right {
        float: right;
    }



`