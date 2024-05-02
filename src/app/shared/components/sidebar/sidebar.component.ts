import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  constructor(private gifsService:GifsService){}

  //es necesario un getter para retornar los datos en el servicio
  //donde se emplea otro getter
  get tags():string[]{
    return this.gifsService.tagsHistory;
  }

  tagUpdated:string = "";

  public reloadImages(tag:string):void{
    if(this.tagUpdated === tag)return;

    this.tagUpdated = tag;
    this.gifsService.searchTag(tag);
  }

}
