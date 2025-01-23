import React from 'react'

function Student(props) {
    
  return (
    <div>
        <h1>
            Hello {props.name} <br />
            Email : {props.email}
        </h1>
    </div>
  )
}

export default Student