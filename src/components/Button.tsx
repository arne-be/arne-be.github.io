import React from 'react'

const Button = ({ styles }) => {
  return (
    <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-white outline none color-secondary ${styles}`}>
      Button
    </button>
  )
}

export default Button