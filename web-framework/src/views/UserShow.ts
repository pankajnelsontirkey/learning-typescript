import { User, UserProps } from '../models/User';
import { View } from './View';

export class UserShow extends View<User, UserProps> {
  eventsMap(): { [key: string]: () => void } {
    return {};
  }

  template(): string {
    return `
      <div>
        <h1>User Details</h1>
        <div>Name: ${this.model.get('name')}</div>
        <div>Age: ${this.model.get('age')}</div>
      </div>
    `;
  }
}
