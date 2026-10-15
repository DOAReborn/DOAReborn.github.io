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

  var choix = document.getElementById("choix");
  if (choix) {
    choix.querySelectorAll("label").forEach(function (l) {
      if (l.hasAttribute("data-dispo")) return;
      l.classList.add("bientot");
      l.querySelector("input").checked = false;
      l.querySelector("input").disabled = true;
    });
    var bouton = choix.querySelector("button");
    var etat = function () {
      bouton.disabled = !choix.querySelector("input:checked");
    };
    choix.addEventListener("change", function (e) {
      etat();
      if (e.target.checked) {
        bouton.classList.remove("flash");
        void bouton.offsetWidth;
        bouton.classList.add("flash");
      }
    });
    etat();
    choix.addEventListener("submit", function (e) {
      e.preventDefault();
      var n = 0;
      choix.querySelectorAll("label").forEach(function (l) {
        if (!l.querySelector("input").checked) return;
        var z = l.getAttribute("data-zip").split("/");
        var url = "https://github.com/" + z[0] + "/" + z[1] + "/releases/latest/download/" + z[2];
        setTimeout(function () {
          var f = document.createElement("iframe");
          f.hidden = true;
          f.src = url;
          document.body.appendChild(f);
        }, 900 * n++);
      });
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
