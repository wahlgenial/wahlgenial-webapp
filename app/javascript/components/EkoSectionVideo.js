import React from 'react'
import VideoPlayer from './VideoPlayer'
import PlayButton from './PlayButton'
const ekoCoverImage = require('../images/eko-video-cover.jpg')
const EkoSectionVideo = ({children, videoId}) => {
  return (
    <VideoPlayer videoId={ videoId } coverImage = { ekoCoverImage }>
      <div className='col-lg-12 d-flex'>
        <div className="logo-container p-2">
          <img src={ require('../images/wahlgenial-logo.svg') } />
        </div>
        <div className="eko-description col-12 text-left m-auto">
          <div className="description-text pr-5">
            <h1>
              <span>WAHL</span> <br/><span className="color-call-to-action">GENIAL</span>
            </h1>
            <p className="text-left col-lg-6 p-0 mt-4 pr-5">
            Wer die Wahl hat, hat die Qual … sagt man. Dabei ist Wählen nicht nur super wichtig, sondern auch gar nicht so kompliziert. (Du hast deine eigenen Sorgen und Vorstellungen – lass nicht andere entscheiden, ob man sich darum kümmert.) Eko Fresh erklärt dir kurz was dich auf Wahl.Genial erwartet.
            </p>
          </div>
          <PlayButton />
        </div>

      </div>
    </VideoPlayer>
  )
}

EkoSectionVideo.defadivtProps = {}

EkoSectionVideo.propTypes = {}

export default EkoSectionVideo
