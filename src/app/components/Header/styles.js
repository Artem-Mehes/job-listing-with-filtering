import styled from 'styled-components';
import headerBg from '@assets/images/bg-header-desktop.svg';

export const StyledHeader = styled.header`
  background: url(${headerBg}) center center/cover no-repeat
    ${({ theme }) => theme.colors.primary};
  min-height: 218px;
`;
