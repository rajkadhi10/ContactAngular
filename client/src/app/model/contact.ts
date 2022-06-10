export class Contact{
    id: number;
    contactName: string;
    companyName: string;
    email: string;
    phoneNo: number;

    constructor(id: number, name: string, company: string, email: string, phone: number) {
        this.id = id;
        this.contactName = name;
        this.companyName = company;
        this.email = email;
        this.phoneNo = phone
    }
    
}