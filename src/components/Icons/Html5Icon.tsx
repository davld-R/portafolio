import { useState } from 'react';

interface IcoProps {
  width: string;
  height: string;
}

export default function HtmlIco({ width, height }: IcoProps) {
  const bandera = true;
  const [html, setHtml] = useState(bandera);
  const htmlColor = html ? '#E44D26' : '#222';
  const htmlColor2 = html ? '#F16529' : '#fff';

  const handleClick = () => {
    setHtml(!html);
  };

  return (
    <svg
      width={width}
      height={height}
      onClick={handleClick}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {' '}
        <path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill={htmlColor}></path>{' '}
        <path d="M26 5H16V29.5L24 27L26 5Z" fill={htmlColor2}></path>{' '}
        <path
          d="M9.5 17.5L8.5 8H24L23.5 11H11.5L12 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5H9.5Z"
          fill="white"
        ></path>{' '}
      </g>
    </svg>
  );
}