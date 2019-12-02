import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NodesService {

public nodesToShow = {
  raw: [
    {
      label: 'Policy Identifier',
      id: 'policyIdentifier'
    },
    {
      label: 'Starting Date',
      id: 'startingDate'
    },
    {
      label: 'Policy Number',
      id: 'policyNumber'
    },
    {
      label: 'Party ID',
      id: 'partyId'
    },
  ],
  linkers: [
    {
      label: 'Rule #1',
      id: 'rule1'
    },
    {
      label: 'Rule #2',
      id: 'rule2'
    },
    {
      label: 'Rule #3',
      id: 'rule3'
    },
  ],
  target: [
    {
      label: 'Policy ID',
      id: 'policyId',
      icon: 'device_hub'
    },
    {
      label: 'Start Date',
      id: 'startDate',
      icon: 'satellite'
    },
    {
      label: 'Policy Number',
      id: 'policyNum',
      icon: 'satellite'
    },
    {
      label: 'Party',
      id: 'party',
      icon: 'device_hub'
    },
  ]
};

constructor() { }


public getNodesToShow(): Observable<any> {
  return of(this.nodesToShow);
}

}
