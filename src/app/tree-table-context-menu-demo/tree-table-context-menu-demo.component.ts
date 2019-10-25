// import { Component, OnInit } from '@angular/core';
// import { MenuItem, TreeNode, MessageService } from 'primeng/api';


// // import { NodeService } from '../node.service';


// import { NodeService } from '../node.service';
// import { TabledataService } from '../tabledata.service';
// import { Designation } from '../table/designation';

// @Component({
//   selector: 'app-tree-table-context-menu-demo',
//   templateUrl: './tree-table-context-menu-demo.component.html',
//   styleUrls: ['./tree-table-context-menu-demo.component.css']
// })
// export class TreeTableContextMenuDemoComponent implements OnInit {

//   // files: TreeNode[];

//   files: Designation[];

//   selectedNode: TreeNode;

//   cols: any[];

//   items: MenuItem[];

  // constructor(private  nodeService: NodeService, private messageService: MessageService) { }
  // constructor(private  nodeService: TabledataService, private messageService: MessageService) { }


  // ngOnInit() {
  //     this.nodeService.getAllDesignations().subscribe((data: Designation[]) =>{
  //       this.files = data;
  //       console.log(this.files);
  //     });


      // this.nodeService.getFilesystem().then(files => this.files = files);

//       this.cols = [
//         { field: 'id', header: 'Id' },
//           { field: 'name', header: 'Name' },
//           { field: 'description', header: 'Description' },

//       ];

//       this.items = [
//           { label: 'View', icon: 'pi pi-search', command: (event) => this.viewFile(this.selectedNode) },
//           { label: 'Toggle', icon: 'pi pi-sort', command: (event) => this.toggleFile(this.selectedNode) }
//       ];
//   }

//   viewFile(node) {
//       this.messageService.add({ severity: 'info', summary: 'File Selected', detail: node.name + ' - ' + node.description });
//   }

//   toggleFile(node) {
//       node.expanded = !node.expanded;
//       this.files = [...this.files];
//   }

// }
