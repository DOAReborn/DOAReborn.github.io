(function () {
  var calme = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!calme) {
    var zone = document.getElementById("petales");
    for (var i = 0; i < 8; i++) {
      var p = document.createElement("span");
      p.className = "petale";
      p.style.left = Math.random() * 100 + "%";
      p.style.setProperty("--t", 7 + Math.random() * 6 + "px");
      p.style.setProperty("--o", (.2 + Math.random() * .2).toFixed(2));
      p.style.setProperty("--d", 22 + Math.random() * 14 + "s");
      p.style.setProperty("--r", -Math.random() * 36 + "s");
      p.style.setProperty("--v", (Math.random() * 2 - 1) * 60 + "px");
      zone.appendChild(p);
    }

    var fond = document.querySelector(".fond");
    window.addEventListener("mousemove", function (e) {
      fond.style.setProperty("--px", (e.clientX / innerWidth - .5) * -24 + "px");
      fond.style.setProperty("--py", (e.clientY / innerHeight - .5) * -24 + "px");
    });
  }

  document.querySelectorAll("a.carte").forEach(function (c) {
    c.addEventListener("mousemove", function (e) {
      var r = c.getBoundingClientRect();
      c.style.setProperty("--x", e.clientX - r.left + "px");
      c.style.setProperty("--y", e.clientY - r.top + "px");
    });
  });
})();
