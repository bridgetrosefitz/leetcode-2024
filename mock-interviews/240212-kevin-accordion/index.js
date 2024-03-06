import { accordionData } from "./data";

/////// Container ///////

const container = `<div id="accordion-container></div>`;
const page = document.querySelector("#page");
page.appendChild(container);

/////// AccordionSection ///////

const sections = accordionData.map(section => {
  return `<div id="accordion-section-${section.id}" class="accordion-section">
            <div class="accordion-header">
              <h3>${section.title}</h3>
              <span>+</span>
            </div>
            <div class="accordion-detail">
            <p>${section.body}</p>
            </div>
          </div>`;
});

////// Accordion ///////

container.addEventListener("click", e => {
  // check if target is a header
  // if section has class "open"
  section.classList.includes("open")
    ? section.classList.remove("open")
    : section.classList.add("open");
  // remove class "open"
  // else
  // add class "open"
});
