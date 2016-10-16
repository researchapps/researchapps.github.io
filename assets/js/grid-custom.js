(function($, UI) {
  var controls, grid, filters;

  function filterGrid() {
    filters = [];
    controls.filter('.uk-active').each(function() {
      var filter = $(this).data('ukFilter');
      if (filter !== '') filters.push(filter)
    });
    grid.filter(filters.join(','));
  }

  UI.ready(function() {
    controls = $('[data-uk-filter]');
    grid = UI.grid('#grid', {gutter: 20});

    controls.on('click', function(e) {
      e.preventDefault();
      $(this).addClass('uk-active').siblings().removeClass('uk-active')
      filterGrid();
    });
    filterGrid();
        
  });
}(UIkit.$, UIkit));
