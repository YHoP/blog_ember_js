import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  text: DS.attr(),
  username: DS.attr(),
  date_added: DS.attr(),
  comment: DS.hasMany('comment', { async: true })
});
