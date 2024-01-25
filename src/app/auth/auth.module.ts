import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { TuiInputModule } from '@taiga-ui/kit';
import {
	TuiButtonModule,
	TuiModeModule,
	TuiTextfieldControllerModule,
	TuiNotificationModule,
	TuiLoaderModule,
} from '@taiga-ui/core';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './core/service/auth.service';
import { SharedModule } from '../shared/shared.module';
import { ReferralCodeLoginComponent } from './referral-code-login/referral-code-login.component';
import { TuiAlertModule, TuiRootModule } from '@taiga-ui/core';

@NgModule({
	declarations: [ReferralCodeLoginComponent],
	imports: [
		CommonModule,
		AuthRoutingModule,
		ReactiveFormsModule,
		TuiInputModule,
		TuiTextfieldControllerModule,
		TuiButtonModule,
		TuiModeModule,
		TuiNotificationModule,
		HttpClientModule,
		TuiLoaderModule,
		SharedModule,
		TuiRootModule,
		TuiAlertModule,
	],
	providers: [AuthService],
})
export class AuthModule {}
