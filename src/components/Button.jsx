import React, { useState } from 'react'




const Button = () => {
  const [text, setText ] = useState('Like')
  return (
    <button className = 'btn btn-primary' onClick={() => {setText(':)')}}>{text}</button>
  )
}

export default Button
