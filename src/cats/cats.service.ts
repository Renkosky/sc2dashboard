import { Injectable } from '@nestjs/common';
interface Cat {
  age: number;
  color: string;
  gender: 'male' | 'female';
}
@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];
  create(cat: Cat) {
    this.cats.push(cat);
  }

  findAll(): Cat[] {
    return this.cats;
  }
}
