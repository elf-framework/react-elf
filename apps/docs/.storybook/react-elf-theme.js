// .storybook/YourTheme.js

import { create } from '@storybook/theming';

export default create({
  base: 'light',
  brandTitle: `
    <div style="font-size: 16px;">
      <img src="https://www.elf-framework.com/icon.png" width="20px" height="20px" style="vertical-align:middle;"/> @react-elf
    </div>    
  `,
  brandUrl: 'https://react.elf-framework.com',
  brandTarget: '_self',

});