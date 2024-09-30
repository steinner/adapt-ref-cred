define([
  'core/js/adapt',
  'core/js/views/componentView',
  'core/js/models/componentModel'
], function(Adapt, ComponentView, ComponentModel) {

  const RefCredView = ComponentView.extend({
    postRender: function() {
      this.setReadyStatus();
      this.setupInviewCompletion();
      this.changeColorBlock();
    },

    changeColorBlock: function(){      
      this.$el[0].parentNode.parentNode.classList.add('gray-bg');
    }
  });

  const RefCredModel = ComponentModel.extend({
    // Implement your component model
  });

  return Adapt.register('refCred', {
    model: RefCredModel,
    view: RefCredView
  });

});
