import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #ffffffff;
`;

export const Title = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;

  margin-bottom: 2rem;
  
  @media (max-width: 500px) {
    font-size: 100%;
  }
`;
export const TopBackground = styled.div`
  width: 100%;
  height: auto;
  background-color: #ffffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.1rem;
`;

export const Img = styled.img`
   display: block;
  max-width: 100%;
  width: 600px;
  height: auto;

`;


export const Form = styled.form`
  display: flex;
  flex-direction: column;
  background: white;
  padding: 2rem;
  border-radius: 8px;
  
`;

export const ContainerInputs = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;

  div {
    margin-bottom: 1rem;
  }
`;

export const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;
export const InputLabel = styled.label`
  font-size: 10px;
  margin-right: 10px;
  font-weight: bold;
  color: #000000ff;

`;
export const FeedBack = styled.div`
min-height: 20px;
  text-align: center;

  p {
    
    font-size: 14px;
    margin-bottom: 10px;
  }
  
`;