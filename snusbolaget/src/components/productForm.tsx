import React from "react";
import styled from "styled-components";

const ProductForm = ({ ...props }) => {
  const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    padding: 10px;
  `;
  return <StyledForm {...props} className="flex flex-col mb-10 border border-gray-300 p-10" />;
};

export default ProductForm;
