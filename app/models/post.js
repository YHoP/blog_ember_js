import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  text: DS.attr(),
  username: DS.attr(),
  date_added: DS.attr(),
  comments: DS.hasMany('comment', { async: true })
});
