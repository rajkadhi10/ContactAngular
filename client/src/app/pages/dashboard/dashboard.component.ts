import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Contact } from 'src/app/model/contact';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  public isAdding: boolean = true;
  public isEditing: boolean = true;
  public id: number;
  public editIndex: number;

  contactForm: FormGroup;

  contact: Contact;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      contactName: '',
      companyName: '',
      email: '',
      phoneNo: '',
    });
  }

  contactList: Contact[] = [];

  getContacts(): Contact[] {
    return this.contactList;
  }

  deleteContact(id: number) {
    const contactIndex = this.contactList.findIndex((d) => d.id == id);
    this.contactList.splice(contactIndex, 1);
  }

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

  addAndUpdate(isAdd = false) {
    if (isAdd) {
      this.contactList.push(this.contactForm.value);
    } else {
      this.contactList[this.editIndex] = this.contactForm.value;
    }
    this.contactForm.reset();
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
}
