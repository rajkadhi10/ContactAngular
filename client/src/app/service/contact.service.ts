import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Contact} from '../model/contact'

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  // private contactList: Contact[] = [{
  //   id: 1,
  //   contactName: "Komal",
  //   companyName: "Argusoft",
  //   email: "komals0309@gmail.com",
  //   phoneNo: 9193996829
    
  // }]
  constructor() {
    
  }
  // getContact(){
  //   return this.contactList
  // }
  // getContactByID(id: number){
  //   return this.contactList.find(x=> x.id == id)
  // }
  // addContact(contact: Contact){
  //   this.contactList.push(contact)

  // }
  // updateContact(contact: Contact){
  //   const contactIndex = this.contactList.findIndex(x=> x.id == contact.id);
  //   if(contactIndex != null && contactIndex != undefined){
  //     this.contactList[contactIndex] = contact;
  //   }
  // }
  // deleteContact(id: number){
  //   this.contactList = this.contactList.filter(x=> x.id != id)
  // }
  
  
 
  // this.contactService.addContact(contact)

 
}
