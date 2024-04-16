import $ from 'jquery'
import 'jquery-ui-dist/jquery-ui';
// Make ".mcell-task" elements draggable
$(".mcell-task").draggable({
  appendTo: "body", // Append the helper to the body
  cursor: "move", // Set the cursor to move while dragging
  helper: 'clone', // Use a clone of the element as helper
  revert: "invalid" // Revert the draggable element if dropped outside a droppable
});
// Make ".mcell" elements droppable
$(".mcell").droppable({
  tolerance: "intersect", // The draggable overlaps the droppable at least 50%
  accept: ".mcell-task", // Only accept ".mcell-task" elements as droppable
  activeClass: "ui-state-default", // Class to be added to the droppable when an accepted draggable is being dragged
  hoverClass: "ui-state-hover", // Class to be added to the droppable when an accepted draggable is hovered over it
  drop: function(event, ui) {
    // Append the dropped draggable to the droppable
      $(this).append($(ui.draggable));
  }
});