import axios from "axios";

export default {
  // Gets all books
  getStore: function() {
    return axios.get("/api/store");
  },
  // Gets the book with the given id
  getStore: function(id) {
    return axios.get("/api/store/" + id);
  },
  // Deletes the book with the given id
  deleteStore: function(id) {
    return axios.delete("/api/store/" + id);
  },
  // Saves a book to the database
  saveStore: function(bookData) {
    return axios.post("/api/saved", storeData);
  }
};
