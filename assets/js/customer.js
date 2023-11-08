function Customer(){
    this.name = "";
    this.nip = "";
    this.city = "";
    this.street = "";
    this.houseNumber = "";
    this.zipCode = "";
    this.comments = "";
    this.industry = "";
    this.active = true
}

function Supplier(accountNumber){
    this.accountNumber = accountNumber;
    this.invoices = [];
}
Supplier.prototype = new Customer();