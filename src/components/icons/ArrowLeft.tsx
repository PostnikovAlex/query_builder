import React from 'react'

const ArrowLeft = ({ ...otherProps }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" {...otherProps}>
      <path
        fillRule="evenodd"
        d="M16.875 9a.563.563 0 0 1-.563.562H3.046l3.54 3.54a.563.563 0 0 1-.796.796l-4.5-4.5a.563.563 0 0 1 0-.796l4.5-4.5a.563.563 0 0 1 .797.796l-3.54 3.54h13.267a.562.562 0 0 1 .562.562Z"
        clipRule="evenodd"
      />
    </svg>
  )
}

export default ArrowLeft