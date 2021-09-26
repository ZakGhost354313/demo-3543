function displayMenu(currentMenu) {
  var thisMenu = document.getElementById(currentMenu).style
  if (thisMenu.display == "block") {
    thisMenu.display = "none"
  }
  else {
    thisMenu.display = "block"
  }
  return false
}