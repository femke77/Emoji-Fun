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
  document.location.reload();
};

const renderPosts = (posts) => {
  let container = document.querySelector(".display");
  fetch("/api/post", {
    method: "GET",
    body: JSON.stringify(posts),
  })
    .then((res) => res.json())
    .then((posts) => {
      posts.forEach((post) => {
        let p = document.createElement("p");
        p.innerHTML = post.body;
        container.append(p);
      });
    });
};

renderPosts();

document
  .querySelector("#post-form")
  .addEventListener("submit", handleFormSubmit);
