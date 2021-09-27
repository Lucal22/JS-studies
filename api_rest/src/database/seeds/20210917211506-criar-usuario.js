const bcryptjs = require('bcryptjs');

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('users', [{
    nome: 'Luis',
    email: 'luis@email.com',
    password_hash: await bcryptjs.hash('123456', 8),
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    nome: 'José',
    email: 'jose@email.com',
    password_hash: await bcryptjs.hash('654321', 8),
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    nome: 'Fabrizzia',
    email: 'fabrizzia@email.com',
    password_hash: await bcryptjs.hash('678910', 8),
    created_at: new Date(),
    updated_at: new Date(),
  }],
  {}),

  down: () => {},
};
