const faker = require('faker');

let sqlInserts = [];

for (let i = 0; i < 100; i++) {
    const nome = faker.name.findName();
    const email = faker.internet.email();
    const telefone = faker.phone.phoneNumber('(##) ####-####');

    sqlInserts.push(`INSERT INTO clientes (nome, email, telefone) VALUES ('${nome}', '${email}', '${telefone}');`);
}

console.log(sqlInserts.join('\n'));
