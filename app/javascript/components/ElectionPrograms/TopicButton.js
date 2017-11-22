import React from 'react'
import Button from '../Button'

const TopicsButton = ({title, onPress}) => (
  <div className="bg-error p-3">
    <Button title={ title } onClick={ () => { onPress() } } />
  </div>
)

TopicsButton.defaultProps = {}

TopicsButton.propTypes = {}

export default TopicsButton
