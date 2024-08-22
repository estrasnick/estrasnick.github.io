window.onload = function() {
  var sidebar = document.getElementById("sidebar");
  var sidebarButton = document.getElementById("sidebar-button");
  var sidebarName = document.getElementById("sidebar-name")
  var navlinkList = document.getElementById("navlinks");

  function openSidebar(e) {
    if (sidebar.className.indexOf("slideIn") != -1) {
      sidebar.className = sidebar.className.replace(" slideIn", "");
    } else {
     sidebar.className = sidebar.className + " slideIn";
    }
  }

  function hideSidebar(e) {
    if (sidebar.className.indexOf("slideIn") != -1) {
      sidebar.className = sidebar.className.replace(" slideIn", "");
    }
  }

  sidebarButton.addEventListener("click", openSidebar, false);
  sidebarName.addEventListener("click", hideSidebar, false);
  const navlinks = navlinkList.childNodes;
  navlinks.forEach(li => li.addEventListener("click", hideSidebar, false));
};
