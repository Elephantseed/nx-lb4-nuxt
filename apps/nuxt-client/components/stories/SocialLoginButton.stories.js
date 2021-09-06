import SocialLoginButton from '../SocialLoginButton.vue'
import { getOptionsArgTypes } from '~/helpers/storybook'

const socialOptions = {
  types: ['google', 'github'],
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Template = (args, { argTypes }) => ({
  components: { SocialLoginButton },
  props: Object.keys(argTypes),
  template: '<SocialLoginButton :text="text" :type="type" />',
})

export default {
  title: 'Auth/SocialLoginButton',
  component: SocialLoginButton,
  args: {
    text: 'Google button',
  },
  argTypes: {
    type: getOptionsArgTypes(socialOptions.types),
    text: { control: 'text' },
  },
}

export const Default = Template.bind({})
Default.args = {
  text: 'Google button',
  type: socialOptions.types[0],
}

export const Github = Template.bind({})
Github.args = {
  text: 'Github Button',
  type: socialOptions.types[1],
}
