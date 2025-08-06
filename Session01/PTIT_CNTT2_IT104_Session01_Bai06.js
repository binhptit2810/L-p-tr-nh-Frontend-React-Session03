function createUser(name, age = 18, role = "user") {
  const user = {
    name: name,
    age: age,
    role: role,
  };

  return user;
}
console.log(createUser("Dev"))
console.log(createUser("Nguyen van a",20,"admin"))
