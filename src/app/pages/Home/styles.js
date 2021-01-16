import styled from 'styled-components';

export const Main = styled.main`
  background-color: ${({ theme }) => theme.colors.mainBg};
  flex: 1;
  padding: 5rem 4rem;

  @media (max-width: 550px) {
    padding: 5rem 1rem;
  }
`;
