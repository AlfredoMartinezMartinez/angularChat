import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
// import { Observable } from 'rxjs/Observable';
import {Mensaje} from '../interface/mensaje.interface';


@Injectable()
export class ChatService {

  private itemsCollection: AngularFirestoreCollection<Mensaje>;
  public chats: Mensaje[]=[];

  constructor(private afs: AngularFirestore) { }

   cargarMensajes(){
     this.itemsCollection = this.afs.collection<Mensaje>('chats');


     return this.itemsCollection.valueChanges().map((mensajes: Mensaje[])=>{
        // console.log(mensajes);//mensajes de firebase
        this.chats=mensajes;
     })
   }
   agregarMensaje( texto:string ){
     //TODO falta UID del usuario
     let mensaje:Mensaje ={
        nombre:'Demo',
        mensaje:texto,
        fecha:new Date().getTime(),
        };

     return this.itemsCollection.add(mensaje);

   }



}
