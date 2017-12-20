import React from 'react'
import Glossary from '../components/Glossary'
const glossaryFixtures = require('../fixtures/glossary')
const GlossaryStory = () => {
  return (
    <div className="col-lg-12 h-100 mt-3">
      <Glossary lettersCollection={ glossaryFixtures.lettersCollection } />
    </div>
  )
}

export default GlossaryStory
