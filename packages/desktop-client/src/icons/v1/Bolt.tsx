import * as React from 'react';
import type { SVGProps } from 'react';
export const SvgBolt = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    style={{
      color: 'inherit',
      ...props.style,
    }}
  >
    <path d="M13 8V0L8.11 5.87 3 12h4v8L17 8h-4z" fill="currentColor" />
  </svg>
);
