import { saveEntry } from "../database/db.js";

const buildBlogEntry = () => {
  let inputs = document.querySelectorAll("#post-form input");

  let saveEntryButton = document.getElementById("save-entry-button");

  saveEntryButton.addEventListener("click", () => {
    let blogEntry = {};

    inputs.forEach((input) => {
      blogEntry[input.name] = input.value;
    });

    saveEntry(blogEntry);
  });
};

const createBlogEntry = (blogobj) => {
  let list_blog = document.getElementById("blogs-list");

  let { title, content, autor } = blogobj;
  let blogItem = document.createElement("li");
  blogItem.classList.add(
    "list-group-item",
    "d-flex",
    "justify-content-between",
    "align-items-center",
    "gap-3"
  );

  let blogTitle = document.createElement("h3");
  let blogTitleText = document.createTextNode(title);
  blogTitle.appendChild(blogTitleText);

  let blogContent = document.createElement("p");
  let blogContentText = document.createTextNode(content);
  blogContent.appendChild(blogContentText);

  let blogAutor = document.createElement("h4");
  let blogAutorText = document.createTextNode(autor);
  blogAutor.appendChild(blogAutorText);

  let blogEditBtn = document.createElement("button");
  blogEditBtn.classList.add("btn", "btn-primary", "text-center");
  blogEditBtn.innerHTML = "&#x270E;";
};

buildBlogEntry();
createBlogEntry();
