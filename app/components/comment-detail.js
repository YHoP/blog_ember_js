import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deleteComment(comment) {
      comment.destroyRecord().then(function() {
        post.save();
      });
      this.transitionTo('post');
    },
    updateComment(comment,params) {
      // debugger;
      this.set('updateCommentForm', false);
      this.sendAction('updateComment', comment, params);
    }
  }
});
