import { forwardRef } from 'react';

export default 'span';
const SvgrMock = forwardRef((props, ref) => <span ref={ref} {...props} />);
export const ReactComponent = SvgrMock;
