
exports.seed = function(knex, Promise) {
  return knex.raw('DELETE FROM "badge"; ALTER SEQUENCE badge_id_seq RESTART WITH 2;')
    .then(function () {
      var badges = [{
        id: 1,
        points_needed: 0,
        image: 'coming soon',
        title: 'Networking Noob',
        account_id: 1
      }];
      return knex('badge').insert(badges);
    });
};
