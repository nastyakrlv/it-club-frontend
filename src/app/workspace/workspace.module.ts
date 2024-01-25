import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkspaceRoutingModule } from './workspace-routing.module';
import { WorkspaceComponent } from './workspace.component';
import { HttpClientModule } from "@angular/common/http";
import { WorkspaceService } from "./workspace.service";

@NgModule({
	declarations: [WorkspaceComponent],
	imports: [CommonModule, WorkspaceRoutingModule, HttpClientModule],
	providers: [WorkspaceService]
})
export class WorkspaceModule {}
