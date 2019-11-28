import { Component, OnInit, Inject } from '@angular/core';
import { NodesService } from '../services/nodes.service';
import { DOCUMENT } from '@angular/common';
import { Observable } from 'rxjs';
import { LeaderLine } from '../../../node_modules/leader-line';

@Component({
  selector: 'app-manual-approach-2',
  templateUrl: './manual-approach-2.component.html',
  styleUrls: ['./manual-approach-2.component.scss']
})
export class ManualApproach2Component implements OnInit {

  public showNodes$: Observable<any>;
  public rawSelected: string;
  public ruleSelected: string;
  public targetSelected: string;
  public lineList: any[] = [];
  constructor(
    @Inject(DOCUMENT) document,
    public nodesService: NodesService,
  ) { }

  ngOnInit() {
    this.getNodesToShow();
  }

  public getNodesToShow() {
    this.showNodes$ = this.nodesService.getNodesToShow().pipe();
  }

  public createConnection(type: string, id: string) {
    switch(type) {
      case 'raw':
      this.createRawConnection(id);
      break;

      case 'linker':
      this.createLinkerConnection(id);
      break;

      case 'target':
      this.createTargetConnection(id);
      break;
    }
  }

  public createRawConnection(id: string) {
    this.rawSelected = id;
  }

  public createLinkerConnection(id: string) {
    if(this.rawSelected && !this.ruleSelected) {
      this.addConnection(this.rawSelected, id);
      this.ruleSelected = id;
    } else if (this.rawSelected && this.ruleSelected) {
      this.addConnection(this.rawSelected, id);
      if (this.ruleSelected !== id) {this.ruleSelected = id;}
    }
  }

  public createTargetConnection(id: string) {
    if(this.rawSelected && this.ruleSelected) {
      this.addConnection(this.ruleSelected, id);
      this.targetSelected = id;
    }
  }

  public addConnection(start: string, end: string) {
    const element1 = document.getElementById(start);
    const element2 = document.getElementById(end);

    const result = new LeaderLine(element1, element2);
    this.lineList.push(result);
  }

}
