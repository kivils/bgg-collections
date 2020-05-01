import styled from 'styled-components/macro';

const Card = styled.div`
  box-sizing: border-box;
  padding: 1rem;
  background: #fff;
  border: 1px solid #666;
  border-radius: 3px;
  color: #666;
  width: 100%;
  max-width: ${props => props.isStandalone ? "500px" : "initial"};
  margin-right: ${props => props.isStandalone ? "auto" : "0"};
  margin-left: ${props => props.isStandalone ? "auto" : "0"};
  font-size: 0.8rem;
`;

export default Card;