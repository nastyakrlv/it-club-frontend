import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{ path: '', redirectTo: 'auth', pathMatch: 'full' },
	{ path: 'auth', loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule) },
	{ path: 'workspace', loadChildren: () => import('./workspace/workspace.module').then((m) => m.WorkspaceModule) },
	{ path: 'invite', redirectTo: 'auth/invite-code' },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
