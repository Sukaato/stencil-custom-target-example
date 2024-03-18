import { componentConfig } from './component-config';
import { Framework, FrameworkConfig } from '../interface';

export const initialize = (userConfig?: FrameworkConfig): void => {
  const win = window;
  const Poppy = (win.Framework = win.Framework || ({} as Framework));

  componentConfig.reset(userConfig?.components ?? {});

  Poppy.components = componentConfig;
};

export default initialize;


// E.g of usage

// This ensures total type security depending on what the developer wishes to allow for configuration.
/**
 * initialize({
 *   components: {
 *     "pop-drawer": {
 *       triggerAction: 'hover' // So now by default the triggerAction is 'hover' and not 'click' 
 *     }
 *   }
 * });
 */
