import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { Designation } from '../table/designation';
import { TabledataService } from '../tabledata.service';
import { MatMenuTrigger } from '@angular/material/menu';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';
// import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  id: number;
  name: string;
  description: string;
  list: Designation[] = [];
  displayedColumns: string[] = ['id', 'name', 'description'];
  dataSource = new MatTableDataSource<Designation>();
  tableForm: FormGroup;
  config: any;
  collection = [];

  // modalRef: BsModalRef;
  message: string;
  constructor(private _data: TabledataService, private fb: FormBuilder) {
    this.config = {
      itemsPerPage: 5,
      currentPage: 2,
      totalItems: this.collection.length
    };
  }

  ngOnInit() {
    this.tableForm = this.fb.group({
      id: new FormControl(null),
      name: new FormControl(null),
      description: new FormControl(null)

    });
    this.getDesig();
  }



  pageChanged(event) {
    this.config.currentPage = event;
  }

  getDesig() {
    this._data.getAllDesignations().subscribe(
      (data: Designation[]) => {
        this.list = data;
        this.dataSource = new MatTableDataSource<Designation>(this.list);
      },
      function (error) {
        alert(error);
      },
      function () { }

    );
  }

  items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' }
  ];


  @ViewChild(MatMenuTrigger, { static: false })
  contextMenu: MatMenuTrigger;

  contextMenuPosition = { x: '0px', y: '0px' };

  onContextMenu(event: MouseEvent, item: Item) {
    event.preventDefault();
    this.contextMenuPosition.x = event.clientX + 'px';
    this.contextMenuPosition.y = event.clientY + 'px';
    this.contextMenu.menuData = { 'item': item };
    this.contextMenu.openMenu();
  }




  openedit(item) {
    console.log(item.id);
    this.tableForm.patchValue({
      id: item.id,
      name: item.name,
      description: item.description

    });
  }


  openadd(item) { }

  onFormSubmit(item) {
    console.log(item);
    var req = {
      id: 0,
      description: item.description,
      name: item.name
    };
    this._data.addDesignations(req).subscribe(
      (data: Designation[]) => {
        this.list = data;
        alert('succefully added');
        this.ngOnInit();
      },
      function (error) {
        alert(error);
      },
      function () { }


    );

  }


  onFormUpdate(tableForm) {
    console.log(tableForm);
    this._data.editDesignations(tableForm).subscribe(
      (data: Designation[]) => {

        this.getDesig();
        this.tableForm.reset();
      }
    );
  }


  close() {
    this.tableForm.reset();
  }

  onContextMenuDelete(item: Designation) {
    console.log('id:', item.id)
    this._data.deleteDesignations(item.id).subscribe(
      (data: any) => {
        this._data.getAllDesignations().subscribe(
          (data: Designation[]) => {
            this.list = data;
          }
        );

        confirm('Are you sure do you want to delete?');
        this.ngOnInit();
      }
    );


  }

}




export interface Item {
  id: number;
  name: string;
}
