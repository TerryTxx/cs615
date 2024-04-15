import $ from 'jquery'
import 'jquery-ui-dist/jquery-ui';
$(".mcell-task").draggable({
  appendTo: "body", // Append the dragged element to the body
  cursor: "move", // Set cursor style to move while dragging
  helper: 'clone', // Clone the dragged element
  revert: "invalid" // Revert the dragged element if not dropped on a valid droppable target

});
$(".mcell").droppable({
  tolerance: "intersect", // Define the tolerance for dropping elements
  accept: ".mcell-task",// Specify the draggable elements accepted by this droppable
  activeClass: "ui-state-default", // CSS class applied when an accepted element is dragged over
  hoverClass: "ui-state-hover", // CSS class applied when an accepted element is hovered over
  drop: function(event, ui) {        
      $(this).append($(ui.draggable)); // Append the dragged element to the droppable element
  }
});