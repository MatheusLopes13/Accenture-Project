import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './edit/edit.component';
import { TableListComponent } from './table-list/table-list.component';

const routes: Routes = [
  {path: '' , component: TableListComponent },
  {path: 'edit' , component: EditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
