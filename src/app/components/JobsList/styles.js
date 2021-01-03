import styled from 'styled-components';

export const Main = styled.main`
  background-color: ${({ theme }) => theme.colors.mainBg};
  flex: 1;
  padding: 2rem;
`;

export const List = styled.ul`
  width: 60%;
  min-width: 700px;
  margin: 0 auto;
`;
