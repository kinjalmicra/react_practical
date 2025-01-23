import React, { useState } from 'react'

export default function Profile() {

    const [login, setLogin] = useState(0)
  return (
    <div>
        {
            login===1?
            <h1>Welcome user 1</h1>
            :login===2?<h1>Welcome user 2</h1>
            : <h1>welcome user 3</h1>
        }
    </div>
  )
}
