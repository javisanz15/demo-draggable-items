import { Component, OnInit, Inject, AfterViewInit } from '@angular/core';
import { LeaderLine } from '../../../node_modules/leader-line';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-manual-approach',
  templateUrl: './manual-approach.component.html',
  styleUrls: ['./manual-approach.component.scss']
})
export class ManualApproachComponent implements OnInit, AfterViewInit {

  public result: any;
  constructor(
    @Inject(DOCUMENT) document,
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.addConnection();
  }

  public addConnection() {
    const element1 = document.getElementById('card-1');
    const element2 = document.getElementById('card-2');

    this.result = new LeaderLine(element1, element2);
  }

  public updateLine() {
    console.log('aaaa');
    this.result.position();
  }

}
