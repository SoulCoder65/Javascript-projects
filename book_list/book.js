title = document.querySelector("#title");
category = document.getElementById("category");
author = document.getElementById("author");
table_body = document.getElementById("table-body");
add_book_btn = document.getElementById("add_book");
popup_bar = document.getElementsByClassName("alert-popup-before")[0];

class UI {
  // Display pop up
  static alert_msg(alert_type, msg) {
    popup_bar.setAttribute("class", "alert-popup");
    popup_bar.innerHTML = `<div class="alert alert-${alert_type} alert-dismissible fade show" role="alert">
    <strong>${msg}</strong> 
    <button
      type="button"
      class="close"
      data-dismiss="alert"
      aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>`;
  }
  // Function to show book
  static show_books() {
    Object.keys(localStorage).forEach((key) => {
      var books_info = JSON.parse(localStorage.getItem(key));

      var table_row = document.createElement("tr");
      table_row.innerHTML = `<td>${books_info["title_store"]}</td><td>${books_info["category_store"]}</td><td>${books_info["author_store"]}</td><td id='delete-${books_info["title_store"]}'><button onclick="UI.remove_book('delete-${books_info["title_store"]}')"><i class='fas fa-times 'id="delete-btn"></i></button></td>`;
      table_body.appendChild(table_row);
    });
  }

  //   ADD Book function
  static add_book(e) {
    e.preventDefault();
    var form = document.forms[0];
    const title_data = form[0].value;
    const category_data = form[1].value;

    const author_data = form[2].value;
    var counter = 0;
    if (title_data == "") {
      counter++;
      var field_data = document.getElementsByClassName("form-group")[0];
      var small_elem_cat = document.createElement("small");
      small_elem_cat.innerHTML = "Fill This Field";
      small_elem_cat.setAttribute("class", "form-text  text-danger");
      title.setAttribute("class", "form-control border-danger");

      title.parentNode.appendChild(small_elem_cat);
    }
    if (category_data == "") {
      counter++;
      var field_data = document.getElementsByClassName("form-group")[1];
      var small_elem_field = document.createElement("small");
      small_elem_field.innerHTML = "Fill This Field";
      small_elem_field.setAttribute("class", "form-text  text-danger");
      category.setAttribute("class", "form-control border-danger");

      category.parentNode.appendChild(small_elem_field);
    }
    if (author_data == "") {
      counter++;
      var field_data = document.getElementsByClassName("form-group")[2];
      var small_elem = document.createElement("small");
      small_elem.innerHTML = "Fill This Field";
      small_elem.setAttribute("class", "form-text  text-danger");
      author.setAttribute("class", "form-control border-danger");

      author.parentNode.appendChild(small_elem);
    }
    setTimeout(() => {
      try {
        title.parentNode.removeChild(small_elem_cat);
        title.setAttribute("class", "form-control border-info");
      } catch (error) {}
      try {
        category.parentNode.removeChild(small_elem_field);
        category.setAttribute("class", "form-control border-info");
      } catch (error) {}
      try {
        author.parentNode.removeChild(small_elem);
        author.setAttribute("class", "form-control border-info");
      } catch (e) {}
    }, 1500);

    // If all fields all field then add books to local storage
    if (counter == 0) {
      const book_info = {
        title_store: title_data,
        category_store: category_data,
        author_store: author_data,
      };
      window.localStorage.setItem(title_data, JSON.stringify(book_info));
      form.reset();
      UI.alert_msg("success", "Book Added Successfully");
    }
  }
  // Remove books from screen and local storage
  static remove_book(id_delete) {
    var select_delete_row = document.getElementById(id_delete);
    select_delete_row.parentNode.remove();
    window.localStorage.removeItem(id_delete.split("-")[1]);
    UI.alert_msg("danger", "Book Removed Successfully");
  }
}
// Event listener for add book btn
add_book_btn.addEventListener("click", UI.add_book);
// To loads all books when we load window
document.addEventListener("DOMContentLoaded", UI.show_books);
