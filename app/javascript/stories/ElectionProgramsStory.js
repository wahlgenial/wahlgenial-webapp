import React from 'react'
import ElectionPrograms from '../components/ElectionPrograms'
const electionProgramsFixtures = require('../fixtures/election_programs')
const ElectionProgramsStory = () => {
  return (
    <div className="col-12">
      <div className="col-lg-6 col-md-12 h-100 no-gutters p-0 mx-auto">
        <ElectionPrograms topics={ electionProgramsFixtures.topics } />
      </div>
    </div>
  )
}

export default ElectionProgramsStory
