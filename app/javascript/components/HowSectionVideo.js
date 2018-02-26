import React from 'react'
import VideoPlayer from './VideoPlayer'
import PlayButton from './PlayButton'
const howCoverImage = require('../images/how-video-cover.jpg')
const HowSectionVideo = ({children, videoId, startTime = 0}) => {
  return (
    <VideoPlayer videoId={ videoId } startTime={ startTime } coverImage = { howCoverImage }>
      <div className="col-lg-12 d-flex text-center">
        <div className="how-description d-flex flex-column col-lg-6 col-md-8 col-sm-12 m-auto">
          <h1>WIE GEHT <span className="color-call-to-action">WÄHLEN?</span></h1>
          <p>
            Erststimme, Zweitstimme und Direktmandate? Halb so wild!<br />
            Was passiert, wenn du deine Stimme abgibst und wie machst du das?<br />
            In nur zwei Minuten hast du es kapiert.
          </p>
          <PlayButton />
        </div>
      </div>
    </VideoPlayer>
  )
}

HowSectionVideo.defadivtProps = {}

HowSectionVideo.propTypes = {}

export default HowSectionVideo
