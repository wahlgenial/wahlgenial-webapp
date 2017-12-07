import React from 'react'

const CategoryItem = ({title, apps}) => {
  return (
    <div className='px-4'>
      <h1>{title}</h1>
      <span className='h-100'>
        {apps.map((app, index) => (
          <AppItem
            name={ app.name }
            description={ app.description } />
        ))}
      </span>
    </div>
  )
}

const AppItem = ({name, description}) => {
  const descriptionTurncate = () => {
    return description.substring(0, 82) + ' ...'
  }
  return (
    <div className='app-block card d-inline-block mx-1'>
      <div className="card-body py-4">
        <h4 className="card-title pt-2">{name}</h4>
        <p className="card-text">{descriptionTurncate()}</p>
        <a href="#">mehr</a>
      </div>
      <div className="card-footer text-center">
        <a href="#"> Los geht's </a>
      </div>
    </div>
  )
}

export default CategoryItem
