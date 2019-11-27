import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NodesService {

public newNode = {
  id: 'card-5',
  icon: 'contactless',
  label: 'Term #5'
}

public nodesToShow = [
  {
    id: 'card-1',
    icon: 'fingerprint',
    label: 'Term #1'
  },
  {
    id: 'card-2',
    icon: 'eco',
    label: 'Term #2'
  },
  {
    id: 'card-3',
    icon: 'extension',
    label: 'Term #3'
  },
  {
    id: 'card-4',
    icon: 'account_balance',
    label: 'Term #4'
  },
];

constructor() { }

public getNewNode(): Observable<any> {
  return of(this.newNode);
}

public getNodesToShow(): Observable<any> {
  return of(this.nodesToShow);
}

}
