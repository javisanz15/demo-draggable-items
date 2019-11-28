import { Component, OnInit, Inject, AfterViewInit, Renderer2, ElementRef } from '@angular/core';
import { LeaderLine } from '../../../node_modules/leader-line';
import { DOCUMENT } from '@angular/common';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ComponentPopupComponent } from '../component-popup/component-popup.component';
import { NodesService } from '../services/nodes.service';
import { tap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { RemovePopupComponent } from '../remove-popup/remove-popup.component';


@Component({
  selector: 'app-manual-approach',
  templateUrl: './manual-approach.component.html',
  styleUrls: ['./manual-approach.component.scss']
})
export class ManualApproachComponent implements OnInit, AfterViewInit {

  public lineList: any[] = [];
  public linkQuery: string;
  public unlinkQuery: string;
  public showNodes$: Observable<any>;
  public nodesToShow: any[] = [];

  constructor(
    @Inject(DOCUMENT) document,
    public dialog: MatDialog,
    public nodesService: NodesService,
    public renderer: Renderer2,
  ) { }

  ngOnInit() {
    this.getNodesToShow();
  }

  ngAfterViewInit() {
    this.addConnection('card-1', 'card-2');
  }

  public getNodesToShow() {
    this.showNodes$ = this.nodesService.getNodesToShow().pipe(
      map(res => {
        return res.map(item => {
          return {
            ...item,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }
        })
      }),
      tap(result => this.nodesToShow = result),
    );
  }

  public addConnection(start: string, end: string) {
    const element1 = document.getElementById(start);
    const element2 = document.getElementById(end);

    const result = new LeaderLine(element1, element2);
    this.lineList.push(result);
  }

  public deleteConnection(start: string, end: string) {
    this.lineList.forEach(line => {
      if ((line.start.id === start && line.end.id === end) || (line.end.id === start && line.start.id === end)) {
        const number = this.lineList.indexOf(line);
        line.remove();
        this.lineList.splice(number, 1);
      }
    });
  }

  public updateLine(moving: string) {
    this.lineList.forEach(line => {
      if (line.start.id === moving || line.end.id === moving) {
        line.position();
      }
    });
  }

  public createNewLink(link: string) {
    if (!this.linkQuery) {
      this.linkQuery = link;
    } else {
      this.addConnection(this.linkQuery, link);
      this.linkQuery = null;
    }
  }

  public deleteLink(link: string) {
    if (!this.unlinkQuery) {
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

  public openDialog(item: string): void {
    const dialogRef = this.dialog.open(ComponentPopupComponent, {
      width: '250px',
      data: { item }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  public removeNode() {
    const dialogRef = this.dialog.open(RemovePopupComponent, {
      width: '250px',
      data: { nodesToShow: this.nodesToShow }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.removeNodeFromList(result);
    });
  }

  public removeNodeFromList(node: any) {
    this.lineList.forEach(line => {
      if (line.start.id === node.id || line.end.id === node.id) {
        const number = this.lineList.indexOf(line);
        line.remove();
        this.lineList.splice(number, 1);
      }
    });
    this.nodesToShow = this.nodesToShow.filter(item => item.id !== node.id);
  }

  // public addNewNode() {
  //   this.showNodes$ = this.nodesService.getNewNode().pipe(
  //     map(res => {
  //       return {
  //         ...res,
  //         top: `${Math.random() * 100}%`,
  //         left: `${Math.random() * 100}%`,
  //       }
  //     }),
  //     tap(v => this.nodesToShow.push(v)),
  //     tap(v => this.lineList.forEach(line => {
  //       line.position();
  //     })),
  //   );
  // }

  public getRandomValue(item: string, id: string): string {
    const result = this.nodesToShow.find(item => item.id === id);

    switch (item) {
      case 'top':
        return result.top;

      case 'bottom':
        return result.bottom;

      case 'left':
        return result.left;

      case 'right':
        return result.right;
    }
  }

}
