import { Injectable } from '@nestjs/common';

// interface Flower {
//   name: string;
//   color: string;
//   price: number;
// }

@Injectable()
export class FlowersService {
  findAll() {
    return [
      {
        name: 'Rose',
        color: 'Red',
        price: 5,
      },
      {
        name: 'Lily',
        color: 'White',
        price: 6,
      },
      {
        name: 'Tulip',
        color: 'Yellow',
        price: 7,
      },
    ];
  }
}
