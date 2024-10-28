const { faker, Faker } = require('@faker-js/faker');

function criarPessoa() {
    return {
        nome: faker.person.fullName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        animal: faker.animal.bird(),
    };
}

module.exports = criarPessoa;
