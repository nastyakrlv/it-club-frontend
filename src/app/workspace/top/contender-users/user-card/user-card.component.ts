import { Component, Input, OnInit } from '@angular/core';
import { IContenderData } from 'src/app/types/contender-data.interface';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {
  @Input() user: IContenderData;

  public formattedWorkExperience: string | undefined;
  public isLiked: boolean;

  constructor() {
    this.user = {} as IContenderData;
    this.isLiked = false;
  }

  public ngOnInit(): void {
    this.getFormattedWorkExperience();
  }

  public like(): void {
    this.isLiked = !this.isLiked;
  }


  public getFormattedWorkExperience(): void {
    const months: number | undefined = this.user.contenderInfo?.workExperience;
    if (months !== undefined) {
      const years: number = Math.floor(months / 12);
      const remainingMonths: number = months % 12;

      const cases: number[] = [2, 0, 1, 1, 1, 2];
      const titles: string[] = ['год', 'года', 'лет']
      const yearName: string = titles[(years % 100 > 4 && years % 100 < 20) ? 2 : cases[(years % 10 < 5) ? years % 10 : 5]];

      let monthName: string;

      if (remainingMonths % 10 === 1 && remainingMonths % 100 !== 11) {
        monthName = "месяц";
      } else if ([2, 3, 4].includes(remainingMonths % 10) && ![12, 13, 14].includes(remainingMonths % 100)) {
        monthName = "месяца";
      } else {
        monthName = "месяцев";
      }

      if (years === 0) {
        this.formattedWorkExperience = `${remainingMonths} ${monthName}`;
      } else {
        if (remainingMonths === 0) {
          this.formattedWorkExperience = `${years} ${yearName}`;
        } else {
          this.formattedWorkExperience = `${years} ${yearName} и ${remainingMonths}  ${monthName}`;
        }
      }
    }
  }
}

