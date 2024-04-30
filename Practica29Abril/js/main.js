import { saveEntry, getBlogs } from "../database/db.js";

const buildBlogEntry = () => {
  let inputs = document.querySelectorAll("#post-form input");
  let saveEntryButton = document.getElementById("save-entry-button");

  saveEntryButton.addEventListener("click", () => {
    let blogEntry = {};

    inputs.forEach((input) => {
      blogEntry[input.name] = input.value;
    });

    saveEntry(blogEntry);
    printBlogs("blogs-list")

  });
};

const printBlogs = async (wrapperId) => {
  let blogsArray = await getBlogs()
  let wrapper = document.getElementById(wrapperId);
  wrapper.innerHTML = "";

  blogsArray.forEach((blog) => wrapper.append(createBlogEntry(blog)));
};

const createBlogEntry = (blogobj) => {

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

  blogItem.append(blogTitle, blogContent, blogAutor, blogEditBtn);

  return blogItem;
};

buildBlogEntry();
