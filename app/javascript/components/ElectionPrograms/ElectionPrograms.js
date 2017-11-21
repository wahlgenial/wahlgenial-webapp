import React from 'react'
import PartiesBoard from './PartiesBoard'
import TopicsBoard from './TopicsBoard'
const ElectionPrograms = ({election_programs}) => (
  <div className="container bg-primary p-3">
    <div className="blockquote mx-auto  my-2 w-50 text-white text-center"></div>
    <h3>This is the election-programs component</h3>
    {console.log(election_programs)}
    <PartiesBoard />
    <TopicsBoard />
  </div>
)

ElectionPrograms.defaultProps = {}

ElectionPrograms.propTypes = {}

export default ElectionPrograms
