import { ComponentOptions } from '../component-config';

export class ComponentConfig {
  private config = new Map<keyof ComponentOptions, any>();

  reset(Components: ComponentOptions): void {
    this.config = new Map(Object.entries(Components) as any);
  }

  set<Tag extends keyof ComponentOptions>(component: Tag, config: ComponentOptions[Tag]): void {
    this.config.set(component, config);
  }

  get<Tag extends keyof ComponentOptions>(
    component: Tag,
    fallback: ComponentOptions[Tag] = {} as ComponentOptions[Tag],
  ): ComponentOptions[Tag] {
    return this.config.get(component) ?? fallback;
  }

  apply<Tag extends keyof ComponentOptions>(ref: any, tag: Tag, defaultValue: ComponentOptions[Tag]): void {
    Object.entries(
      {...this.get(tag, {}), ...defaultValue}
    ).forEach(([key, value]) => ref[key] ??= value);
  }

  setProp<Tag extends keyof ComponentOptions, Prop extends keyof ComponentOptions[Tag]>(
    component: Tag,
    prop: Prop,
    value: ComponentOptions[Tag][Prop],
  ): void {
    const config = this.get(component, {} as ComponentOptions[Tag]);
    this.config.set(component, {
      ...config,
      [prop]: value,
    });
  }

  getProp<Tag extends keyof ComponentOptions, Prop extends keyof ComponentOptions[Tag]>(
    component: Tag,
    prop: Prop,
    fallback?: ComponentOptions[Tag][Prop],
  ): ComponentOptions[Tag][Prop] {
    const config = this.get(component, {} as ComponentOptions[Tag]);
    return config[prop] ?? fallback;
  }
}

export const componentConfig = new ComponentConfig();
