import styled, { css } from 'styled-components';
import flex from '@utils/flex';

const jobCategory = css`
  border-radius: 10px;
  color: #fff;
  font-size: 0.7rem;
  padding: 0.5rem;
  font-weight: 700;
  margin-right: 0.7rem;
  text-transform: uppercase;
`;

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

export const Item = styled.li`
  ${flex.alignCenter}
  background-color: #fff;
  padding: 2rem;

  &:not(:last-child) {
    margin-bottom: 1.5rem;
  }
`;

export const Logo = styled.img`
  margin-right: 1.5rem;
`;

export const Company = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
  font-size: 0.9rem;
  margin-right: 1rem;
`;

export const New = styled.button`
  ${jobCategory}
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Featured = styled.button`
  ${jobCategory}
  background-color: ${({ theme }) => theme.colors.dark};
`;

export const Header = styled.header`
  margin-bottom: 1rem;
`;

export const Position = styled.p`
  font-weight: 700;
  color: ${({ theme }) => theme.colors.dark};
`;

export const Footer = styled.footer`
  color: hsl(180, 8%, 52%);
`;
