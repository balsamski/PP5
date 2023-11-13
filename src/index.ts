
const customersList:Customer[] = [];

function showCustomer() {
  let customerList: HTMLElement = getElementById("customer-list") as HTMLElement;
  customerList.innerHTML = '';
  customersList.forEach((customer) => {
    let ul = getElementById("customer-list") as HTMLElement;;
    ul.innerHTML += `<li class="list-group-item" onclick="showForm();loadClient(${customer.nip});">${customer.getCustomerInfo()}</li>`;
  });
  showList();
}

function showForm(){
  getElementById("client-form").style.display = "block";
  getElementById("client-list").style.display = "none";
}

function showList(){
  getElementById("client-form").style.display = "none";
  getElementById("client-list").style.display = "block";
}

function save(event: Event) {
  event.preventDefault();
  let newCustomer = new Customer();
  newCustomer.name = getElementById("company-name").value;
  newCustomer.nip = getElementById("nip").value;
  newCustomer.city = getElementById("city").value;
  newCustomer.street = getElementById("street").value;
  newCustomer.houseNumber = getElementById("house-number").value;
  newCustomer.zipCode = getElementById("zipcode").value;
  newCustomer.comments = getElementById("comments").value;
  newCustomer.industry = getElementById("industry").value;
  newCustomer.active = getElementById("active").checked;

  console.log(newCustomer)
  let foundCustomer = null;
  for (let i = 0; i < customersList.length; i++) {
    if(customersList[i].nip == newCustomer.nip){
      foundCustomer = customersList[i];
      customersList[i] = newCustomer;
    }
  }
  if(foundCustomer == null){
    customersList.push(newCustomer);
  }
  console.log(customersList)
  showCustomer();
}

function loadClient(nip: string) {
  let newCustomer = customersList.find((customer) => customer.nip == nip);
  console.log(newCustomer)
  if(newCustomer == null){
    newCustomer = new Customer()
  }
  getElementById("company-name").value = newCustomer.name
  getElementById("nip").value = newCustomer.nip
  getElementById("city").value = newCustomer.city
  getElementById("street").value = newCustomer.street
  getElementById("house-number").value = newCustomer.houseNumber
  getElementById("zipcode").value = newCustomer.zipCode
  getElementById("comments").value = newCustomer.comments
  getElementById("industry").value = newCustomer.industry
  getElementById("active").checked = newCustomer.active
}

function getElementById(elementName: string): HTMLInputElement{
  return document.getElementById(elementName) as HTMLInputElement;
}