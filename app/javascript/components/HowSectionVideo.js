import React from 'react'
import VideoPlayer from './VideoPlayer'
const HowSectionVideo = ({children, videoId}) => {
  return (
    <VideoPlayer videoId={ videoId }>
      <div className="how-description col-lg-6 col-md-8 col-sm-12 m-auto text-center">
        <div className="col-lg-6 col-md-8 col-sm-12 m-auto">
          <h2 className="py-5">WIE GEHT <span className="color-call-to-action">WÄHLEN?</span></h2>
        </div>
        <div className="col-lg-8 col-md-10 col-sm-12 m-auto">
          <ul className="text-left">
            <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</li>
            <li>sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</li>
            <li>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.</li>
          </ul>
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
