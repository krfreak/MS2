import { Serializer } from '../facade';

export class RESTSerializer implements Serializer {
  public serialize(data: any): any {
    return {data: data};
  }

  public deserialize(response: any): any {
    let contentType = (response || response.headers) ? (response.headers.get('content-type') || response.headers.get('Content-Type')) : null
    if (!contentType) return response;
    if (/json/.test(contentType)) return response.json().data || response.json();
    if (/text/.test(contentType)) return response.text();
    if (/blob/.test(contentType)) return response.blob();
    return response;
  }
}
