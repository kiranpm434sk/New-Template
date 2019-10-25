import { Routes, RouterModule } from "@angular/router";


import { TableComponent } from './table/table.component';
import { ListdisplayComponent } from './listdisplay/listdisplay.component';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';
import { UserGuardService } from './user-guard.service';

const arr: Routes = [
  { path: 'home', canActivate: [UserGuardService], component: ListdisplayComponent },
  { path: 'tabledisp', canActivate: [UserGuardService], component: TableComponent },
  { path: 'list', canActivate: [UserGuardService], component: ListComponent },
  { path: '', component: LoginComponent },

];

export const routing = RouterModule.forRoot(arr);

































