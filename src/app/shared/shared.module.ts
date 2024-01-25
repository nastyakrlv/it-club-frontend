import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './logo/logo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TuiInputModule } from '@taiga-ui/kit';
import { TuiTextfieldControllerModule, TuiButtonModule } from '@taiga-ui/core';
import { InputCodeComponent } from './input-code/input-code.component';

@NgModule({
	declarations: [LogoComponent, InputCodeComponent],
	imports: [CommonModule, ReactiveFormsModule, TuiInputModule, TuiTextfieldControllerModule, TuiButtonModule],
	exports: [LogoComponent, InputCodeComponent],
})
export class SharedModule {}
