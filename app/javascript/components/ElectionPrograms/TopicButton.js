import React from 'react'
import Button from '../Button'

const TopicsButton = ({title, onPress, active}) => (
  <div className="bg-error p-3">
    <Button
      title={ title }
      onClick={ () => { onPress() } }
      active={ active } />
  </div>
)

TopicsButton.defaultProps = {}

TopicsButton.propTypes = {}

export default TopicsButton
