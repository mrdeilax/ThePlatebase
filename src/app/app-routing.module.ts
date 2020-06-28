import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { PlateShowComponent } from './plate/plate-show/plate-show.component';
import { PlateAddComponent } from './plate/plate-add/plate-add.component';

const routes: Routes = [
    { path: '', component: PlateShowComponent },
    { path: 'add', component: PlateAddComponent},
    { path: 'edit/:plateId', component: PlateAddComponent}  
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}