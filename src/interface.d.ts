import { ComponentOptions } from './component-config';
import { ComponentConfig } from './global/component-config';

type FrameworkConfig = {
  components?: ComponentOptions;
};

type Framework = {
  components?: ComponentConfig;
};

declare global {
  interface Window {
    Framework: Framework;
  }
}
