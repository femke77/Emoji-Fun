const handleFormSubmit = async (e) => {
  e.preventDefault();
  const body = document.querySelector("#post-body").value.trim();
  await fetch(`/api/post`, {
    method: "POST",
    body: JSON.stringify({
      body,
    }),
    headers: { "Content-Type": "application/json" },
  });
};

const renderPosts = (posts) => {
  let p = document.createElement("p");
  let container = document.querySelector(".display");
  fetch("/api/post", {
    method: "GET",
    body: JSON.stringify(posts),
  })
    .then((res) => res.json())
    .then((posts) => {
      console.log(posts);
      p.innerHTML = posts[0].body;
      container.append(p);
    });
};

renderPosts();

document
  .querySelector("#post-form")
  .addEventListener("submit", handleFormSubmit);
