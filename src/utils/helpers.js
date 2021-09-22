import { mediaQueries } from '@utils/rwd';

const isBrowser =  (typeof window !== 'undefined');

export const isBrowser = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

export {
  isBrowser,
  isMobile,
};
