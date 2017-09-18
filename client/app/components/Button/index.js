import styled from 'styled-components';

const Button = styled.button`
  color: white;
  padding:10px;
  &:hover {
    background-color:darkorange;
  }
  background-color:orange;
  &:hover{
    cursor:pointer;
  }
  padding: 1 rem;
  margin: 0.5rem 1rem;
`;

export default Button;