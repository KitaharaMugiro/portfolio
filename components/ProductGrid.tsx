import { useRouter } from "next/router";
import React from "react";
import styled, { keyframes } from "styled-components";
import { getPath } from "../constants/utils";
import { Product } from "../contents/ProductList";

interface Props {
  products: Product[];
  onClickProduct: (product: Product) => void;
}

export default (props: Props) => {
  const renderProducts = () => {
    return props.products.map(product => {
      return (
        <FeedView
          key={product.slug}
          onClick={() => props.onClickProduct(product)}
        >
          <FeedImage src={getPath(product.image || "")} />
          <FeedTitleFrame>
            <FeedTitle>{product.name}</FeedTitle>
          </FeedTitleFrame>
        </FeedView>
      );
    });
  };

  return <Container>{renderProducts()}</Container>;
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const FeedView = styled.div`
  width: 90vmin;
  height: 70vmin;
  max-width: 350px;
  max-height: 220px;
  background-color: black;
  overflow: hidden;
  position: relative;
  -webkit-border-radius: 10px 10px 10px 10px;
  border-radius: 10px 10px 10px 10px;
  filter: drop-shadow(0px 0px 8px rgba(0, 0, 0, 0.3));
  cursor: pointer;
  margin: 10px;

  animation-name: ${slideUp};
  animation-duration: 0.4s;
`;

const FeedImage = styled.img`
  width: 100%;
  object-fit: cover;
  z-index: 0;
`;

const FeedTitleFrame = styled.div`
  position: absolute;
  text-align: center;
  height: 100%;
  right: 0%;
  left: 0%;
  bottom: 0%;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0) 0%,
    rgba(150, 150, 150, 0) 53%,
    rgba(15, 15, 15, 0.85) 100%
  );
`;

const FeedTitle = styled.h2`
  color: white;
  font-size: 18px;
  position: absolute;
  bottom: 1%;
  left: 10%;
  right: 10%;
  z-index: 1;
`;
