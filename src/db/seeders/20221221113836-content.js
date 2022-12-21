/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [{
      name: 'admin',
      email: 'admin@mail.ru',
      password: 'admin',
      isAdmin: true,
    }], {});

    await queryInterface.bulkInsert('Orders', [{
      name: 'Watch 1',
      image: 'https://photo.watches.ru/127876/62233-n.jpg?ts=1631419586',
      userId: 1,
      status: true,
    },
    {
      name: 'Watch 2',
      image: 'https://photo.watches.ru/121709/48162-n.jpg?ts=1570126252',
      userId: 1,
      status: true,
    },
    {
      name: 'Watch 3',
      image: 'https://photo.watches.ru/103574/22182-n.jpg?ts=1643876246',
      userId: 1,
      status: true,
    },
    {
      name: 'Watch 4',
      image: 'https://photo.watches.ru/125991/59245-n.jpg?ts=1622012026',
      userId: 1,
      status: true,
    },
    {
      name: 'Watch 5',
      image: 'https://photo.watches.ru/94028/14509-n.jpg?ts=1643875905',
      userId: 1,
      status: true,
    },
    {
      name: 'Watch 6',
      image: 'https://photo.watches.ru/102309/20780-n.jpg?ts=1491412870',
      userId: 1,
      status: true,
    },
    {
      name: 'Watch 7',
      image: 'https://photo.watches.ru/117102/43708-n.jpg?ts=1652251061',
      userId: 1,
      status: true,
    },
    {
      name: 'Watch 8',
      image: 'https://photo.watches.ru/110681/31843-n.jpg?ts=1510310492',
      userId: 1,
      status: true,
    },
    {
      name: 'Watch 9',
      image: 'https://photo.watches.ru/123746/57517-n.jpg?ts=1613916125',
      userId: 1,
      status: true,
    },
    {
      name: 'Watch 10',
      image: 'https://photo.watches.ru/113700/35250-n.jpg?ts=1644701231',
      userId: 1,
      status: true,
    },
    {
      name: 'Watch 11',
      image: 'https://photo.watches.ru/53940/12861-n.jpg?ts=1434709396',
      userId: 1,
      status: true,
    },
    {
      name: 'Watch 12',
      image: 'https://photo.watches.ru/123855/57541-n.jpg?ts=1613916155',
      userId: 1,
      status: true,
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
    await queryInterface.bulkDelete('Orders', null, {});
  },
};
