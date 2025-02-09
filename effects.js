document.addEventListener("DOMContentLoaded", function () {
  for (let i = 0; i < 10; i++) {
    let butterfly = document.createElement("div");
    butterfly.innerHTML = "🦋";
    butterfly.classList.add("floating-butterfly");
    document.body.appendChild(butterfly);

    butterfly.style.left = Math.random() * window.innerWidth + "px";
    butterfly.style.top = Math.random() * window.innerHeight + "px";

    butterfly.animate(
      [
        { transform: "translateY(0px)" },
        { transform: "translateY(-20px)" },
        { transform: "translateY(0px)" },
      ],
      {
        duration: 5000 + Math.random() * 5000,
        iterations: Infinity,
      }
    );
  }
});
