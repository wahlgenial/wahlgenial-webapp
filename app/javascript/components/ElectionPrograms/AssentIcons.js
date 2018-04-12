import React from 'react'

export const Positive = () => (
  <div className='positive-assent'>
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="33" height="30" viewBox="0 0 33 30">
      <defs>
        <path id="a" d="M0 0h33v30H0z"/>
      </defs>
      <g>
        <mask id="b">
          <use xlinkHref="#a"/>
        </mask>
        <path d="M29.834.41c-8.78 6.315-16.12 14.044-21.772 23.057a80.926 80.926 0 0 1-3.666-8.078C3.408 12.837-.85 13.942.15 16.526a89.798 89.798 0 0 0 5.924 12.431c.794 1.378 3.014 1.403 3.801 0 5.495-9.782 12.953-18.218 22.18-24.856 2.252-1.619.059-5.333-2.222-3.691" mask="url(#b)"/>
      </g>
    </svg>
  </div>
)

export const Negative = () => (
  <div className='negative-assent'>
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="23" height="28" viewBox="0 0 23 28">
      <defs>
        <path id="a" d="M0 .572h22.922V28H0z"/>
      </defs>
      <g>
        <path d="M4.204 26.978c4.722-7.716 12.095-14.344 18.204-21.105C24.306 3.772 21.2.577 19.284 2.698 12.934 9.727 5.248 16.621.33 24.658c-1.477 2.413 2.394 4.74 3.874 2.32"/>
        <g>
          <mask id="b">
            <use xlinkHref="#a"/>
          </mask>
          <path d="M.601 4.247a169.852 169.852 0 0 1 18.061 22.724c1.551 2.334 5.465.288 3.896-2.071-5.574-8.391-11.785-16.297-18.72-23.634-1.945-2.06-5.184.922-3.237 2.981" mask="url(#b)"/>
        </g>
      </g>
    </svg>
  </div>
)

export const Neutral = () => (
  <div className='neutral-assent'>
    <svg version="1.1" id="Ebene_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 30.2 28" xmlSpace="preserve">
      <g>
        <g>
          <defs>
            <filter id="Adobe_OpacityMaskFilter" filterUnits="userSpaceOnUse" x="0.7" y="11.8" width="28.9" height="5.1">
              <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"/>
            </filter>
          </defs>
          <mask maskUnits="userSpaceOnUse" x="0.7" y="11.8" width="28.9" height="5.1" id="b_2_">
            <g class="st0">
              <path id="a_2_" class="st1" d="M-0.3,14.8L14.1-3.1l21.4,17.2L21.1,32L-0.3,14.8z"/>
            </g>
          </mask>
          <path class="st2" d="M3,16.6c8-0.7,16.6-0.5,24,0.2c2.8,0.3,3.7-4.1,0.8-4.3c-8-0.8-16.9-1-25.1-0.2C-0.2,12.5,0.1,16.9,3,16.6"/>
        </g>
      </g>
    </svg>
  </div>
)
