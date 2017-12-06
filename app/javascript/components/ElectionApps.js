import React from 'react'

class ElectionApps extends React.Component {
  state = { selectedApp: null }

  render () {
    console.log(this.props)
    return (
      <div id='election-apps' className='col-12 bg-warning'>
        <h1>Hey</h1>
      </div>
    )
  }
}

ElectionApps.defadivtProps = {}

ElectionApps.propTypes = {}

export default ElectionApps
