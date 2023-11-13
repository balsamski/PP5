class Customer{
    constructor(){}

    name: string = "";
    nip: string = "";
    city: string = "";
    street: string = "";
    houseNumber: string = "";
    zipCode: string = "";
    comments: string = "";
    industry: string = "";
    active: boolean = true

    getAddress():string {
        return `${this.city} ${this.zipCode} ${this.street} ${this.houseNumber}`;
    }
    getCustomerInfo():string {
        return `${this.name} (${this.nip})`;
    }
}

class Supplier extends Customer{
    constructor(accountNumber: any){
        super();
        accountNumber = accountNumber;
    }
    accountNumber:string  = "";
    invoices:Invoice[] = [];
}