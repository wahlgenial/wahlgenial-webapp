import React from 'react'
import LetterItem from './LetterItem'
import CallToActionGhost from '../CallToActionGhost'
import TermsList, {TermsEmpty} from './TermsList'
import constants from '../../utils/constants'

class GlossaryRoot extends React.Component {
  constructor (props) {
    super(props)
    this.handleSelectTerm = this.handleSelectTerm.bind(this)
  }
  state = {
    selectedLetter: null,
    selectedTermSlug: null
  }
  componentDidMount () {
    this.preselectTerm()
  }
  handleSelectLetter (letter) {
    const {selectedLetter} = this.state
    if (selectedLetter !== letter) {
      this.props.history.push(`${constants.glossaryPath}/${letter.toLowerCase()}`)
      this.setState({selectedLetter: letter, selectedTermSlug: null})
    }
  }
  handleSelectTerm (letter, termSlug) {
    this.setState({selectedTermSlug: termSlug})
    this.props.history.push(`${constants.glossaryPath}/${letter.toLowerCase()}/${!termSlug ? '' : termSlug}`)
  }
  filterLetter (letter) {
    return this.props.lettersCollection.filter((letterObject) => {
      return (letterObject.letter === letter)
    })[0]
  }
  extractParamsFromUri () {
    const params = window.location.href.replace(constants.glossaryReg, '')
    return params.split('/').filter((value) => { if (value !== '') return true })
  }
  uriReturnedData () {
    const letter = this.extractParamsFromUri()[3]
    const termSlug = this.extractParamsFromUri()[4]
    if (!letter && !termSlug) { return false }
    return {termSlug, letter}
  }
  preselectTerm () {
    const termDetails = this.uriReturnedData()
    if (!termDetails) return
    this.setState({
      selectedLetter: termDetails.letter.toUpperCase(),
      selectedTermSlug: termDetails.termSlug
    })
  }
  render () {
    const {lettersCollection} = this.props
    const {selectedLetter, selectedTermSlug} = this.state
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
              <TermsList letterData={ this.filterLetter(selectedLetter) } selectedTermSlug={ selectedTermSlug } handleSelectTerm={ this.handleSelectTerm } />
              <CallToActionGhost text='Mach dir die Entscheidung nicht so schwer' />
            </div>
          )}
      </div>
    )
  }
}

GlossaryRoot.defadivtProps = {}

GlossaryRoot.propTypes = {}

export default GlossaryRoot
