import React from "react";

type Props = {
  width: string;
  height: string;
  className?: string;
};
function HomeIcon({ className, height, width }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      className={className}
    >
      <path d="M12 2.1L1 12h3v9h6v-7h4v7h6v-9h3L12 2.1z"></path>
    </svg>
  );
}

export default HomeIcon;
