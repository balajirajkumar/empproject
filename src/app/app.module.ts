import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpdtlsComponent } from './empdtls/empdtls.component';
import { HttpClientModule } from '@angular/common/http';
import { ModalDialogModule } from 'ngx-modal-dialog';
import{ FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ModalModule } from 'ngx-modal'

export const routes: Routes = [
  { path: '', component: EmpdtlsComponent, pathMatch: 'full' },
  { path: 'list-emp', component: EmpdtlsComponent }
  /* { path: 'add-emp', component: AddEmpComponent }*/
];

@NgModule({
  declarations: [
    AppComponent,
    EmpdtlsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ModalDialogModule.forRoot(),
    ModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
