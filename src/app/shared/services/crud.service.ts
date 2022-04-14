import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(
    private http: HttpClient
  ) { }


  getData(page: number, perPage: number) {
    return this.http.get('http://localhost:8080/api/parametro/1.0.0/descricoesretornos?per_page=' + perPage + '&page=' + page)
  }

  delete(id: number) {
    return this.http.delete('http://localhost:8080/api/parametro/1.0.0/descricoesretornos/' + id)
  }

  comboBox() {
    return this.http.get('http://localhost:8080/api/sistema/1.0.0/dominios/1175/conteudos?per_page=200&page=1')
  }

  edit(obj: any) {
    return this.http.put('http://localhost:8080/api/parametro/1.0.0/descricoesretornos/' + obj.identificadorDescricaoRetorno, obj)
  }

  create(obj: any) {
    return this.http.post('http://localhost:8080/api/parametro/1.0.0/descricoesretornos/', obj)
  }

  filter(perpage: number, page: number, select: string,
    code: string, returnName: string) {  

    let endpoint = 'http://localhost:8080/api/parametro/1.0.0/descricoesretornos?per_page= ' + perpage + '&page=' + page;
    
    if (code) {
      endpoint += '&codigoDescricaoRetorno=' + code;  //
    }

    if (select) {   // os ifs veirificam se eu mando alguma coisa de filtro, caso nao mande eu somente populo a tabela
      endpoint += '&codigoAplicacao=' + select;
    }

    if (returnName) {
      endpoint += '&nomeDescricaoRetorno=' + returnName;  //esses if's servem para utilizar o filtro, ao mesmo tempo em que a função callApi faz a população da tabela ela tmb faz a filtragem dos dados da tabela
    }
    
    return this.http.get(endpoint);
  } 

}

