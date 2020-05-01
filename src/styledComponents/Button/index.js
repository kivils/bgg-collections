import styled from 'styled-components/macro';

const Button = styled.button`
  box-sizing: border-box;
  padding: .5rem 1rem;
  background: linear-gradient(to bottom, #6371c7, #5563c1);
  border: 1px solid #3f4eae;
  border-radius: 3px;
  color: #fff;
  font-weight: 700;
  width: 100%;
  margin-bottom: 1rem;
  font-size: 0.8rem;
  cursor: pointer;
  
  &:hover {
    opacity: .8;
  }
`;

export default Button;