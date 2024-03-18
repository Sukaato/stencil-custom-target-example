import { Config } from '@stencil/core';
import { componentConfig } from './component-config.target';

export const config: Config = {
  namespace: 'stencil-custom-target-example',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    componentConfig(),
  ],
  testing: {
    browserHeadless: "new",
  },
};
