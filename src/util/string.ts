export module StringUtil {
  export function trimSlashes(string: string): string {
    string = string.trim();
    return string.replace(/^\/|\/$/, "");
  }

  export function buildUrlPath(...args: string[]) {
    return args.filter(Boolean).map(segment => StringUtil.trimSlashes(segment)).filter((segment, index) => index === 0 || StringUtil.isset(segment, false)).join('/');
  }

  export function isset(string: string, allowEmptyString = true): boolean {
    return (typeof string === 'string') && (string !== undefined && string !== null && (allowEmptyString || string !== ''));
  }
}