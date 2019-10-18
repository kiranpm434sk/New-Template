import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { routing } from './app.routing';
import { ListdisplayComponent } from './listdisplay/listdisplay.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {MatSidenavModule, MatMenuModule, MatTableModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ListComponent } from './list/list.component';
import {MatListModule} from '@angular/material/list';
// import { MatMenuTrigger } from '@angular/material/menu';
// import { BsModalService,  BsModalRef, ModalModule } from 'ngx-bootstrap/modal';

// import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { SidenavAutosizeExampleComponent } from './sidenav-autosize-example/sidenav-autosize-example.component';

// import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    NavbarComponent,
    ListdisplayComponent,
    ListComponent,

    SidenavAutosizeExampleComponent,
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
    // ModalModule,


  ],
  // providers: [BsModalService, BsModalRef],
  bootstrap: [AppComponent]
})
export class AppModule { }
