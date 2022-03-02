import { Pipe, PipeTransform } from '@angular/core';
import { ISong } from '../modals/song';
import { orderBy } from 'lodash';


@Pipe({
  name: 'OrderBy'
})
export class OrderByPipe implements PipeTransform {

  transform = orderBy;

}
