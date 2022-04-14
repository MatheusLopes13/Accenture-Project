import { Component, OnInit } from '@angular/core';
import { CrudService } from '../shared/services/crud.service';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.scss']
})
export class TableListComponent implements OnInit {
  
  faTrash = faTrash;
  faEdit = faEdit;

  tableData: any
  valueBox: any;
  code = new FormControl('',Validators.required);
  returnName = new FormControl('',Validators.required);
  selectInput = new FormControl('',Validators.required);
  description = new FormControl('');
  
  page = 1;
  perPage = 20;
  
  constructor(
    private crudService: CrudService,
    private route: Router
  ) { }


  ngOnInit(): void {
    this.getData() 
    this.comboBox()
    
  }

  changePage(event: any) {
 
    this.page = event.page;
    this.perPage = event.itemsPerPage;
    this.getData();
  }

  getData(){
    this.crudService.getData(this.page, this.perPage).subscribe((x) => {
      this.tableData = x
      
    })
  }

  delete(id: number){
     this.crudService.delete(id).subscribe(()=> {
       this.getData()
    })
  }

  comboBox(){   // preenche meu select.
    this.crudService.comboBox().subscribe((y)=>{
      this.valueBox= y;  
    })
  
  }
 
  
  goToEdit(obj?: any){
    this.route.navigate(['/edit'], {queryParams: obj ? obj : null})

  }

      
  clearFilters(){
    this.getData()
    this.code.setValue('')
    this.returnName.setValue('')
    this.selectInput.setValue('')
  

  }

  filter(){
    
    this.crudService.filter(this.perPage, this.page, this.selectInput.value, this.code.value, this.returnName.value)
    .subscribe((result)=>{
      this.tableData = result

    })
  }
  


}
