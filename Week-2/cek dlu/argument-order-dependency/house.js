"use strict"

class House {

  constructor(components) {
    this.address = components["address"];
    this.square_feet = components["square_feet"];
    this.num_bedrooms = components["num_bedrooms"] || 3
    this.num_baths = components["num_baths"] || 2
    this.cost = components["cost"] || 320000
    this.down_payment = components["down_payment"] || 0.20
    this.sold = components["sold"] || false
    this.short_sale = components["short_sale"]
    this.has_tenants = components["has_tenants"] || false
  }

  changeFlag(components) {
    if (components && components.hasOwnProperty("sold")) {
      this.sold = components["sold"];
    }
    else {
      this.sold = false;
    }
    if (components && components.hasOwnProperty("has_tenants")) {
      this.sold = components["has_tenants"];
    }
    else {
      this.sold = false;
    }
  }

  obscure_address() {
    this.address.replace(/.{10}$/g, '****')
  }

  buy(money, good_credit) {
    if (money >= down_payment && good_credit)
      this.sold = true;
  }

  down_payment() {
    return cost * this.down_payment
  }

  to_s() {
    return `${obscure_address} : ${square_feet} sq. ft., ${num_bedrooms} bed, ${num_baths} bath. ${cost}`
  }
}



var house = new House({address: "sasa"})

house.changeFlag();
console.log(house.sold);

house.changeFlag({has_tenants: true})
console.log(house.sold);
