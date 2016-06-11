// lol old jquery code
// $(document).ready(function(){
// 	$('.name').fitText(0.8, {maxFontSize: '90px'});
// });

// backbone.js oh hell yeah
$(function(){
	var projectTemplate = _.template($('#tmplProject').html());
	var projectURLTemplate = _.template($('#tmplProjectURL').html())

	var ProjectView = Backbone.View.extend({
		render: function() {
			this.$el.html(projectTemplate(this.model));
			var linkEl = this.$el.find('.project-urls');
			for(var link in this.model.links)
				linkEl.append(projectURLTemplate({text: link, url: this.model.links[link]}));
		}
	})

	$.getJSON('js/projects.json').then(function(res){
		res.forEach(function(project, i){
			project.index = i;
			project.tags = project.tags.map(function(tag){return '#'+tag;});
			var view = new ProjectView({model: project});
			view.render();
			$('#projects').append(view.el);
		})
	});

})
