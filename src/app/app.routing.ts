import { Routes,RouterModule} from "@angular/router";


import { TableComponent } from './table/table.component';
import { ListdisplayComponent } from './listdisplay/listdisplay.component';
import { ListComponent } from './list/list.component';
// import { SidenavAutosizeExampleComponent } from './sidenav-autosize-example/sidenav-autosize-example.component';

const arr : Routes=[
  {path:'list',component:ListComponent},
  {path:'',component:ListdisplayComponent},
  {path:'tabledisp',component:TableComponent}
  // {path:'',component:SidenavAutosizeExampleComponent},




];

export const routing=RouterModule.forRoot(arr);

































