let btn = document.querySelector(".todo-input-section .todo-add-btn");
let input = document.querySelector(".todo-input");
let list = document.querySelector(".todo-tab .todo-list");

btn.addEventListener("click", function () {

  let bod = document.querySelector(".todo-input-section");
  let error = document.querySelector(".error-msg");

  // validation
  if (input.value.length==0) {
    if (!error) {
      let p = document.createElement("p");
      p.textContent = "la liste est vide";
      p.classList.add("error-msg");
      bod.appendChild(p);
    }
    return;
  }

  // supprimer le message si tout est OK
  if (error) {
    error.remove();
  }
  
  let li = document.createElement("li");
  li.textContent = input.value;

  // button pour supprimer
  let btnDelete = document.createElement("button");
  btnDelete.textContent = "supprimer";

  btnDelete.addEventListener("click", function () {
    li.remove();
  });

  list.appendChild(li);

  li.appendChild(btnDelete);

  input.value = "";

  li.classList.add("liste-item");
  btnDelete.classList.add("delete-btn");
});
