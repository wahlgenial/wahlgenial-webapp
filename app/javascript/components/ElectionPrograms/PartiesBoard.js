import React from 'react'
import Button from '../Button'
const clickEvent = _ => {
  alert('Party click event')
}
const PartiesBoard = props => (
  <div className="container bg-success p-3">
    <h4>Topics</h4>
    <div className="d-flex justify-content-between">
      <Button title='CDU' onClick= { () => { clickEvent() } } />
      <Button title='GRUNEN' onClick= { () => { clickEvent() } } />
      <Button title='FDP' onClick= { () => { clickEvent() } } />
      <Button title='SPD' onClick= { () => { clickEvent() } } />
      <Button title='DIE LINKE' onClick= { () => { clickEvent() } } />
      <Button title='AFD' onClick= { () => { clickEvent() } } />
    </div>
  </div>
)

PartiesBoard.defaultProps = {}

PartiesBoard.propTypes = {}

export default PartiesBoard
