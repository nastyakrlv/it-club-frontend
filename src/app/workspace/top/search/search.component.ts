import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  public searchFormGroup: FormGroup;


  constructor() {
    this.searchFormGroup = new FormGroup({
      search: new FormControl(''),
    });
  }

}
