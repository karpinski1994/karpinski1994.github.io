import styled from "styled-components";

export const StyledModal = styled.div`
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

export const ButtonsGroup = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.column ? "column" : "row")};
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

export const Image = styled.img`
  width: auto;
  max-height: 70%;
  margin-top: 20px;
  margin: 15px;
`;

export const Name = styled.div`
  font-weight: bold;
  font-size: 16px;
`;

export const StyledCategory = styled.div`
  font-size: 13px;
`;
