import { css } from 'styled-components';

const tablet = css`
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.filterTabletsBg};
  padding: 0.7rem;
  font-size: 0.9rem;
  font-weight: 700;
  border-radius: 4px;
`;

export default tablet;
