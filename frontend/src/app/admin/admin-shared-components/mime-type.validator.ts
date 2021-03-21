import { AbstractControl } from '@angular/forms';
import { Observable, Observer, of } from 'rxjs';

export const mimeType = (
  control: AbstractControl
): Promise<{ [key: string]: any }> | Observable<{ [key: string]: any }> => {
  if (typeof control.value === 'string') {
    return of(null);
  }
  const file = control.value as File;
  const filereader = new FileReader();
  const frObs = new Observable((observer: Observer<{ [key: string]: any }>) => {
    filereader.addEventListener('loadend', () => {
      const arr = new Uint8Array(filereader.result as ArrayBuffer).subarray(0, 4);
      let header = '';
      let isValid = false;

      for (const item of arr) {
        header += item.toString(16);
      }

      switch (header) {
        case '89504e47':
          isValid = true;
          break;
        case 'ffd8ffe0':
        case 'ffd8ffe1':
        case 'ffd8ffe2':
        case 'ffd8ffe3':
        case 'ffd8ffe8':
          isValid = true;
          break;
        default:
          isValid = false; // Or you can use the blob.type as fallback
          break;
      }

      if (isValid) {
        observer.next(null);
      } else {
        observer.next({ invalidMimeType: true });
      }

      observer.complete();
    });
    filereader.readAsArrayBuffer(file);
  });

  return frObs;
};
