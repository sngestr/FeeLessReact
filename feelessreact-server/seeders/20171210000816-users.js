'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Altering commands.
      Return a promise to correctly handle asynchronicity.
    */
    return queryInterface.bulkInsert('Users', [{
      first_name: 'Esther',
      last_name: 'Song',
      email: 'Song@mail.com',
      password_hash: '$2a$10$LrPNx3XezYi3nyFgnM.bTOwrtfjfKSuflfy6ghcYVsXifzEpSnAJm',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      first_name: 'Joseph',
      last_name: 'Huaynate',
      email: 'Huaynate@mail.com',
      password_hash: '$2a$10$LrPNx3XezYi3nyFgnM.bTOwrtfjfKSuflfy6ghcYVsXifzEpSnAJm',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      first_name: 'Alon',
      last_name: 'Butbul',
      email: 'Butbul@mail.com',
      password_hash: '$2a$10$LrPNx3XezYi3nyFgnM.bTOwrtfjfKSuflfy6ghcYVsXifzEpSnAJm',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      first_name: 'Patrycja',
      last_name: 'Krawczuk',
      email: 'Krawczuk@mail.com',
      password_hash: '$2a$10$LrPNx3XezYi3nyFgnM.bTOwrtfjfKSuflfy6ghcYVsXifzEpSnAJm',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      first_name: 'Edgardo',
      last_name: 'Molina',
      email: 'Molina@mail.com',
      password_hash: '$2a$10$LrPNx3XezYi3nyFgnM.bTOwrtfjfKSuflfy6ghcYVsXifzEpSnAJm',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      first_name: 'Elise',
      last_name: 'Harris',
      email: 'Harris@mail.com',
      password_hash: '$2a$10$LrPNx3XezYi3nyFgnM.bTOwrtfjfKSuflfy6ghcYVsXifzEpSnAJm',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      first_name: 'John',
      last_name: 'Doe',
      email: 'Doe@mail.com',
      password_hash: '$2a$10$LrPNx3XezYi3nyFgnM.bTOwrtfjfKSuflfy6ghcYVsXifzEpSnAJm',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      first_name: 'Barack',
      last_name: 'Obama',
      email: 'Obama@mail.com',
      password_hash: '$2a$10$LrPNx3XezYi3nyFgnM.bTOwrtfjfKSuflfy6ghcYVsXifzEpSnAJm',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      first_name: 'Mary',
      last_name: 'Sue',
      email: 'Sue@mail.com',
      password_hash: '$2a$10$LrPNx3XezYi3nyFgnM.bTOwrtfjfKSuflfy6ghcYVsXifzEpSnAJm',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      first_name: 'Magic',
      last_name: 'Unicorn',
      email: 'Unicorn@mail.com',
      password_hash: '$2a$10$LrPNx3XezYi3nyFgnM.bTOwrtfjfKSuflfy6ghcYVsXifzEpSnAJm',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      first_name: 'Risa',
      last_name: 'Toyoshima',
      email: 'Toyoshima@mail.com',
      password_hash: '$2a$10$LrPNx3XezYi3nyFgnM.bTOwrtfjfKSuflfy6ghcYVsXifzEpSnAJm',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      first_name: 'Dandan',
      last_name: 'Lin',
      email: 'Lin@mail.com',
      password_hash: '$2a$10$LrPNx3XezYi3nyFgnM.bTOwrtfjfKSuflfy6ghcYVsXifzEpSnAJm',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      first_name: 'Heidi',
      last_name: 'Wu',
      email: 'Wu@mail.com',
      password_hash: '$2a$10$LrPNx3XezYi3nyFgnM.bTOwrtfjfKSuflfy6ghcYVsXifzEpSnAJm',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      first_name: 'Olga',
      last_name: 'Kent',
      email: 'Kent@mail.com',
      password_hash: '$2a$10$LrPNx3XezYi3nyFgnM.bTOwrtfjfKSuflfy6ghcYVsXifzEpSnAJm',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Reverting commands.
      Return a promise to correctly handle asynchronicity.
    */
    return queryInterface.bulkDelete('Users', [{
      email: 'Song@mail.com',
    }, {
      email: 'Huaynate@mail.com',
    }, {
      email: 'Butbul@mail.com',
    }, {
      email: 'Krawczuk@mail.com',
    }, {
      email: 'Molina@mail.com',
    }, {
      email: 'Harris@mail.com',
    }, {
      email: 'Doe@mail.com',
    }, {
      email: 'Obama@mail.com',
    }, {
      email: 'Sue@mail.com',
    }, {
      email: 'Unicorn@mail.com',
    }, {
      email: 'Toyoshima@mail.com',
    }, {
      email: 'Lin@mail.com',
    }, {
      email: 'Wu@mail.com',
    }, {
      email: 'Kent@mail.com',
    }], {});
  }
};
