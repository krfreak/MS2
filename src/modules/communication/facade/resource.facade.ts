export abstract class Resource {
  protected abstract endpoint: string;
  public extension: string = null;
  public query: Object = {};
  public method: string = null;

  public get url(): string {
    return this.extension ? [this.endpoint, this.extension].join('/'):this.endpoint;
  }

  public deserialize(data: any, method?: string): any {
    return data;
  }

  public serialize(data: any, method?: string): any {
    return data;
  }
}
