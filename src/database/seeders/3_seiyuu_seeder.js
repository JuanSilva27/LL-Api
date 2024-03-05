'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Seiyuu', [
      {
        name: 'Nitta Emi',
        birthday: 'December 10',
        age: 38,
        height: 1.53,
        twitter: 'https://twitter.com/nittaemi85',
        instagram: 'https://www.instagram.com/tnstagram1210',
        description: 'Emi Nitta is a Japanese actress, voice actress, and singer from Nagano Prefecture.',
        photo: 'https://example.com/emitta.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Nanjou Yoshino',
        birthday: 'July 12',
        age: 39,
        height: 1.50,
        twitter: 'https://twitter.com/nanjolno',
        instagram: 'https://instagram.com/nanjolno/',
        description: 'Yoshino Nanjou is a Japanese voice actress and singer known for her role as Eli Ayase in Love Live!. She is also the vocalist of the band fripSide and has been involved in numerous music and anime projects, showcasing her versatility and vocal talent in the Japanese entertainment industry.',
        photo: 'https://example.com/emitta.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Aya Uchida',
        birthday: 'July 23',
        age: 37,
        height: 1.56,
        twitter: 'http://twitter.com/aya_uchida',
        instagram: 'https://www.instagram.com/aya_uchi_da/',
        description: 'Aya Uchida is a Japanese voice actress renowned for her role as Kotori Minami in Love Live!. Apart from her voice acting career, she has also ventured into the music industry as a solo artist, contributing to the vibrant Japanese entertainment scene with her multifaceted talents.',
        photo: 'https://example.com/emitta.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Suzuko Mimori',
        birthday: 'June 28',
        age: 37,
        height: 1.60,
        twitter: 'https://twitter.com/mimori_suzuko',
        instagram: 'https://www.instagram.com/mimorin.official/',
        description: 'Suzuko Mimori is a Japanese voice actress and singer known for her energetic stage presence and bright, expressive voice. Her talent shines in both the anime world and music scene, where she has gained recognition for her performances across a variety of roles and musical genres. ',
        photo: 'https://example.com/emitta.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Riho Iida',
        birthday: 'October 26',
        age: 32,
        height: 1.57,
        twitter: 'https://twitter.com/rippialoha/',
        instagram: 'https://www.instagram.com/rippialoha/',
        description: 'Riho Iida is a talented Japanese voice actress and singer. Her versatility is reflected in her roles in the Japanese entertainment industry, excelling in anime projects and music. Her charismatic presence and artistic skills make her a prominent figure in both fields.',
        photo: 'https://example.com/emitta.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Pile',
        birthday: 'May 2',
        age: 35,
        height: 1.58,
        twitter: 'https://twitter.com/pile_eric',
        instagram: 'https://instagram.com/pi_channnn52/',
        description: 'Her real name is Eriko Hori and is nicknamed as Pile-sama. She is of Japanese and Korean descent.',
        photo: 'https://example.com/emitta.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Yurika Kubo',
        birthday: 'May 19',
        age: 34,
        height: 1.63,
        twitter: 'https://twitter.com/INFO_shikaco',
        instagram: 'https://www.instagram.com/shi_ka_co/',
        description: 'Yurika Kubo is a Japanese voice actress and model born on May 19, 1989, in Nara Prefecture. She is also known as Shikaco. She has participated in series such as Love Live!, Kotoura-san, and Hentai Ōji to Warawanai Neko, among others.',
        photo: 'https://example.com/emitta.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Aina Kusuda',
        birthday: 'February',
        age: 35,
        height: 1.50,
        twitter: 'https://twitter.com/kusudaaina/',
        instagram: 'https://www.instagram.com/kusudaaina/',
        description: 'Aina Kusuda is a Japanese voice actress and singer from Chiba Prefecture. Kusuda is currently affiliated with Just Pro. Kusuda is best known as Nozomi Toujou in Love Live! School Idol Project series, and has worked with the other Love Live! girls in singing multiple songs that have charted on Oricon.',
        photo: 'https://example.com/emitta.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Tokoui Sora',
        birthday: 'December 26',
        age: 34,
        height: 1.59,
        twitter: 'https://twitter.com/tokui_sorangley',
        description: 'Sora Tokui is a Japanese voice actress, singer, and manga artist. She made her voice acting debut in 2009 as Himemiya in Weiß Survive R. She is a member of the group "Milky Holmes," formed by the four main voice actresses of the Tantei Opera Milky Holmes media franchise.',
        photo: 'https://example.com/emitta.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Agrega más objetos para más Seiyuus si lo deseas
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
