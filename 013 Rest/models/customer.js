const db = require("../config/database.js");

function Customer(customer) {
  this.email = customer.email;
  this.name = customer.name;
  this.active = customer.active;
}

Customer.create = (newCustomer, result) => {
  db.query("INSERT INTO customers SET ?", newCustomer, (err, res) => {
    if (err) {
      console.error("error : ", err);
      result(err, null);
      return;
    }
    console.log("Customer created : ", { id: res.insertId, ...newCustomer });
    result(null, { id: res.insertId, ...newCustomer });
  });
};

Customer.updateById = (id, customer, result) => {
	db.query(
	  "UPDATE customers SET email = ?, name = ?, active = ? WHERE id = ?",
	  [customer.email, customer.name, customer.active, id],
	  (err, res) => {
		if (err) {
		  console.log("error: ", err);
		  result(null, err);
		  return;
		}
  
		if (res.affectedRows == 0) {
		  // not found Customer with the id
		  result({ kind: "not_found" }, null);
		  return;
		}
  
		console.log("updated customer: ", { id: id, ...customer });
		result(null, { id: id, ...customer });
	  }
	);
  };

Customer.findById = (id, result) => {
	db.query(`SELECT * FROM customers WHERE id = ?`,id, (err, res) => {
	  if (err) {
		console.log("error: ", err);
		result(err, null);
		return;
	  }
  
	  if (res.length) {
		console.log("found customer: ", res[0]);
		result(null, res[0]);
		return;
	  }
  
	  // not found Customer with the id
	  result({ kind: "not_found" }, null);
	});
  };

Customer.all = (result) => {
  db.query("SELECT * FROM customers", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("customers: ", res);
    result(null, res);
  });
};

Customer.remove = (id, result) => {
  db.query("DELETE FROM customers WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error : ", err);
      result(null, err);
      return;
    }
    if (res.affectedRows == 0) {
      result({ kink: "not-found" }, null);
    }
    console.log("deleted customer with id: ", id);
    result(null, res);
  });
};

Customer.removeAll = (result) => {
  db.query("DELETE FROM customers", (err, res) => {
    if (err) {
      console.error("error : ", err);
      result(null, err);
    }

    console.log(`deleted ${res.affectedRows} customers`);
    result(res, null);
  });
};

module.exports = Customer;
