import React from 'react'
import LetterItem from './Glossary/LetterItem'
import CallToActionGhost from './CallToActionGhost'
import TermsList, {TermsEmpty} from './Glossary/TermsList'
class Glossary extends React.Component {
  constructor (props) {
    super(props)
    this.handleSelectTerm = this.handleSelectTerm.bind(this)
  }

  state = {
    selectedLetter: null,
    selectedTermIndex: null
  }
  handleSelectLetter (letter) {
    const {selectedLetter} = this.state
    if (selectedLetter !== letter) this.setState({selectedLetter: letter, selectedTermIndex: null})
  }
  handleSelectTerm (index) {
    this.setState({selectedTermIndex: index})
  }
  filterLetter (letter) {
    return this.props.lettersCollection.filter((letterObject) => {
      return (letterObject.letter === letter)
    })[0]
  }
  render () {
    const {lettersCollection} = this.props
    const {selectedLetter, selectedTermIndex} = this.state
    return (
      <div className="container-fluid m-0 p-0">
        <div className="letters-board w-100 d-flex flex-wrap justify-content-center">
          {lettersCollection.map((letter, index) => (
            <LetterItem
              key={ index }
              letter={ letter.letter }
              count={ letter.count }
              onClick = { () => { this.handleSelectLetter(letter.letter) } }
              active={ letter.letter === selectedLetter } />
          ))}
        </div>
        {!selectedLetter
          ? <TermsEmpty />
          : (
            <div className="container-fluid no-gutters">
              <TermsList letterData={ this.filterLetter(selectedLetter) } selectedTermIndex={ selectedTermIndex } handleSelectTerm={ this.handleSelectTerm } />
              <CallToActionGhost text='Mach dir die Entscheidung nicht so schwer' />
            </div>
          )}
      </div>
    )
  }
}

Glossary.defadivtProps = {}

Glossary.propTypes = {}

export default Glossary
