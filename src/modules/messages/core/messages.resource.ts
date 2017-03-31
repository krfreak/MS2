import { Resource as BaseResource } from '../../communication';

import { Serializer } from './messages.serializer';

export class Resource extends BaseResource {
  protected endpoint = 'messages';

  constructor()
  {
    super();
  }

  public deserialize(data: any) {
    return Serializer.deserialize(data);
  }

  public serialize(data: any) {
  	return Serializer.serialize(data);
  }
}