import DS from 'ember-data';

export default DS.Model.extend({
  post: DS.belongsTo('post', { async: true }),
  text: DS.attr(),
  username: DS.attr(),
  date_added: DS.attr()
});
