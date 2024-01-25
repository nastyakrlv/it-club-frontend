import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-radio-block',
  templateUrl: './radio-block.component.html',
  styleUrls: ['./radio-block.component.scss']
})
export class RadioBlockComponent {
  public radioBlockFormGroup: FormGroup;

  constructor(private router: Router) {
    this.radioBlockFormGroup = new FormGroup({
      contenderOrCompany: new FormControl('')
    });

    const currentUrl = router.url;
    if (currentUrl.includes('companies')) {
      this.radioBlockFormGroup.get('contenderOrCompany')?.setValue('company');
    } else if (currentUrl.includes('contender-users')) {
      this.radioBlockFormGroup.get('contenderOrCompany')?.setValue('contender');
    }
  }
}
