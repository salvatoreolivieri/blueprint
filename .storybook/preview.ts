import type { Preview } from '@storybook/vue3';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },

    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      viewports: {
        mobile_min: {
          name: 'xs - 320px',
          styles: {
            height: '600px',
            width: '320px',
          },
          type: 'mobile',
        },
        mobile_optimal: {
          name: 'sm - 360px',
          styles: {
            height: '600px',
            width: '360px',
          },
          type: 'mobile',
        },
        mobile_max: {
          name: 'sm - 639px',
          styles: {
            height: '600px',
            width: '639px',
          },
          type: 'mobile',
        },
        tablet_min: {
          name: 'md - 640px',
          styles: {
            height: '600px',
            width: '640px',
          },
          type: 'tablet',
        },
        desktop1_min: {
          name: 'lg - 1024px',
          styles: {
            height: '600px',
            width: '1024px',
          },
          type: 'desktop',
        },
        desktop1_intermediate: {
          name: 'lg - 1280px',
          styles: {
            height: '600px',
            width: '1280px',
          },
          type: 'desktop',
        },
        desktop1_optimal: {
          name: 'lg - 1440px',
          styles: {
            height: '600px',
            width: '1440px',
          },
          type: 'desktop',
        },
        desktop1_max: {
          name: 'lg - 1680px',
          styles: {
            height: '600px',
            width: '1680px',
          },
          type: 'desktop',
        },
        desktop2_optimal: {
          name: 'xl - 1920px',
          styles: {
            height: '600px',
            width: '1920px',
          },
          type: 'desktop',
        },
        desktop2_max: {
          name: 'xl - 3000px',
          styles: {
            height: '600px',
            width: '3000px',
          },
          type: 'desktop',
        },
      },
    },
  },
};

export default preview;
