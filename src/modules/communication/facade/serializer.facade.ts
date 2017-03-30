export abstract class Serializer {
  abstract serialize(data: any);
  abstract deserialize(data: any);
}
