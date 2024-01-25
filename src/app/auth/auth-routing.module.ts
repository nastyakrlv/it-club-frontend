import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReferralCodeLoginComponent } from './referral-code-login/referral-code-login.component';

const routes: Routes = [
	{ path: '', redirectTo: 'login', pathMatch: 'full' },
	{ path: 'invite-code/:code', component: ReferralCodeLoginComponent },
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class AuthRoutingModule {}
