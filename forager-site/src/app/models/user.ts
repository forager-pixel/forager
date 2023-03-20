import { Deserializable } from './deserializable';

export class User implements Deserializable {
  id: number;
  name: string;
  password: string;

  constructor() {
    this.id = 0;
    this.name = '';
    this.password = '';
  }

  deserialize(input: any): this {
    Object.assign(this, input);
    return this;
  }
}
