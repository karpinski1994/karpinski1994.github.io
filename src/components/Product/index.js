import React, { Component } from "react";
import CocktailImage from "../../img/Cocktails.png";
import Button from "components/Button";
import Modal from "containers/Modal";
import {
  StyledModal,
  ButtonsGroup,
  ProductTile,
  ImageWrapper,
  Details,
  Image,
  Name,
  StyledCategory,
} from "./style";

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
          <StyledCategory>{category}</StyledCategory>
          <ButtonsGroup column>
            <Button title="Details" callback={this.toggleDetailsModal} />
            <Button title="Remove" callback={this.toggleRemovalModal} black />
          </ButtonsGroup>
        </Details>

        {showDetailsModal ? (
          <Modal>
            <StyledModal>
              <h1>{name}</h1>
              <p>{description}</p>
              <ButtonsGroup>
                <Button
                  title="Close"
                  callback={this.toggleDetailsModal}
                  black
                />
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
                <Button
                  title="Yes"
                  callback={() => this.handleOkClick(name)}
                  black
                />
              </ButtonsGroup>
            </StyledModal>
          </Modal>
        ) : null}
      </ProductTile>
    );
  }
}

export default Product;
