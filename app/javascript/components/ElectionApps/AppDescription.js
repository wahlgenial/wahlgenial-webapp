import React from 'react'

const AppDescription = ({appName}) => {
  return (
    <div className='px-4 col-12 text-center bg-danger'>
      <a name='app-description'></a>
      <h1>{appName}</h1>
    </div>
  )
}

export default AppDescription
