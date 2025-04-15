import type { Meta, StoryObj } from '@storybook/vue3';
import testComponent from './testComponent.vue';

const meta: Meta<typeof testComponent> = {
  title: 'Components/testComponent',
  component: testComponent,
  tags: ['autodocs'],
  argTypes: {},
  parameters: {
    layout: 'fullscreen',
    design: [
      {
        name: 'Mobile',
        type: 'figma',
        url: '',
      },
      {
        name: 'Desktop',
        type: 'figma',
        url: '',
      },
    ],
  },
  decorators: [
    () => ({
      template: '<div style=""><story /></div>',
    }),
  ],
};
export default meta;
type Story = StoryObj<typeof testComponent>;

/** Description */
export const Default: Story = {
  render: (args) => ({
    setup() {
      return { args };
    },
    components: { testComponent },
    template: '<testComponent v-bind="args" />',
  }),
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
  args: {},
};
