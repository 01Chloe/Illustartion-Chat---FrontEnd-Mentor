const priceBtn = document.querySelectorAll(".circle");
const clickedBtn = "active";

function change(el, clickedBtn) {
    priceBtn.forEach(btn => {
    if(btn.classList.contains(clickedBtn)) {
      btn.classList.remove(clickedBtn);
    }
  });
  el.classList.add(clickedBtn);
}

priceBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    change(btn, clickedBtn);
  })
})