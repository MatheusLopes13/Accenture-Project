import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from '../shared/services/crud.service';
import { faArrowLeft, faSave } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  valueBox: any;
  code = new FormControl('',Validators.required);
  returnName = new FormControl('',Validators.required);
  selectInput = new FormControl('',Validators.required);
  description = new FormControl('');
  faArrowLeft = faArrowLeft;
  faSave = faSave;
  editObj: any;

  constructor(
    private crudService: CrudService,
    private route: Router,
    private actRoute: ActivatedRoute
    ) {}

  ngOnInit(): void {
    this.comboBox();

    // funçao que pega o valor passado por paramentro da url
    this.actRoute.queryParamMap.subscribe((obj: any) => {
      if(obj.params.identificadorDescricaoRetorno) {
        this.editObj = obj.params; 
        this.setValue();
      }
    })
      
  }
    // seta os campos com os valores que chegando por parametro 
    setValue(){
      this.code.setValue(this.editObj.codigoDescricaoRetorno)
      this.description.setValue(this.editObj.mensagemDescricaoRetorno)
      this.selectInput.setValue(this.editObj.codigoAplicacao)
      this.returnName.setValue(this.editObj.nomeDescricaoRetorno)
    }

   comboBox(){
    this.crudService.comboBox().subscribe((y)=>{
      this.valueBox= y;    
    })
  }

  save() {
    
    const obj: any = {
      codigoAplicacao: this.selectInput.value, 
      codigoDescricaoRetorno: this.code.value,
      mensagemDescricaoRetorno: this.description.value, 
      nomeDescricaoRetorno: this.returnName.value,
    }

    this.editObj ? this.edit(obj) : this.create(obj);
    this.goBack()
  }

  edit(obj: any) {
    obj.identificadorDescricaoRetorno = this.editObj.identificadorDescricaoRetorno
    this.crudService.edit(obj).subscribe(() => {
      console.log('editado')
    })
  }

  create(obj: any) {
    this.crudService.create(obj).subscribe(() => {
      console.log('criado')
    })
  }

  goBack() {
    this.route.navigate(['/'])
  }
}
