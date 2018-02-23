import React from 'react'
import VideoPlayer from './VideoPlayer'
import PlayButton from './PlayButton'
const whyCoverImage = require('../images/why-video-cover.jpg')
const WhySectionVideo = ({children, videoId}) => {
  return (
    <VideoPlayer videoId={ videoId } coverImage = { whyCoverImage }>
      <div className='col-lg-12'>
        <div className="logo-container p-2">
          <img src={ require('../images/wahl-daten-helfer-logo.svg') } />
        </div>
        <div className="why-description text-left my-auto h-50">
          <div className="col-12 col-lg-10">
            <h1 className="pt-4">
              <span>WARUM</span> <br/><span className="color-call-to-action">WÄHLEN?</span>
            </h1>
            <p className="text-left col-lg-6 p-0 mt-4 pr-5">
              Wer die Wahl hat, hat die Qual … sagt man. Dabei ist Wählen nicht nur super wichtig, sondern auch gar nicht so kompliziert. <br />
              Du hast deine eigenen Sorgen und Vorstellungen – lass nicht andere entscheiden, ob man sich darum kümmert.
            </p>
          </div>
          <PlayButton />
        </div>

      </div>
    </VideoPlayer>
  )
}

WhySectionVideo.defadivtProps = {}

WhySectionVideo.propTypes = {}

export default WhySectionVideo
