import * as React from 'react';
import type { SVGProps } from 'react';
export const SvgLocationRestroom = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    style={{
      color: 'inherit',
      ...props.style,
    }}
  >
    <path
      d="M12 16H9l2-4.5V9c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v2.5l2 4.5h-3v4h-4v-4zm-5-3h2V9a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2v4h2v7h4v-7zM5 6a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm9 0a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"
      fill="currentColor"
    />
  </svg>
);
