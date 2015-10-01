import Ember from 'ember';

export default Ember.Component.extend({
  updateCommentForm: false,
  actions: {
    updateCommentShow() {
      this.set('updateCommentForm', true);
    },
    
    updateComment(comment) {
      var today = new Date();
      var params = {
        text: this.get('text'),
        username: this.get('username'),
        date_added: today.toString()
      };
      this.set('updateCommentForm', false);
      this.sendAction('updateComment', comment, params);
    }
  }
});
