import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('comment', params.comment_id);
  },

  actions: {
    updateComment(comment, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key] !== undefined) {
          post.set(key, params[key]);
        }
      });
      comment.save();
    },

    deleteComment(comment) {
      comment.destroyRecord().then(function() {
        post.save();
      });
      this.transitionTo('post');
    }
  }
});
