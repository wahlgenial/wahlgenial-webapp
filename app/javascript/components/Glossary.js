import React from 'react'
import GlossaryRoot from './Glossary/GlossaryRoot'
import { BrowserRouter, Route } from 'react-router-dom'

const Glossary = (props) => {
  return (
    <BrowserRouter>
      <Route
        render={
          (qprops) => (<GlossaryRoot { ...props } { ...qprops } />) }
      />
    </BrowserRouter>

  )
}

export default Glossary
