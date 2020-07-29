import styled from 'styled-components';

export const CollectionPageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CollectionTitle = styled.h2`
  font-size: 38px;
  margin: 0 auto 30px;
  text-transform: uppercase;
`;

export const CollectionItemsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
  & > div {
    margin-bottom: 30px;
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

export const SortingBar = styled.div`
  width: 100%;
	padding-top: 88px;
  padding-bottom: 100px;
  flex-direction: column!important;
  display: flex!important;

  @media (min-width: 768px) {
    -ms-flex-align: center!important;
    align-items: center!important;
    justify-content: flex-start!important;
    flex-direction: row!important;
  }
`;

export const Results = styled.div`
  font-size: 14px;
	font-weight: 400;
  color: #6c6a74;

  @media only screen and (max-width: 575px) {
    font-size: 13px;
  }
`;

export const SortingContainer = styled.div`
  @media only screen and (max-width: 767px) {
		margin-top: 15px;
  }
  
  @media (min-width: 768px) {
    margin-left: auto!important;
  }
`;

export const ItemSorting = styled.ul`
    display: inline-block;
  
  & > li {
    display: inline-block;
    position: relative;
    width: 191px;
    height: 36px;
    line-height: 32px;
    cursor: pointer;
    border: solid 2px #ececec;
    padding-left: 26px;
    padding-right: 19px;
    margin-right: 8px;
    font-size: 14px;
    font-weight: 400;
    color: #6c6a74;
    margin-bottom: 10px;
  }
  & > li:last-of-type {
    margin-right: 0;
  }
   li i {
    float: right;
    line-height: 32px;
    font-size: 10px;
    color: #787878;
  }
  li ul {
    display: block;
    position: absolute;
    right: 0;
    top: 120%;
    margin: 0;
    width: 100%;
    background: #FFFFFF;
    visibility: hidden;
    opacity: 0;
    z-index: 1;
    box-shadow: 0 15px 25px rgba(63, 78, 100, 0.15);
    -webkit-transition: opacity 0.3s ease;
    -moz-transition: opacity 0.3s ease;
    -ms-transition: opacity 0.3s ease;
    -o-transition: opacity 0.3s ease;
    transition: all 0.3s ease;
  }
  & > li:hover ul {
    visibility: visible;
    opacity: 1;
    top: calc(100% + 1px);
  }
  li ul li {
    display: block;
    text-align: left;
    padding-left: 15px;
    padding-right: 15px;
  }
  li ul li span {
    display: block;
    height: 36px;
    line-height: 36px;
    border-bottom: solid 1px #dddddd;
    color: #6c6a74;
    text-align: right;
    padding-right: 5px;
    -webkit-transition: opacity 0.3s ease;
    -moz-transition: opacity 0.3s ease;
    -ms-transition: opacity 0.3s ease;
    -o-transition: opacity 0.3s ease;
    transition: all 0.3s ease;
  }
  li ul li span:hover {
    color: #b5aec4;
  }
  li ul li:last-of-type span {
    border-bottom: none;
  }
  li span:nth-of-type(2) {
    margin-left: 63px;
  }

  @media only screen and (max-width: 575px) {	
    & > li {
      width: 161px;
      font-size: 13px;
    }
  }
`;

