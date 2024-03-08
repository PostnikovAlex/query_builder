import React from 'react'

const Pen = ({color = 'text-accent', width = '16', height = '16'}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 16 16" fill="none">
        <g clipPath="url(#clip0_8666_1255)">
            <path d="M11 1.55277C11.1751 1.37768 11.383 1.23878 11.6117 1.14402C11.8405 1.04926 12.0857 1.00049 12.3333 1.00049C12.581 1.00049 12.8262 1.04926 13.0549 1.14402C13.2837 1.23878 13.4916 1.37768 13.6667 1.55277C13.8418 1.72787 13.9807 1.93574 14.0754 2.16451C14.1702 2.39329 14.219 2.63848 14.219 2.88611C14.219 3.13373 14.1702 3.37893 14.0754 3.6077C13.9807 3.83647 13.8418 4.04434 13.6667 4.21944L4.66667 13.2194L1 14.2194L2 10.5528L11 1.55277Z" stroke={`${color}`} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
        <defs>
            <clipPath id="clip0_8666_1255">
                <rect width="16" height="16" fill="white" transform="translate(0 0.000488281)"/>
            </clipPath>
        </defs>
    </svg>
  )
}

export default Pen


