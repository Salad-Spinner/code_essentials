// Select the element containing the textvar container = document.getElementById('IdOfElement'); 
// Replace 'yourContainerId' with the actual ID of your container
// Get all the text nodes within the containervar textNodes = getTextNodes(container);
// Wrap each text node with a <p> tagtextNodes.forEach(function(node) {  var Tag = document.createElement('tagName');  pTag.innerHTML = node.nodeValue;  node.parentNode.replaceChild(Tag, node);});
// Function to get all text nodes within an elementfunction getTextNodes(element) {  var textNodes = [];  var walk = document.createTreeWalker(element, NodeFilter.SHOW_TEXT, null, false);  var node;  while (node = walk.nextNode()) {    textNodes.push(node);  }  return textNodes;}
