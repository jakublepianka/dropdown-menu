export function onHoverDropdown(dropdownElement) {
  const list = dropdownElement.children[1];

  dropdownElement.addEventListener("mouseover", () => {
    list.style.height = list.scrollHeight + "px";
    dropdownElement.addEventListener("mouseout", () => {
      list.style.height = "0";
    });
  });
}
