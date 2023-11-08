class Customer{
    constructor(){}

    name = "";
    nip = "";
    city = "";
    street = "";
    houseNumber = "";
    zipCode = "";
    comments = "";
    industry = "";
    active = true
}

class Supplier extends Customer{
    constructor(accountNumber){
        accountNumber = accountNumber;
        super();
    }
    accountNumber = "";
    invoices = [];
}