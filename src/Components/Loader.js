import React from 'react'

function Loader() {
  return (
    <div className="loader">
    <svg
      className="circular-loader"
      viewBox="0 0 50 50"
      width="45"
      height="45"
    >
      <circle
        className="loader-path"
        cx="25"
        cy="25"
        r="15"
        fill="none"
        stroke="white"
        strokeWidth="2"
      />
    </svg>
    <h1>Loading...</h1>
  </div>
 
  )
}

export default Loader
