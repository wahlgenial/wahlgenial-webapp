import React from 'react'
import Youtube from 'react-youtube'
const TermItem = ({title, description, image, imageThumb, videoID, onClick, selected}) => {
  const playerParameters = _ => {
    return ({
      width: '100%',
      playerVars: {
        autoplay: 0,
        showinfo: 0,
        rel: 0,
        modestbranding: 0
      }
    })
  }
  return (
    <div
      className={
        'term-item text-left p-0 my-4' +
        (videoID ? ' term-video' : '') +
        (selected ? ' selected' : '')
      }
      onClick={ onClick }>
      {!selected && (
        <p className="term-title unselectable font-weight-bold px-4 py-3">{title}</p>
      )}
      {selected && (
        <div className="p-0 m-0">
          {(imageThumb && !videoID) && (<img className="card-img-top" src={ imageThumb } alt={ title } />)}
          {videoID && (
            <Youtube
              className='p-0 m-0'
              id={ videoID }
              videoId={ videoID }
              opts={ playerParameters() }/>
          )}
          <div className="card-block pt-3 pb-4">
            <p className="card-title font-weight-bold unselectable px-4 pt-3">{title}</p>
            <div className="card-text px-4" dangerouslySetInnerHTML={ { __html: description } } />
          </div>
        </div>)}
    </div>
  )
}

TermItem.defaultProps = {}
TermItem.propTypes = {}
export default TermItem
