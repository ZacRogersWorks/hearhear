import React from 'react'

const Example = (title, data, handleClick) => {
  return (
    <button data-info={data} onClick={handleClick}>{title}</button>
  )
}

export default Example