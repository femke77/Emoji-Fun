let replaceWithEmoji;

const handleFormSubmit = async (e) => {
  e.preventDefault();
  const body = document.querySelector("#post-body").value.trim();
  await fetch(`/api/post`, {
    method: "POST",
    body: JSON.stringify({
      body: body,
      replaceWithEmoji: false
    }),
    headers: { "Content-Type": "application/json" },
  });
  document.location.reload();
};

const renderPosts = async (posts) => {
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

const handleEmojiReplacement = async (e) => {
  e.preventDefault()
  const body = document.querySelector("#post-body").value.trim();
  await fetch(`/api/post`, {
    method: "POST",
    body: JSON.stringify({
      body: body,
      replaceWithEmoji: true
    }),
    headers: { "Content-Type": "application/json" },
  });
  document.location.reload();
}

renderPosts();

document
  .querySelector("#post-form")
  .addEventListener("submit", handleFormSubmit);
  document
  .querySelector("#emoji-btn")
  .addEventListener("click", handleEmojiReplacement);