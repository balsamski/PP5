
const customersList = [];

function showCustomer() {
  document.getElementById("customer-list").innerHTML = '';
  customersList.forEach((customer) => {
    let ul = document.getElementById("customer-list");
    ul.innerHTML += `<li class="list-group-item" onclick="showForm();loadClient(${customer.nip});">${customer.name} (${customer.nip})</li>`;
  });
  showList();
}

function showForm(){
  document.getElementById("client-form").style.display = "block";
  document.getElementById("client-list").style.display = "none";
}

function showList(){
  document.getElementById("client-form").style.display = "none";
  document.getElementById("client-list").style.display = "block";
}

function save(event) {
  event.preventDefault();
  let newCustomer = {
      name: document.getElementById("company-name").value,
      nip: document.getElementById("nip").value,
      city: document.getElementById("city").value,
      street: document.getElementById("street").value,
      houseNumber: document.getElementById("house-number").value,
      zipCode: document.getElementById("zipcode").value,
      comments: document.getElementById("comments").value,
      industry: document.getElementById("industry").value,
      active: document.getElementById("active").checked,
  }
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

function loadClient(nip) {
  let newCustomer = customersList.find((customer) => customer.nip == nip);
  if(newCustomer == null){
    newCustomer = getEmptyCustomer();
  }
  document.getElementById("company-name").value = newCustomer.name
  document.getElementById("nip").value = newCustomer.nip
  document.getElementById("city").value = newCustomer.city
  document.getElementById("street").value = newCustomer.street
  document.getElementById("house-number").value = newCustomer.houseNumber
  document.getElementById("zipcode").value = newCustomer.zipCode
  document.getElementById("comments").value = newCustomer.comments
  document.getElementById("industry").value = newCustomer.industry
  document.getElementById("active").checked = newCustomer.active
}

function getEmptyCustomer(){
  return {
        name: "",
        nip: '',
        city: "",
        street: "",
        houseNumber: '',
        zipCode: '',
        comments: "",
        industry: '',
        active: true,
    };
}