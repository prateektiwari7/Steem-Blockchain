import Vue from 'vue'
import { storiesOf } from '@storybook/vue'

import Profile from '../../src/views/profile/Profile'

storiesOf('Profile', module)
  .add('with a profile image', () => ({
     components: { Profile },
     template: '<Profile />'
  }))