import React from 'react'

const Display = (props) => {
  const details = props.details


    const renderDetails = details.map((detail)=>{
    return <p key={detail.id}> {detail.name}</p>
  })
  return (
     <div className="display">{renderDetails}</div>
  )
}

export default Display