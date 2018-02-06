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
            <p className="text-left col-lg-6 pt-4 why-text">
              Wer die Wahl hat, hat die Qual … sagt man. Dabei ist Wählen nicht nur super wichtig, sondern auch gar nicht so kompliziert. <br />
              Du hast deine eigenen Sorgen und Vorstellungen – lass nicht <br />andere entscheiden, ob man sich darum kümmert.
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
