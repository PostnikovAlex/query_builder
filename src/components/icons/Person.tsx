import React from 'react'

const Person = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="none">
      <g clipPath="url(#a)">
        <path
          fill="#fff"
          d="M18.999 19.5c3.499 0 6.333-2.834 6.333-6.334 0-3.499-2.834-6.333-6.333-6.333a6.332 6.332 0 0 0-6.334 6.333c0 3.5 2.835 6.334 6.334 6.334Zm0 3.166c-4.228 0-12.667 2.122-12.667 6.334v1.583c0 .87.713 1.583 1.583 1.583h22.167c.87 0 1.583-.712 1.583-1.583V29c0-4.212-8.439-6.334-12.666-6.334Z"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 .5h38v38H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default Person
