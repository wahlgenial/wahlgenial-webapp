import React from 'react'

class Glossary extends React.Component {
  state = { selectedTopicIndex: 0 }
  render () {
    const {lettersCollection} = this.props
    return (
      <div className='col-12 bg-warning'>
        <h3>Hey</h3>
        <ul>
          {console.log(typeof lettersCollection)}
          {console.log(Array.isArray(lettersCollection))}
          {lettersCollection.map((letter) => (
            <a className='px-1' href='#'>{letter.letter}({letter.count})</a>
          ))}
        </ul>
      </div>
    )
  }
}

Glossary.defaultProps = {}

Glossary.propTypes = {}

export default Glossary
