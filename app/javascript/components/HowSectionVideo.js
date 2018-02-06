import React from 'react'
import VideoPlayer from './VideoPlayer'
const HowSectionVideo = ({children, videoId, startTime = 0}) => {
  return (
    <VideoPlayer videoId={ videoId } startTime={ startTime }>
      <div className="how-description col-lg-6 col-md-8 col-sm-12 m-auto text-center">
        <div className="col-lg-6 col-md-8 col-sm-12 m-auto">
          <h1 className="py-5">WIE GEHT <span className="color-call-to-action">WÄHLEN?</span></h1>
        </div>
        <div className="col-lg-8 col-md-10 col-sm-12 m-auto">
          <p className="text-left">
            Erststimme, Zweitstimme und Direktmandate? Halb so wild!<br />
            Was passiert, wenn du deine Stimme abgibst und wie machst du das?<br />
            In nur zwei Minuten hast du es kapiert.
          </p>
          <div className="video-play pt-5">
            {/* <%= link_to image_tag(asset_pack_path('images/play-video.svg')), '#' %> */}
          </div>
        </div>
      </div>
    </VideoPlayer>
  )
}

HowSectionVideo.defadivtProps = {}

HowSectionVideo.propTypes = {}

export default HowSectionVideo
