import React, { Component } from "react";
import styled from "styled-components";
import CocktailImage from "../../img/Cocktails.png";
import Button from "components/Button";
import Modal from "containers/Modal";

const StyledModal = styled.div`
  background: white;
  position: absolute;
  top: 50%;
  left: 50%;
  padding: 10px 10px;
  width: 500px;
  height: auto;
  border: 1px solid black;
  border-radius: 5px;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  box-shadow: 0px 0px 15px 15px rgba(0, 0, 0, 0.6);
`;

const ButtonsGroup = styled.div`
  display: flex;
  flex-direction:${props => props.column ? 'column': 'row'};
  width: 100%;
  justify-content: space-evenly;
`;

export const ProductTile = styled.div`
  margin: 10px;
  display: flex;
  border-radius: 3px;
  border: 1px solid #555;
  width: 260px;
  height: 155px;
  padding: 10px;
`;

export const ImageWrapper = styled.div`
  height: 100%;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 100%;
`;

const Image = styled.img`
  width: auto;
  max-height: 70%;
  margin-top: 20px;
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

class Product extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showRemovalModal: false,
      showDetailsModal: false,
    };
  }

  toggleDetailsModal = () => {
    this.setState({
      showDetailsModal: !this.state.showDetailsModal,
    });
  };

  toggleRemovalModal = () => {
    this.setState({
      showRemovalModal: !this.state.showRemovalModal,
    });
  };

  handleOkClick = (name) => {
    this.props.removeProduct(name);
    this.toggleRemovalModal();
  };

  handleCancelClick = () => {
    this.toggleRemovalModal();
  };

  render() {
    const { name, description, category } = this.props;
    const { showRemovalModal, showDetailsModal } = this.state;

    return (
      <ProductTile>
        <ImageWrapper>
          <Image src={CocktailImage} />
        </ImageWrapper>
        <Details>
          <Name>{name}</Name>
          <Cat>{category}</Cat>
          <ButtonsGroup column>
            <Button title="Details" callback={this.toggleDetailsModal} />
            <Button title="Remove" callback={this.toggleRemovalModal} black/>
          </ButtonsGroup>
        </Details>

        {showDetailsModal ? (
          <Modal>
            <StyledModal>
              <h1>{name}</h1>
              <p>{description}</p>
              <ButtonsGroup>
                <Button title="Close" callback={this.toggleDetailsModal} black />
              </ButtonsGroup>
            </StyledModal>
          </Modal>
        ) : null}
        {showRemovalModal ? (
          <Modal>
            <StyledModal>
              <h1>Remove product</h1>
              <p>Are you sure you want to remove this product?</p>
              <ButtonsGroup>
                <Button title="Cancel" callback={this.handleCancelClick} />
                <Button title="Yes" callback={() => this.handleOkClick(name)} black/>
              </ButtonsGroup>
            </StyledModal>
          </Modal>
        ) : null}
      </ProductTile>
    );
  }
}

export default Product;
