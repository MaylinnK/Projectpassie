/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser * /

/*eslint 'no-console': 0*/

var $ = document.getElementsByTagName;
function activePage() {
  $("a").each(function() {
    if ($(this).attr("href") == window.location.pathname) {
      $(this).addClass("active");
    }
  });
}
console.log(document.getElementById("index").class);
