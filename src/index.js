document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.querySelector("#create-task-form");
  form.addEventListener("submit", handleSubmit);

  function handleSubmit(e) {
    e.preventDefault();
    const li = document.createElement("li");
    const list = document.querySelector("#tasks");
    li.textContent = form.querySelector('[type=text]').value;
    list.append(li);
    if (li.textContent === "") {
      li.remove();
    };
  }
});

