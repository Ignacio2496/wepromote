import React from "react";

type Props = {
  width: string;
  height: string;
  className?: string;
};

function UploadIcon({ height, width, className }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={height}
      height={width}
      className={className}
      viewBox="0 0 24 24"
    >
      <g>
        <g
          fill="none"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        >
          <path d="M3 12.3v7a2 2 0 002 2h14a2 2 0 002-2v-7"></path>
          <path d="M7.9 6.7L12 2.7 16.1 6.7" data-name="Right"></path>
          <path d="M12 16.3L12 4.8"></path>
        </g>
      </g>
    </svg>
  );
}

export default UploadIcon;
