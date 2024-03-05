'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Characters', [
      {
        name: 'Honoka Kousaka',
        birthday: 'August 16',
        age: 16,
        height: 1.57,
        sizes: '78/58/82',
        idol_groupId: 1,
        subunitId: 1,
        color: '#e2732d',
        signature: 'HonokaSignatureUrl',
        photo: 'Url',
        seiyuuId: 1,
        description: 'She is one of the nine protagonists of Love Live! and the leader of μ´s.',
        icon: "Url",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Eli Ayase',
        birthday: 'October 21',
        age: 17,
        height: 1.62,
        sizes: '88/60/84',
        idol_groupId: 1,
        subunitId: 3,
        color: '#36b3dd',
        signature: 'EliSignatureUrl',
        photo: 'Url',
        seiyuuId: 2,
        description: 'Eli is a third year high school student. She is a quarter Russian. She is clear-headed, has unparalleled physical flexibility, and can do almost everything at an above-average level. Even at school, she is very popular, and is admired for having a strong sense of responsibility.',
        icon: "Url",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Kotori Minami',
        birthday: 'September 16',
        age: 16,
        height: 1.59,
        sizes: '80/58/80',
        idol_groupId: 1,
        subunitId: 1,
        color: '#8c9395',
        signature: 'KotoriSignatureUrl',
        photo: 'Url',
        seiyuuId: 3,
        description: 'Kotori is a second year high school student and Honoka´s very first friend. These childhood friends have been together since kindergarten. In direct content with Honoka, she has a soft and quiet demeanor befitting of her honors student status. While she may be quiet, she is a strong and confident girl.',
        icon: "Url",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Umi Sonoda',
        birthday: 'March 15',
        age: 16,
        height: 1.59,
        sizes: '76/58/80',
        idol_groupId: 1,
        subunitId: 2,
        color: '#1660a5',
        signature: 'UmiSignatureUrl',
        photo: 'Url',
        seiyuuId: 4,
        description: 'Umi is a second year high school student. She was brought up in the household of a dance school headmaster, which has helped her to become a graceful girl with an imperious air. She has practiced archery since her childhood and has flawless etiquette. She is the type of girl who is hard on those around her, but is especially hard on herself. She does not like doing anything remotely criminal, and abhors laziness. Honoka and Kotori are her childhood friends.',
        icon: "Url",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Rin Hoshizora',
        birthday: 'Novembre 1',
        age: 15,
        height: 1.55,
        sizes: '75/59/80',
        idol_groupId: 1,
        subunitId: 2,
        color: '#f1c51f',
        signature: 'RinSignatureUrl',
        photo: 'Url',
        seiyuuId: 5,
        description: 'Rin is a first year high school student who is quite athletic and optimistic. She would rather take action and keep moving instead of sit and think. She will participate in anything, as long as it seems to be fun. She finds joy in helping and looking after others, especially her good friend, Hanayo. No matter what anyone says, she always gives practice her all.',
        icon: "Url",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Maki Nishikino',
        birthday: 'April 19',
        age: 15,
        height: 1.61,
        sizes: '78/56/83',
        idol_groupId: 1,
        subunitId: 3,
        color: '#cc3554',
        signature: 'MakiSignatureUrl',
        photo: 'Url',
        seiyuuId: 6,
        description: 'Maki is a first year high school student whose parents run a large, successful hospital. She is known among her peers as being an outstanding singer who is also rather adept at playing the piano. She is high-handed to the point of arrogance and has difficulty expressing her feelings. She is quite courageous, never hesitating to incite an argument, even with her upperclassmen. Even so, she has a side that she keeps hidden as best she can-she gets lonely very easily.',
        icon: "Url",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Hanayo Koizumi',
        birthday: 'Novembre 1',
        age: 15,
        height: 1.56,
        sizes: '82/60/83',
        idol_groupId: 1,
        subunitId: 1,
        color: '#54ab48',
        signature: 'HanayoSignatureUrl',
        photo: 'Url',
        seiyuuId: 7,
        description: 'Even though Hanayo is a first year high school student, she struggles more than others to stand out in class due to her meek personality. She lacks any traces of self-confidence and tends to give up on everything she attempts. She adores μ´s, so she decides to join the school idol group along with her reluctant friends, Rin and Maki. She gets along well with Rin, and they quickly grow inseparable. She is perfectly happy eating a bowl of nothing but white rice.',
        icon: "Url",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Nozomi Tojo',
        birthday: 'June 9',
        age: 17,
        height: 1.59,
        sizes: '90/60/82',
        idol_groupId: 1,
        subunitId: 2,
        color: '#744791',
        signature: 'NozomiSignatureUrl',
        photo: 'Url',
        seiyuuId: 8,
        description: 'Nozomi is a third year high school student. In direct content to Eli, she has an easygoing personality and has a unique manner of speaking, due to her relaxed-sounding Kansai dialect. She and Eli make a good combination, with Nozomi acting as Eli´s foil. She has a motherly heart, leading others to think that she is the most mature of the members. Although she seems nonchalant, she can be surprisingly conniving.',
        icon: "Url",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Nico Yazawa',
        birthday: 'Novembre 1',
        age: 17,
        height: 1.54,
        sizes: '74/57/79',
        idol_groupId: 1,
        subunitId: 3,
        color: '#d54e8d',
        signature: 'NicoSignatureUrl',
        photo: 'Url',
        seiyuuId: 9,
        description: 'Nico is a third year high school student. She works hard to become an idol day in and day out a true idol otaku. As the other´s upperclassman working hard to become an idol, Nico often bosses Honoka and her friends around. While she may talk big, Nico does mess up a lot, making her an unexpectedly klutzy girl. Her rather forced catch phrases is "Nico-Nico-Ni!"',
        icon: "Url",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {})
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
