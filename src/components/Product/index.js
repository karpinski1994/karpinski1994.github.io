import React from "react";
import styled from "styled-components";
import myImage from "../../img/drink.png";
import Button from 'components/Button';

export const ProductTile = styled.div`
  display: flex;
  border-radius: 3px;
  
`;

export const ImageWrapper = styled.div`
  max-height: 150px;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Image = styled.img`
  width: auto;
  max-height: 150px;
  margin: 15px;
`;

export const Name = styled.div`
  font-weight: bold;
  font-size: 16px;
`;
export const Cat = styled.div`
  font-size: 13px;
`;
export const Desc = styled.div`
  font-size: 11px;
`;

const Product = ({ name, description, category, removeProduct }) => {
  return (
    <ProductTile>
      <ImageWrapper>
        <Image src={myImage} />
      </ImageWrapper>
      <Details>
        <Name>{name}</Name>
        <Cat>{category}</Cat>
        <Desc>{description} </Desc>
      </Details>
      <Button 
        title='Remove product'
        callback={() => removeProduct(name)}
      />
    </ProductTile>
  );
};

export default Product;
