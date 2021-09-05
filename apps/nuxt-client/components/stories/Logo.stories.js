import Logo from '../Logo.vue'

export default {
  title: 'Logo',
  component: Logo,
}

const Template = () => ({
  components: { Logo },
  template: '<Logo />',
})

export const Default = Template.bind({})
