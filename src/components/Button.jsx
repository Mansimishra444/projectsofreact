import React from 'react'

function Button({children, type="button", bgcolor="blue-500", color="white",
    textColor='text-white ',classname='', ...props
}) {
  return (
    <button type={type} className={`bg-${bgcolor} text-${color} ${textColor} ${classname}`} {...props}>
      {children}
    </button>
  )
}

export default Button