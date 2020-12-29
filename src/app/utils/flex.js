import { css } from 'styled-components';

const alignCenter = css`
  display: flex;
  align-items: center;
`;

const spaceBetween = css`
  ${alignCenter};
  justify-content: space-between;
`;

const center = css`
  ${alignCenter};
  justify-content: center;
`;

const column = css`
  display: flex;
  flex-direction: column;
`;

const flex = { alignCenter, spaceBetween, center, column };

export default flex;
