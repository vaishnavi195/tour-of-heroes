import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: any, filteredString: string) {
    if (value.length === 0 || filteredString === '') {
      return value;
    }
    const users = [];
    for (const user of value) {
      if (user['name'] === filteredString) {
        users.push(user);
      }
    }
    return users;
  }
}
