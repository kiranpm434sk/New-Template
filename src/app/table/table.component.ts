import { Component, OnInit } from '@angular/core';
import { Designation } from './designation';
import { TabledataService } from '../tabledata.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';
// import { BsModalService,BsModalRef } from 'ngx-bootstrap/modal';
// import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  list: Designation[] = [];
  tableForm: FormGroup;
  config: any;
  collection = [];
  id: number;
  y: number = 2;
  dataSource = new MatTableDataSource<Designation>();
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
    // this.tableForm.patchValue({
    //    id: this.tableForm.value.id,
    //   name: this.tableForm.value.name,
    //   description: this.tableForm.value.description

    // });
  }


  pageChanged(event) {
    this.config.currentPage = event;
  }


  onSearch(value) {

    console.log(value);
    if (value != '') {
      this.list = this.list.filter(x => x.name.indexOf(value) != -1);

    }
    else {
      this._data.getAllDesignations().subscribe(
        (data: Designation[]) => {
          this.list = data;
        },
        function (error) {
          alert(error);
        },
        function () { }
      );
    }
    // this.GetEmp();

  }


  getDesig() {
    this._data.getAllDesignations().subscribe(
      (data: Designation[]) => {
        this.list = data;
        console.log(this.list);
      },
      function (error) {
        alert(error);
      },
      function () { }

    );
  }



  //Delete Method
  onDesigDelete(item) {
    console.log(item);
    this._data.deleteDesignations(item.id).subscribe((data: any) => {
      this.list.splice(this.list.indexOf(item), 1);
      alert('deleted');
      this.ngOnInit();

    });

  }


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
  close() {
    this.tableForm.reset();
  }
  openedit(item) {
    console.log(item.id);
    this.tableForm.patchValue({
      id: item.id,
      name: item.name,
      description: item.description

    });
  }
  onFormUpdate(tableForm) {
    console.log(tableForm);
    this._data.editDesignations(tableForm).subscribe(
      (data: Designation[]) => {
        // this.modalref = this.modalService.show(this.id);
        // var test = this.modalService.getModalsCount();


        this.getDesig();
        this.tableForm.reset();
      }
    );
  }
}
