import styled from "styled-components";

export const Button = styled.button`
    
  background-color: ${props => props.theme === "primary" ? "#0d54a0ff" : "#0d54a0ff"};
  color: white;
  border: ${props => props.theme === "primary" ? "none" : "1px solid #ffffffff"};
  border-radius: 20px;
  padding: 12px 16px;
  margin-bottom: 5px;
  gap: 8px;
  font-size: 16px;
  cursor: pointer;

  &:hover { transform: scale(1.05); background-color: #2c9126ff;}
    
  &:active {
      transform: scale(0.95); background-color: #dfc205ff;
    }
  
`;

