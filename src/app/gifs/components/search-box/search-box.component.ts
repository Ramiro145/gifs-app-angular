import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  template: `
    <h5>Buscar: </h5>
    <input
    class="form-control"
    type="text"
    placeholder="Buscar gifs..."
    (keyup.enter)="searchTag()"
    #txtTagInput
    >
  `
})

export class SearchBoxComponent{

  //nos sirve para tomar una referencia local
  @ViewChild('txtTagInput')
  public tagInput!:ElementRef<HTMLInputElement>;

  constructor(private gifsService:GifsService){}

  searchTag(){
    const newTag = this.tagInput.nativeElement.value;

    //agregamos en el array del servicio nuestros datos de input
    this.gifsService.searchTag(newTag);

    this.tagInput.nativeElement.value ="";

  }

}
