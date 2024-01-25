import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-page-pattern',
  templateUrl: './page-pattern.component.html',
  styleUrls: ['./page-pattern.component.scss']
})
export class PagePatternComponent implements OnInit {
  @Input() totalPagination: number | undefined;
  @Input() items: string[];
  @Input() length: number;
  @Input() isLoading!: boolean;
  @Input() title!: string;
  @Input() errorMessage: string | undefined;
  @Output() pageIndexChange: EventEmitter<number> = new EventEmitter<number>();


  public filterFormGroup!: FormGroup;
  public index: number;
  public isRotated: boolean;


  constructor() {
    this.index = 0;
    this.length = 1;
    this.items = [];
    this.isRotated = false;
  }

  public ngOnInit() {
    this.filterFormGroup = new FormGroup({
      filterList: new FormControl(this.items[0])
    });
  }

  public goToPage(index: number): void {
    this.index = index;
    this.pageIndexChange.emit(index);
  }

  public sort() {
    this.isRotated = !this.isRotated;
  }
}

