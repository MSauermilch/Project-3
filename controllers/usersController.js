
// //doesnt do anything
// getUserId: function (id) {
//   return axios.get("/api/users/" + id);
// },

// //pseudo code??????????
// // register email and password
// // localhost:3001/api/register
// registerUser: function () {
//   return axios.post('/api/register')
// },
// //authenticate and then return JWT
// // localhost:3001/api/authenticate
// loginUser: function () {
//   axios.post('/api/authenticate')
//   return axios.get('/api/dashboard')
//   //  return axios.get("/api/users/" + id);

// },
// //returns id
// // localhost:3001/api/dashboard  or tacos?
// displayUserDashboard: function () {
//   return axios.get('/api/dashboard')
//   //  return axios.get("/api/users/" + id);
// }

const db = require("../models");

module.exports = {
  findAll: function (req, res) {
    db.User
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.User
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    db.User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    db.User
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.User
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
}

