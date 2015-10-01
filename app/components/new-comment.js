import Ember from 'ember';

export default Ember.Component.extend({
  addNewComment: false,
  actions: {
    commentFormShow() {
      this.set('addNewComment', true);
    },

    saveComment() {
      var today = new Date();
      var params = {
        text: this.get('text'),
        username: this.get('username'),
        date_added: today.toString()
      };
      this.set('addNewComment', false);
      this.sendAction('saveComment', params);
    }
  }
});
