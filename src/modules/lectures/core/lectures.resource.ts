import { Resource as BaseResource } from '../../communication';

import { Lecture } from './lectures.models';
import { Serializer } from './lectures.serializer';

export class Resource extends BaseResource {
  protected endpoint = 'lectures';

  constructor()
  {
    super();
  }

  public deserialize(data: any) {
    return Serializer.deserialize(data);
  }
}