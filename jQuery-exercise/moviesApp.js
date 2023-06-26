// prevents default form submission and calls addMovie. Then clears the input fields.
$("#movie-form").on("submit", function (e) {
  e.preventDefault();

  let title = $(".title").val();
  let rating = $(".rating").val();
  addMovie(title, rating);

  $("input").val("");
});

// Checks if Sort By Title/Sort By Rating buttons have the class 'ascending' and toogles it when the button is clicked.
$(".sortByTitle").on("click", function () {
  const button = document.querySelector(".sortByTitle");

  sortByTitle(button.classList.contains("ascending"));
  button.classList.toggle("ascending");
});

$(".sortByRating").on("click", function () {
  const button = document.querySelector(".sortByRating");

  sortByRating(button.classList.contains("ascending"));
  button.classList.toggle("ascending");
});

// Creates remove button and movie (title: rating) li. The remove button is first appended to the li and then the li is appended to the ul #movie-list. Spans are used to add a class to both the title and rating on the li. This will be used to sort by title or rating.
function addMovie(title, rating) {
  const remove = $("<button/>")
    .text("Remove")
    .on("click", function () {
      movie.remove();
    });
  const movie = $(
    `<li><span class='title'>${title}</span> : <span class='rating'>${rating}</span> </li>`
  ).append(remove);
  $("#movie-list").append(movie);
}

// Sorts movies in alphabetical order by title. Defaults as ascending. Direction(1 and -1) is used to alter whether the order is ascending or descending. Once sorted, the ul #movie-list is emptied and the sorted movies are appended.
function sortByTitle(isAscending) {
  const movies = $("#movie-list li").get();
  let direction = 1;

  if (!isAscending) {
    direction = -1;
  }

  movies.sort(function (movie1, movie2) {
    const key1 = $(movie1).find(".title").text();
    const key2 = $(movie2).find(".title").text();

    if (key1 < key2) return -1 * direction;
    if (key1 > key2) return 1 * direction;
    return 0;
  });
  $("#movie-list").empty().append(movies);
}

// Sorts movies in alphabetical order by rating. No ascending class by defualt. Direction(1 and -1) is used to alter whether the order is ascending or descending. Once sorted, the ul #movie-list is emptied and the sorted movies are appended.
function sortByRating(isAscending) {
  const movies = $("#movie-list li").get();
  let direction = 1;

  if (isAscending) {
    direction = -1;
  }

  movies.sort(function (movie1, movie2) {
    const key1 = parseInt($(movie1).find(".rating").text(), 10);
    const key2 = parseInt($(movie2).find(".rating").text(), 10);

    if (key1 < key2) return 1 * direction;
    if (key1 > key2) return -1 * direction;
    return 0;
  });
  $("#movie-list").empty().append(movies);
}
