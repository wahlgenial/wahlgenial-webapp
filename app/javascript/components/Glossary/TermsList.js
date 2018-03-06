import React from 'react'
import TermItem from './TermItem'
import icons from '../../images/icons'
export const TermsEmpty = _ => {
  return (
    <div className="call-to-action col-lg-6 col-md-12 px-1 py-5 mx-auto text-center">
      <img className="" src={ icons.glossaryCallToAction } />
      Wähle einen Buchstaben aus
    </div>
  )
}

class TermsList extends React.Component {
  state = { selectedTermSlug: null }
  handleSelectTerm (letter, termSlug) {
    const {selectedTermSlug, handleSelectTerm} = this.props
    if (selectedTermSlug !== termSlug) {
      handleSelectTerm(letter, termSlug)
    } else {
      handleSelectTerm(letter, null)
    }
  }

  handleScrollToElement (event) {
    // const tesNode = ReactDOM.findDOMNode(this.refs.test)
    // window.scrollTo(0, tesNode.offsetTop)
  }
  render () {
    const {letterData, selectedTermSlug} = this.props
    return (
      <div className="col-lg-6 col-md-12 px-1 py-5 mx-auto text-center">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="terms-list">
              {letterData.terms.map((term, index) => (
                <div key={ index }>
                  <TermItem
                    index={ index }
                    key={ index }
                    onScroll={ this.handleScrollToElement }
                    title={ term.title }
                    description= { term.description }
                    imageThumb={ term.image_thumb }
                    image={ term.image }
                    videoID={ term.video }
                    onClick={ () => { this.handleSelectTerm(letterData.letter, term.slug) } }
                    selected = { selectedTermSlug === term.slug } />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default TermsList
