function showSidebar(){var e=document.querySelector(".sidenav"),t=(e.style.display="block",window.innerWidth);t<870&&(e.style.left="0")}function hideSidebar(){var e=document.querySelector(".sidenav");e.style.display="none",e.style.left="unset",e.style.right="75%"}function handleResize(){var e=document.querySelector(".sidenav"),t=window.innerWidth;870<t&&"none"===e.style.display?(e.style.display="block",e.style.left="unset",e.style.right="75%"):870<t&&"block"===e.style.display?(e.style.left="unset",e.style.right="75%"):t<870&&"block"===e.style.display&&"unset"===e.style.left&&(e.style.display="none")}window.addEventListener("resize",handleResize),handleResize();