import React from 'react'

const CategoryItem = ({icon, title, categoryIndex, apps, onClick}) => {
  const handleClick = (appId) => {
    onClick(categoryIndex, appId)
  }
  return (
    <div className='px-4 col-12 text-center'>
      <div className='m-auto category-container'>
        <div className='category-title text-left'>
          <div className='category-title-icon'>
            <img src={ icon } title={ title } />
          </div>
          <h1>{title}</h1>
        </div>
        {apps.map((app, index) => (
          <AppItem
            onClick={ () => { handleClick(index) } }
            name={ app.name }
            description={ app.description }
            link={ app.link } />
        ))}
      </div>
    </div>
  )
}

const AppItem = ({name, description, link, onClick}) => {
  const descriptionTurncate = () => {
    return description.substring(0, 82) + ' ...'
  }
  const handleClick = (e) => {
    onClick()
    e.preventDefault()
  }
  return (
    <div className='app-block card d-inline-block mx-1'>
      <div className="card-body py-4">
        <h4 className="card-title pt-2">{name}</h4>
        <p className="card-text">{descriptionTurncate()}</p>
        <a href='#' onClick={ (e) => { handleClick(e) } }>
          mehr
        </a>
      </div>
      <div className="card-footer text-center py-2">
        <a href={ !link ? '#' : link }> Los geht's </a>
      </div>
    </div>
  )
}

export default CategoryItem
