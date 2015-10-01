import Ember from 'ember';

export default Ember.Component.extend({
  updateCommentForm: false,
  actions: {
    updateCommentShow() {
      this.set('updateCommentForm', true);
    },
    updateComment(comment) {
      debugger;
      var today = new Date();
      var params = {
        username: this.get('username'),
        text: this.get('text'),
        date_added: today.toString(),
        post: this.post
      };
      this.set('updateCommentForm', false);
      this.sendAction('updateComment', comment, params);
    }
  }
});
