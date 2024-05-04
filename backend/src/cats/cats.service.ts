import { Injectable } from '@nestjs/common';
import { cats } from '../moks/cats_moks';

@Injectable()
export class CatsService {
  getAllCats(): object[] {
    return cats;
  }
}
