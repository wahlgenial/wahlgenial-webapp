import React from 'react'
import VideoPlayer from './VideoPlayer'
import PlayButton from './PlayButton'
const howCoverImage = require('../images/how-video-cover.jpg')
const HowSectionVideo = ({children, videoId, startTime = 0}) => {
  return (
    <VideoPlayer videoId={ videoId } startTime={ startTime } coverImage = { howCoverImage }>
      <div className="how-description col-lg-6 col-md-8 col-sm-12 d-flex text-center">
        <div className="col-lg-6 col-md-8 col-sm-12 m-auto">
          <h1 className="py-5">WIE GEHT <span className="color-call-to-action">WÄHLEN?</span></h1>
        </div>
        <div className="col-md-10 col-sm-12 m-auto">
          Erststimme, Zweitstimme und Direktmandate? Halb so wild!<br />
          Was passiert, wenn du deine Stimme abgibst und wie machst du das?<br />
          In nur zwei Minuten hast du es kapiert.
        </div>
        <PlayButton />
      </div>
    </VideoPlayer>
  )
}

HowSectionVideo.defadivtProps = {}

HowSectionVideo.propTypes = {}

export default HowSectionVideo
