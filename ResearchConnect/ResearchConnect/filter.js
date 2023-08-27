$(document).ready(function() {
  // ... (previous filtering code)

  // Filter projects based on amount range
  $('#amount-range').change(function() {
    var selectedAmount = $(this).val();
    filterProjects($('#university-filter').val(), selectedAmount);
  });
});
