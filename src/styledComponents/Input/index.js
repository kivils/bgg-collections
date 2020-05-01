import styled from 'styled-components/macro';

const Input = styled.input`
  box-sizing: border-box;
  padding: .5rem 1rem;
  border: 1px solid #666;
  border-radius: 3px;
  color: #000;
  width: 100%;
  margin-bottom: 1rem;
  font-size: 0.8rem;
  
  &:hover {
    border-color: #999;
  }
`;

export default Input;