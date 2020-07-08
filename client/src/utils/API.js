import axios from "axios";

export default {
  
  findAll: function() {
    return axios.get("/api/");
  },

  // findAll: function() {
  //  return axios.get
    

  // },
  
//   deleteStore: function(id) {
//     return axios.delete("/api/store/" + id);
//   },
  
};
