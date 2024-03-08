import React from 'react'

const Hint = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none">
      <g clipPath="url(#a)">
        <path
          stroke="#B5234D"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M10.001 9.584v4.167m0-7.492.009-.009M10 18.334a8.333 8.333 0 1 0 0-16.667 8.333 8.333 0 1 0 0 16.667Z"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h20v20H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default Hint
