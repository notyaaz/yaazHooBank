import React from 'react'

export default function Button({styles}) {
  return (
    <button className={`py-4 px-6 bg-blue-gradient font-poppins outline-none text-primary font-medium text-[18px] ${styles}`}>
      Get Started
    </button>
  )
}
