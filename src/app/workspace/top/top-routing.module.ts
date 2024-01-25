import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContenderUsersComponent } from './contender-users/contender-users.component';
import { TopComponent } from './top.component';
import { CompaniesComponent } from './companies/companies.component';

const routes: Routes = [
	{
		path: '', component: TopComponent, children: [
			{ path: 'contender-users', component: ContenderUsersComponent },
			{ path: 'companies', component: CompaniesComponent }
		]
	}
];


@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class TopRoutingModule { }
