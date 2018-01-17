import React from 'react'
import VideoPlayer from './VideoPlayer'
const WhySectionVideo = ({children, videoId}) => {
  return (
    <VideoPlayer videoId={ videoId }>
      <div className='col-lg-12'>
        <div className="logo-container p-2 h-25">
          {/* <%= link_to image_tag(asset_pack_path('images/wahl-daten-helfer-logo.svg')), :root %> */}
        </div>
        <div className="why-description pl-5 p-5 text-left my-auto h-50">
          <div className="col-12 col-lg-8">
            <h1 className="pt-5">
              <span>WARUM</span> <br/><span className="color-call-to-action">WÄHLEN?</span>
            </h1>
            <p className="text-left col-lg-6 pt-4">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
            </p>
          </div>
        </div>

      </div>
    </VideoPlayer>
  )
}

WhySectionVideo.defadivtProps = {}

WhySectionVideo.propTypes = {}

export default WhySectionVideo
