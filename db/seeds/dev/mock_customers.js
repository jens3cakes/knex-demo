const faker = require('faker');
const count = 10;
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('customers').del()
    .then(function () {
      // Inserts seed entries
      return knex('customers').insert([
        {id: 1, 
          first_name: faker.name.firstName(), 
          last_name: faker.name.lastName(),
          email: faker.internet.email()
        },
        {id: 2, 
          first_name: faker.name.firstName(),
          last_name: faker.name.lastName(),
          email: faker.internet.email()
        },
        {id: 3, first_name: faker.name.firstName(),
        }
      ]);
    });
};
