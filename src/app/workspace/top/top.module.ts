import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ContenderUsersComponent } from "./contender-users/contender-users.component";
import { UserCardComponent } from "./contender-users/user-card/user-card.component";
import { SearchComponent } from "./search/search.component";
import { RadioBlockComponent } from "./radio-block/radio-block.component";
import { TopRoutingModule } from "./top-routing.module";
import { TuiBadgeModule } from "@taiga-ui/kit";
import { TuiSvgModule } from "@taiga-ui/core";
import { TuiAvatarModule } from "@taiga-ui/kit";
import { TuiMarkerIconModule } from "@taiga-ui/kit";
import { TuiButtonModule } from "@taiga-ui/core";
import { ReactiveFormsModule } from "@angular/forms";
import { TuiInputModule } from "@taiga-ui/kit";
import { TuiScrollbarModule } from "@taiga-ui/core";
import { TuiTextfieldControllerModule, TuiModeModule } from "@taiga-ui/core";
import { FormsModule } from "@angular/forms";
import { TuiRadioBlockModule } from "@taiga-ui/kit";
import { TuiDataListModule } from "@taiga-ui/core";
import { TuiDataListWrapperModule, TuiSelectModule } from "@taiga-ui/kit";
import { TuiLoaderModule } from "@taiga-ui/core";
import { TuiPaginationModule } from "@taiga-ui/kit";
import { TopComponent } from "./top.component";
import { CompaniesComponent } from "./companies/companies.component";
import { CompanyCardComponent } from "./companies/company-card/company-card.component";
import { TuiTagModule } from "@taiga-ui/kit";
import { PagePatternComponent } from "./page-pattern/page-pattern.component";
import { TuiHintModule } from "@taiga-ui/core";
import { WorkspaceModule } from "../workspace.module";


@NgModule({
	declarations: [
		ContenderUsersComponent,
		UserCardComponent,
		SearchComponent,
		RadioBlockComponent,
		TopComponent,
		CompaniesComponent,
		CompanyCardComponent,
		PagePatternComponent
	],
	imports: [
		WorkspaceModule,
		CommonModule,
		TopRoutingModule,
		TuiBadgeModule,
		TuiSvgModule,
		TuiAvatarModule,
		TuiMarkerIconModule,
		TuiButtonModule,
		ReactiveFormsModule,
		TuiInputModule,
		TuiScrollbarModule,
		TuiTextfieldControllerModule,
		TuiModeModule,
		FormsModule,
		TuiRadioBlockModule,
		TuiDataListModule,
		TuiDataListWrapperModule,
		TuiSelectModule,
		TuiLoaderModule,
		TuiPaginationModule,
		TuiTagModule,
		TuiHintModule
	]
})
export class TopModule {
}
