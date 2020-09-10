topic = document.getElementById("search-key"); //search box
sort_check = document.getElementsByClassName("form-check-input"); //checkbox
limit_post = document.getElementById("limit-search"); //no_of posts
topic_div = document.querySelector(".topic-posts"); //div for creating posts
// Apply event listener to btn
submitbtn = document
  .getElementById("sub-btn")
  .addEventListener("click", fetchdata);

// To get data from API
function fetchdata(e) {
  e.preventDefault();

  let topic_name = topic.value;
  var sort_value = 0;
  if (sort_check[0].checked) {
    sort_value = sort_check[0].value;
  } else {
    sort_value = sort_check[1].value;
  }
  limit_post_value = parseInt(limit_post.value);
  let result = document.createElement("div");
  result.setAttribute("class", "card-columns");
  topic_div.appendChild(result);

  fetch(
    `https://www.reddit.com/search.json?q=${topic_name}&sort=${sort_value}&limit=${limit_post_value}`
  )
    .then((a) => a.json())
    .then((data) => {
      for (let i = 0; i < limit_post_value; i++) {
        var img_url = data.data.children[i].data.preview;
        if (typeof img_url == "undefined") {
          result.innerHTML += `<div class="card" style="width: 18rem;">
          <img class="card-img-top" src='images/redditlogo.png' alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">${data.data.children[i].data.title}</h5>
            <p class="card-text">${short_text(
              data.data.children[i].data.selftext
            )}</p>
            <a href="#" class="btn btn-primary">View Full</a>
          </div>
        </div>`;
        } else {
          result.innerHTML += `<div class="card" style="width: 18rem;">
        <img class="card-img-top" src='${
          img_url.images[0].source.url
        }' alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${data.data.children[i].data.title}</h5>
          <p class="card-text">${short_text(
            data.data.children[i].data.selftext
          )}</p>
          <a href="${
            data.data.children[i].data.url
          }"target="_blank" class="btn btn-primary">View Full</a>
          <br>
          <span class="badge badge-secondary">Subreddit: ${
            data.data.children[i].data.subreddit
          }</span>
          <span class="badge badge-secondary">Score: ${
            data.data.children[i].data.score
          }</span>
        </div>
      </div>`;
        }
      }
    })
    .catch((er) => {
      console.log(er);
    });
}
// To short description
function short_text(text) {
  if (text == "") {
    return "";
  } else if (text.length > 150) {
    console.log("he");
    return text.slice(0, 100);
  } else {
    return text;
  }
}
