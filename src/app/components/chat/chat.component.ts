import { Component } from '@angular/core';
import {ChatService} from '../../providers/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: []
})
export class ChatComponent{

  mensaje:string="";

  constructor(public _cs:ChatService) {
    this._cs.cargarMensajes().subscribe();
  }

  enviar_mensaje(){
    console.log(this.mensaje);
    if(this.mensaje.length===0)
    return;
    else{
      this._cs.agregarMensaje(this.mensaje)
        .then(()=>{this.mensaje="";console.log("mensaje enviado")})
        .catch((err)=>console.log('error al enviar',err));
    }

  }


}
