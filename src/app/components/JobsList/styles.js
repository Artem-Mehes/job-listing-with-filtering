import styled from 'styled-components';
import flex from '@utils/flex';
import tablet from '@utils/tablet';

export const Wrapper = styled.div`
  width: 1100px;
  margin: 0 auto;

  @media (max-width: 1250px) {
    width: 100%;
  }
`;

export const Header = styled.header`
  ${flex.spaceBetween}
  background-color: #fff;
  padding: 1.2rem 2rem;
  box-shadow: 9px 9px 15px -8px ${({ theme }) => theme.colors.shadow};
  border-radius: 7px;
  position: relative;
  width: 100%;
  top: -110px;
`;

export const FiltersList = styled.ul`
  ${flex.alignCenter}
  flex-wrap: wrap;
  row-gap: 1rem;
  flex: 1;
`;

export const FilterItem = styled.li`
  ${flex.alignCenter}

  &:not(:last-child) {
    margin-right: 2rem;
  }
`;

export const FilterText = styled.span`
  ${tablet}

  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`;

export const ClearFilters = styled.button`
  color: ${({ theme }) => theme.colors.primary};

  &:hover {
    text-decoration: underline;
  }
`;

export const RemoveFilter = styled.button`
  ${flex.center}
  position: relative;
  min-width: 34px;
  height: 34px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.dark};
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    height: 15px;
    width: 3px;
    background-color: #fff;
  }

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }
`;
