import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 20px;
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1.5rem;
`;

export const ContainerUsers = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
gap: 20px;

@media (max-width:610px) {
  
  grid-template-columns: 1fr;
}

`

export const CardUsers = styled.div`
background-color: beige;
padding: 17px;
border-radius: 30px;
display: flex;
justify-content: space-between; 
align-items: center;
margin-bottom: 15px;  
gap: 15px;

h2 {
  color: black;
  font-size: 24px;
  margin-bottom: 3px;
  text-transform: capitalize;
}
p {
  color: black;
  font-size: 12px;
  font-weight: 200;
}
`
export const AvatarUser = styled.img`
  width: 80px;`

export const TrashIcon = styled.img`
cursor: pointer;
padding-left: 20px;
&:hover {
  scale: 1.2;
}
&:active {
  opacity: 0.7;
}
`

export const Img = styled.img`
  width: 600px;
  height: auto;
  margin-bottom: 1.5rem;
  @media (max-width:650px) {
    width: 100%;
  }
`;

 export const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 12px 16px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;

   
    
  }
`;
