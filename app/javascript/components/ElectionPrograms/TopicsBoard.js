import React from 'react'
import Button from '../Button'
const clickEvent = _ => {
  alert('Topic click event')
}
const TopicsBoard = props => (
  <div className="container bg-error p-3">
    <h4>Parties</h4>
    <div className="d-flex justify-content-between">
      <Button title='BILDUNG' onClick= { () => { clickEvent() } } />
      <Button title='ARBEIT' onClick= { () => { clickEvent() } } />
      <Button title='ASYL' onClick= { () => { clickEvent() } } />
      <Button title='DIGITAL' onClick= { () => { clickEvent() } } />
      <Button title='UMWELT' onClick= { () => { clickEvent() } } />
    </div>
  </div>
)

TopicsBoard.defaultProps = {}

TopicsBoard.propTypes = {}

export default TopicsBoard
