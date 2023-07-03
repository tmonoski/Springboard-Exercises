console.log("Let's get this party started!");

const ul = document.querySelector("ul");

const searchBtn = document.querySelector("#searchBtn");
searchBtn.addEventListener("click", handleClick);

const removeBtn = document.querySelector("#removeBtn");
removeBtn.addEventListener("click", removeGifs);

async function handleClick() {
  const searchTerm = document.querySelector("#searchTerm").value;
  const gif = await getGif(searchTerm);

  appendGif(gif);
}

async function getGif(searchTerm) {
  const key = "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym";

  return await axios.get("https://api.giphy.com/v1/gifs/random", {
    params: { api_key: key, tag: searchTerm },
  });
}

function appendGif(res) {
  const newImg = document.createElement("img");
  const newLi = document.createElement("li");
  newImg.src = res.data.data.images.fixed_height.url;
  newLi.append(newImg);
  ul.append(newLi);
  searchTerm.value = "";
}

function removeGifs() {
  ul.innerHTML = "";
}
