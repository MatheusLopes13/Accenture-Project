import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TableListComponent } from './table-list/table-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EditComponent } from './edit/edit.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PaginationModule } from 'ngx-bootstrap/pagination';



@NgModule({
  declarations: [
    AppComponent, // component principal
    TableListComponent, // componente da tela tabela
    EditComponent, // componente da tela edit
    

  ],
  imports: [
    BrowserModule,
    HttpClientModule, // http modulo que chama api
    FontAwesomeModule, // icones
    AppRoutingModule, // modulo de rotas
    ReactiveFormsModule,
    FontAwesomeModule,
    PaginationModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
