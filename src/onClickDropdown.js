export function onClickDropdown(dropdownElement) {
  const header = dropdownElement.children[0];
  const list = dropdownElement.children[1];

  list.style.overflow = "hidden";

  header.addEventListener("click", () => {
    if (list.style.height === "0px" || list.style.height === "") {
      list.style.height = list.scrollHeight + "px";
    } else {
      list.style.height = "0";
    }
  });
}
