import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(value?: string, ...args: unknown[]): string {
    if(!value)
      return '/assets/img/default-image.svg';
    return new URL(value,environment.baseUrl).href;
  }

}
