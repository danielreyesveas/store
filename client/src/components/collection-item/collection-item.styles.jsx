import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';

export const CollectionItemContainer = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
  
  &:hover {
    .image {
      opacity: 0.8;
    }
    button {
      opacity: 0.85;
      display: flex;
    }
  }

  @media screen and (max-width: 800px) {
    width: 40vw;    

    &:hover {
      .image {
        opacity: unset;
      }
      button {
        opacity: unset;
      }
    }
  }
`;

export const AddButton = styled(CustomButton)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 255px;
  display: none;

  @media screen and (max-width: 800px) {
    display: block;
    opacity: 0.9;
    min-width: unset;
    padding: 0 10px;
  }
`;

export const BackgroundImage = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const CollectionFooterContainer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const NameContainer = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

export const PriceContainer = styled.span`
  width: 10%;
  text-align: right;
`;



export const ProductContainer = styled.div`
  width: calc((100% - 90px) / 4);
  margin-bottom: 59px;
  
  @media only screen and (max-width: 991px) {
		width: calc((100% - 30px) / 2);
  }
  
  @media only screen and (max-width: 575px) {
		width: 100%;
	}
`;

export const ImageContainer = styled.div`
  width: 100%;
`;

export const Image = styled.img`
  object-fit: cover;
  vertical-align: middle;
  border-style: none;
  height: 400px;
  width: 100%;
`;

export const Extra = styled.div`
  position: absolute;
	top: 0;
	left: 54px;
	width: 66px;
	height: 36px;
	text-align: center;
	-webkit-transform-origin: top left;
	-moz-transform-origin: top left;
	-ms-transform-origin: top left;
	-o-transform-origin: top left;
	transform-origin: top left;
  transform: rotate(90deg);
  
  background: #6c6a74;
  
  a {
    display: block;
    font-size: 16px;
    font-weight: 500;
    color: #FFFFFF;
    line-height: 36px;
  }
`;

export const Content = styled.div`
  width: 100%;
	padding-top: 36px;
	padding-bottom: 38px;
`;

export const Title = styled.div`
  a {
    font-size: 18px;
    font-weight: 500;
    color: #1b1b1b;
    line-height: 1.1;
    -webkit-transition: all 200ms ease;
    -moz-transition: all 200ms ease;
    -ms-transition: all 200ms ease;
    -o-transition: all 200ms ease;
    transition: all 200ms ease;
  }
  a:hover {
    color: #e95a5a;
  }
`;

export const Price = styled.div`
  font-size: 16px;
	font-weight: 500;
	color: #6c6a74;
	line-height: 0.75;
	margin-top: 13px;: #e95a5a;
`;
