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

  handleOkClick = (id) => {
    this.props.removeProduct(id);
    this.toggleRemovalModal();
  };

  handleCancelClick = () => {
    this.toggleRemovalModal();
  };

  render() {
    const { id, name, description, category } = this.props;
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
            <Button title="Details" clickHandler={this.toggleDetailsModal} />
            <Button
              title="Remove"
              clickHandler={this.toggleRemovalModal}
              black
            />
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
                  clickHandler={this.toggleDetailsModal}
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
                <Button title="Cancel" clickHandler={this.handleCancelClick} />
                <Button
                  title="Yes"
                  clickHandler={() => this.handleOkClick(id)}
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
