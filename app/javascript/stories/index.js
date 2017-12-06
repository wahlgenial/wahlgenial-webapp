import React from 'react'
import { storiesOf } from '@storybook/react'
import ElectionProgramsStory from './ElectionProgramsStory'
import GlossaryStory from './GlossaryStory'
import ElectionAppsStory from './ElectionAppsStory'
import '../../stylesheets/application.sass'

storiesOf('Election Programs')
  .add('Whole View', () => <ElectionProgramsStory />)

storiesOf('GLossary')
  .add('Whole View', () => <GlossaryStory />)

storiesOf('ElectionApps')
  .add('Whole View', () => <ElectionAppsStory />)
