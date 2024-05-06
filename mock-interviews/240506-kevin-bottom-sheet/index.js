const bottomSheet = document.querySelector("#bottom-sheet-container");
const openButton = document.querySelector("#open");
const partiallyOpenButton = document.querySelector("#expand");
const closeButton = document.querySelector("#close");

function fullyOpenBottomSheet() {
  if (bottomSheet.classList.contains("closed")) {
    bottomSheet.classList.remove("closed");
  }

  if (bottomSheet.classList.contains("partially-open")) {
    bottomSheet.classList.remove("partially-open");
  }

  bottomSheet.classList.add("fully-open");
}

function partiallyOpenBottomSheet() {
  if (bottomSheet.classList.contains("closed")) {
    bottomSheet.classList.remove("closed");
  }
  if (bottomSheet.classList.contains("fully-open")) {
    bottomSheet.classList.remove("fully-open");
  }

  bottomSheet.classList.add("partially-open");
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

partiallyOpenButton.addEventListener("click", () => {
  fullyOpenBottomSheet();
});

openButton.addEventListener("click", () => {
  partiallyOpenBottomSheet();
});
