import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkspaceComponent } from './workspace.component';

const routes: Routes = [
	{
		path: '',
		component: WorkspaceComponent,
		children: [
			{ path: 'top', redirectTo: 'top/contender-users', pathMatch: 'full' },
			{ path: 'top', loadChildren: () => import('./top/top.module').then((m) => m.TopModule) },
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class WorkspaceRoutingModule {}
