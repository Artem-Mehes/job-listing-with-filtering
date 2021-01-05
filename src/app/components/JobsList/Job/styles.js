import styled, { css } from 'styled-components';
import flex from '@utils/flex';
import tablet from '@utils/tablet';

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
  box-shadow: 9px 9px 15px -8px ${({ theme }) => theme.colors.shadow};
  border-radius: 7px;
  position: relative;

  ${({ isBorder }) =>
    isBorder &&
    css`
      &::before {
        content: '';
        background-color: ${({ theme }) => theme.colors.primary};
        height: 100%;
        width: 5px;
        position: absolute;
        border-top-left-radius: 16px;
        border-bottom-left-radius: 16px;
        left: 0;
      }
    `}

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
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const FooterList = styled.ul`
  ${flex.alignCenter}
  color: hsl(180, 8%, 52%);
`;

export const FooterListItem = styled.li`
  &:not(:first-child) {
    margin-left: 0.8rem;

    &::before {
      content: '•';
      margin-right: 0.8rem;
    }
  }
`;

export const Tablets = styled.div`
  ${flex.alignCenter}
  margin-left: auto;
`;

export const JobTablet = styled.button`
  ${tablet}

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: #fff;
  }

  &:not(:last-child) {
    margin-right: 2rem;
  }
`;
