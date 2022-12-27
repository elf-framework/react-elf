// .storybook/preview.js

export const parameters = {
    controls: { expanded: true },
    options: {
        storySort: {
          order: [
            'Foundation', 
            'Pages', 
            'Components', 
            [
                'Actions', 
                'Containers', 
                'Feed Backs',
                'Inputs'
            ], 
            '*', 
            'WIP'
          ],
        },
      },
};