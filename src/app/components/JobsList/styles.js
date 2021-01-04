import styled, { css } from 'styled-components';
import flex from '@utils/flex';

const headerBtn = css`
  border: 2px solid;
  border-radius: 9999px;
  padding: 0.7rem 1rem;
`;

export const Wrapper = styled.div`
  width: 60%;
  min-width: 700px;
  margin: 0 auto;
`;

export const Header = styled.header`
  ${flex.spaceBetween}
  margin-bottom: 2rem;
  min-height: 40px;
`;

export const FiltersHeading = styled.p`
  margin-right: 2rem;
  font-size: 1.6rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.dark};
`;

export const FiltersList = styled.ul`
  ${flex.alignCenter}
  flex: 1;
`;

export const Filter = styled.li`
  ${flex.alignCenter}
  ${headerBtn}
  border-color: ${({ theme }) => theme.colors.primary};

  &:not(:last-child) {
    margin-right: 1rem;
  }
`;

export const ClearFilters = styled.button`
  ${headerBtn}
  border-color: ${({ theme }) => theme.colors.clearBtn};
`;

export const RemoveFilter = styled.button`
  position: relative;
  width: 20px;
  height: 15px;
  ${flex.alignCenter}

  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 15px;
    height: 15px;
    width: 2px;
    background-color: red;
  }

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }
`;
