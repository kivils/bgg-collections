import styled, { css } from 'styled-components/macro';

const HeaderCommon = css`
  color: #3f4eae;
  font-weight: 700;
  margin: 0 0 1rem;
  padding: 0;
  text-align: ${props => props.isCentered ? "center" : null};
`;

const Header1 = styled.h1`
  ${HeaderCommon};
  font-size: 2rem;
  line-height: 2.6rem;
`;

const Header2 = styled.h2`
  ${HeaderCommon};
  font-size: 1.75rem;
  line-height: 2.2rem;
`;

const Header3 = styled.h3`
  ${HeaderCommon};
  font-size: 1.5rem;
  line-height: 2rem;
`;

export { Header1, Header2, Header3 };
