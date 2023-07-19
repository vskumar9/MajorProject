import React from 'react'

const AbtList = ({ tag }) => {
  return (
    <div>
      <div className='abtTag'>
            <h5>{tag.tagName}</h5>
            <p>{tag.tagDesc}</p>
        </div>
    </div>
  )
}

export default AbtList
