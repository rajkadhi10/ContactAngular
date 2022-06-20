import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Contact } from 'src/app/model/contact';
import { ContactService } from 'src/app/service/contact.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [ContactService]
})
export class DashboardComponent implements OnInit {
  public isAdding: boolean = true;
  public isEditing: boolean = true;
  public id: number;
  public editIndex: number;

  contactForm: FormGroup;

  contact: Contact;
  contactData = null;

  constructor(
    private formBuilder: FormBuilder,
    private contactService: ContactService
    
    ) {}

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      contactName: '',
      companyName: '',
      email: '',
      phoneNo: '',
    });
    this.contactService.getContacts().subscribe((data)=>{
      this.contactData= data;
    })
  }

  contactList: Contact[] = [];

  editContactBeforeSaving(index: number) {
    const newLocal = this.contactList[index];
    this.editIndex = index;
    this.contactForm.patchValue({
      contactName: newLocal?.contactName,
      companyName: newLocal?.companyName,
      email: newLocal?.email,
      phoneNo: newLocal?.phoneNo,
    });
  }

  showModalButton(isAdding = true) {
    if (isAdding) {
      this.isEditing = false;
    } else {
      this.isAdding = false;
      this.isEditing = true;
    }
  }
  resetFormData() {
    this.contactForm.reset();
  }

  //get contact
  getData(){
    this.contactService.getContacts().subscribe((data)=>{
      this.contactData= data;
    })
  }


//add contact
  submitData(value: any) {
    const body = {
      contactName: value.contactName,
      companyName: value.companyName,
      email: value.email,
      phoneNo: value.phoneNo
    }
    this.contactService.addContact(body).subscribe(res => {
      console.log(res);
      })
  }

  //delete contact
  delete(id: number) {
    this.contactService.deleteContact(id).subscribe(response => {
        console.log(response);
        this.getData()
      })
  }

  //updateContact
  updateData(value: any) {
    const body = {
      contactName: value.contactName,
      companyName: value.companyName,
      email: value.email,
      phoneNo: value.phoneNo
    }

    this.contactService.updateContact(body, this.id)
      .subscribe(response => {
        console.log(response)
      })
  }
}
