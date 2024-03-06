const page = document.querySelector("#page");
const accordionContainer = `<div id="accordion"></div>`;

const accordionEls = accordionSections.map(
  section => `<div class="accordion-section">
      <div class="accordion-header">
        <h3>${section.header}</h3>
        <span class="expand closed">+</span>
      </div>
      <div class="accordion-body">
        <p>${section.body}</p>
      </div>
    </div>`
);

accordionContainer.innerHTML = accordionEls;

accordionEls.forEach(section => {
  section.firstChild.addEventListener("click", () => {
    const expandEl = section.querySelector(".expand");
    // TO DO: change to only use closed class
    if (section.classList.includes("closed")) {
      // when section is closed, open it
      section.classList.remove("closed");
      expandEl.innerText = "-";
    } else {
      // when section is open, close it
      section.classList.add("closed");
      expandEl.innerText = "+";
    }
  });
});

page.appendChild(accordionContainer);
