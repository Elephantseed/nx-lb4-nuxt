import Link from '../Link.vue'

export default {
  title: 'Link',
  component: Link,
}

const Template = () => ({
  components: { Link },
  template: '<Link />',
})

export const Default = Template.bind({})

