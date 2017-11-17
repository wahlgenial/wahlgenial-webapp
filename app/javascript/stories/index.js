import React from 'react'
import { storiesOf } from '@storybook/react'
import ElectionProgramsStory from './ElectionProgramsStory'
import '../../stylesheets/application.sass'
storiesOf('Election Programs')
  .add('All View', () => <ElectionProgramsStory />)
