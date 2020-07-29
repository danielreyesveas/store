import React from 'react';
import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart.actions';

import {
  CollectionItemContainer,
  CollectionFooterContainer,
  AddButton,
  BackgroundImage,
  NameContainer,
  PriceContainer,

  ProductContainer,
  ImageContainer,
  Image,
  Extra,
  Content,
  Title,
  Price
} from './collection-item.styles';

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;

  return (
    <ProductContainer className='product'>
      <ImageContainer>
        <Image src={imageUrl} alt={name} />    
      </ImageContainer>
      <Extra>
        <a href="/">New</a>
      </Extra>
      <Content>
         <Title>
           <a href="/" className="name">{ name }</a>
          </Title>
         <Price className="price">{price}</Price>
       </Content>
    </ProductContainer>
    // <div className="product">
    //   <div className="product_image"><img src="images/product_1.jpg" alt="" /></div>
    //   <div className="product_extra product_new"><a href="categories.html">New</a></div>
    //   <div className="product_content">
    //     <div className="product_title"><a href="product.html">Smart Phone</a></div>
    //     <div className="product_price">$670</div>
    //   </div>
    // </div>
    
    
    /* <CollectionItemContainer>
      <BackgroundImage className='image' imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{price}</PriceContainer>
      </CollectionFooterContainer>
      <AddButton onClick={() => addItem(item)} inverted>
        Add to cart
      </AddButton>
    </CollectionItemContainer> */
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CollectionItem);