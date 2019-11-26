import { Component, OnInit, Inject, AfterViewInit } from '@angular/core';
import { LeaderLine } from '../../../node_modules/leader-line';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-manual-approach',
  templateUrl: './manual-approach.component.html',
  styleUrls: ['./manual-approach.component.scss']
})
export class ManualApproachComponent implements OnInit, AfterViewInit {

  public nodeList: any[] = ['card-1', 'card-2', 'card-3', 'card-4'];
  public lineList: any[] = [];
  public linkQuery: string;
  public unlinkQuery: string;
  constructor(
    @Inject(DOCUMENT) document,
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.addConnection('card-1', 'card-2');
  }

  public addConnection(start: string, end: string) {
    const element1 = document.getElementById(start);
    const element2 = document.getElementById(end);

    const result = new LeaderLine(element1, element2);
    this.lineList.push(result);
  }

  public deleteConnection(start: string, end: string) {
    this.lineList.forEach(line => {
      if(line.start.id === start && line.end.id === end) {
        const number = this.lineList.indexOf(line);
        line.remove();
        this.lineList.splice(number, 1);
      }
    });
  }

  public updateLine(moving: string) {
    this.lineList.forEach(line => {
      if(line.start.id === moving || line.end.id === moving) {
        line.position();
      }
    });
  }

  public createNewLink(link: string) {
    if(!this.linkQuery) {
      this.linkQuery = link;
    } else {
      this.addConnection(this.linkQuery, link);
      this.linkQuery = null;
    }
  }

  public deleteLink(link: string) {
    if(!this.unlinkQuery) {
      this.unlinkQuery = link;
    } else {
      this.deleteConnection(this.unlinkQuery, link);
      this.unlinkQuery = null;
    }
  }

  public deleteLinkQuery() {
    this.linkQuery = null;
  }

  public deleteUnlinkQuery() {
    this.unlinkQuery = null;
  }

}
