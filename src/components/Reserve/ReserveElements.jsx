import styled from 'styled-components';

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 20px;
  background-color: #150f0f;
`;
export const DivContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 50vw;
  @media screen and (max-width: 650px) {
    display: inline-block;
    width: 90vw;
  }
`;

export const FormInput = styled.input`
  width: 80%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  box-shadow: 3px 5px #e9ba23;
  border-radius: 4px;
`;

export const FormLabel = styled.label`
  color: #fff;
  width: 20%;
  padding: 12px 20px;
  margin: 8px 8px;
  box-sizing: border-box;
  border-radius: 4px;
  box-shadow: 3px 5px #e9ba23;
  font-size: 1.2rem;
  font-weight: bold;
  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;

export const FormButton = styled.button`
  width: 80%;
  background-color: #e31837;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: bold;
  &:hover {
    background-color: #ffff;
    color: black;
  }
`;
