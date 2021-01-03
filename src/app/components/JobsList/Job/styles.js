import styled, { css } from 'styled-components';
import flex from '@utils/flex';

const jobCategory = css`
  border-radius: 9999px;
  color: #fff;
  font-size: 0.7rem;
  padding: 0.4rem;
  font-weight: 700;
  margin-right: 0.7rem;
  text-transform: uppercase;
`;

export const StyledJob = styled.li`
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
  font-size: 1.1rem;
  margin-bottom: 0.8rem;
`;

export const Footer = styled.footer`
  color: hsl(180, 8%, 52%);
`;

export const Tablets = styled.ul`
  margin-left: auto;
`;
