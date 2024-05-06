const bottomSheet = document.querySelector("#bottom-sheet-container");
const openButton = document.querySelector("#open");
const expandButton = document.querySelector("#expand");
const closeButton = document.querySelector("#close");
const shrinkButton = document.querySelector("#shrink");

// add "shrink" button when expanded
// make styling pretty

function fullyOpenBottomSheet() {
  if (bottomSheet.classList.contains("closed")) {
    bottomSheet.classList.remove("closed");
  }

  if (bottomSheet.classList.contains("partially-open")) {
    bottomSheet.classList.remove("partially-open");
  }

  bottomSheet.classList.add("fully-open");
  shrinkButton.classList.remove("display-none");
  // shrinkButton.classList.add("display-initial");
  expandButton.classList.add("display-none");
}

function partiallyOpenBottomSheet() {
  if (bottomSheet.classList.contains("closed")) {
    bottomSheet.classList.remove("closed");
  }
  if (bottomSheet.classList.contains("fully-open")) {
    bottomSheet.classList.remove("fully-open");
  }

  bottomSheet.classList.add("partially-open");
  shrinkButton.classList.add("display-none");
  expandButton.classList.remove("display-none");
}

function closeBottomSheet() {
  if (bottomSheet.classList.contains("fully-open")) {
    bottomSheet.classList.remove("fully-open");
  }

  if (bottomSheet.classList.contains("partially-open")) {
    bottomSheet.classList.remove("partially-open");
  }

  bottomSheet.classList.add("closed");
}

closeButton.addEventListener("click", () => {
  closeBottomSheet();
});

expandButton.addEventListener("click", () => {
  fullyOpenBottomSheet();
});

openButton.addEventListener("click", () => {
  partiallyOpenBottomSheet();
});

shrinkButton.addEventListener("click", () => {
  partiallyOpenBottomSheet();
});
