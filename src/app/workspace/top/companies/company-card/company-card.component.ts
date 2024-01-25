import { Component, Input } from '@angular/core';
import { ICompaniesData } from 'src/app/types/companies-data.interface';

@Component({
  selector: 'app-company-card',
  templateUrl: './company-card.component.html',
  styleUrls: ['./company-card.component.scss']
})
export class CompanyCardComponent {
  @Input() company: ICompaniesData;



  constructor() {
    this.company = {} as ICompaniesData;
  }

  public like(): void {
    return //запрос для бэка на изменение свойства favorited 
  }

}
