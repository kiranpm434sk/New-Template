import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { routing } from './app.routing';
import { ListdisplayComponent } from './listdisplay/listdisplay.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {MatSidenavModule, MatMenuModule, MatTableModule, MatCheckboxModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ListComponent } from './list/list.component';
import {MatListModule} from '@angular/material/list';
import { SidenavAutosizeExampleComponent } from './sidenav-autosize-example/sidenav-autosize-example.component';
import {SidebarModule} from 'primeng/sidebar';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { MatPaginatorModule } from '@angular/material';

import { RatingModule } from 'ngx-bootstrap';
// import { TreeTableContextMenuDemoComponent } from './tree-table-context-menu-demo/tree-table-context-menu-demo.component';
@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    NavbarComponent,
    ListdisplayComponent,
    ListComponent,

    SidenavAutosizeExampleComponent,

    LoginComponent,

    DashboardComponent,

    // TreeTableContextMenuDemoComponent,
    // BsModalService
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    routing,
    NgxPaginationModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatListModule,
    MatMenuModule,
    MatTableModule,
    SidebarModule,
    FormsModule,
    MatCheckboxModule,

    MatPaginatorModule,
    BsDatepickerModule.forRoot(),
    RatingModule.forRoot(),





    // ModalModule,


  ],
  // providers: [BsModalService, BsModalRef],
  bootstrap: [AppComponent]
})
export class AppModule { }
