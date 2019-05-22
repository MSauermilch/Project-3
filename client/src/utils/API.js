import axios from "axios";

export default {
  getTacos: function () {
    return axios.get("/api/tacos");
  },
  geTaco: function (id) {
    return axios.get("/api/tacos/" + id);
  },
  deleteTaco: function (id) {
    return axios.delete("/api/tacos/" + id);
  },
  saveTaco: function (tacoData) {
    return axios.post("/api/tacos", tacoData);
  },

};