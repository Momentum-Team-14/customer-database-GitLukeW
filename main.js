const container = document.querySelector(".container");

function showCustomerName(customerArray) {
  for (let customer of customerArray) {
    let customerDiv = document.createElement("div");
    customerDiv.classList.add("customer");
    let nameDiv = document.createElement("div");
    nameDiv.classList.add("name");
    nameDiv.innerText = `${customer.name.first} ${customer.name.last}`;
    customerDiv.appendChild(nameDiv);
    container.appendChild(customerDiv);

    // image div here
    let imageDiv = document.createElement("img");
    imageDiv.classList.add("image");
    imageDiv.src = `${customer.picture.large}`;
    customerDiv.appendChild(imageDiv);
    customerDiv.appendChild(nameDiv);

    //Email
    let emailDiv = document.createElement("div");
    emailDiv.classList.add("email");
    emailDiv.innerText = `${customer.email}`;
    customerDiv.appendChild(emailDiv);

    //Street Name
    let streetDiv = document.createElement("div");
    streetDiv.classList.add("street");
    streetDiv.innerText = `${customer.location.street.number} ${customer.location.street.name}`;
    customerDiv.appendChild(emailDiv);
    customerDiv.appendChild(streetDiv);

    //State Name
    let stateAbbrev = nameToAbbr(`${customer.location.state}`);
    let stateDiv = document.createElement("div");
    stateDiv.classList.add("state");
    stateDiv.innerText = `${customer.location.city}, ${stateAbbrev} ${customer.location.postcode}`;
    customerDiv.appendChild(streetDiv);
    customerDiv.appendChild(stateDiv);

    //DOB
    let birthDate = new Date(`${customer.dob.date}`).toLocaleDateString(
      "en-us",
      { year: "numeric", month: "short", day: "numeric" }
    );
    let dobDiv = document.createElement("div");
    dobDiv.classList.add("dob");
    dobDiv.innerText = `DOB: ${birthDate}`;
    customerDiv.appendChild(stateDiv);
    customerDiv.appendChild(dobDiv);

    //Registered Date
    let registeredDate = new Date(
      `${customer.registered.date}`
    ).toLocaleDateString("en-us", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
    let registeredDiv = document.createElement("div");
    registeredDiv.classList.add("registered");
    registeredDiv.innerText = `Customer Since: ${registeredDate}`;
    customerDiv.appendChild(dobDiv);
    customerDiv.appendChild(registeredDiv);
  }
}
showCustomerName(customers);
