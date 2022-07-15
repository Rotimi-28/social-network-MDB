const { User } = require("../models");

const userController = {
    //get all user
    getAllUsers(req, res) {
        User.find({})
            .then(dbUserData => res.json(dbUserData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },

    //get single
    getUserById({ params }, res){
        User.findOne({ _id: params.id })
        .populate({
            path: "friends",
            select: "_v"
        }).then(dbUserData => res.json(dbUserData))
        .catch(err =>{
            console.log(err);
            res.status(400).json(err);
        });
    },
    //create user
    createUser({ body }, res){
        User.create(body)
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    },
    //update a single user
    updateUser({ params, body }, res) {
        User.findOneAndUpdate({ _id: params.id }, body, {new: true, runValidators: true })
        .then(dbUserData => {
            if (!dbUserData){
                res.status(400).json({ message: "No user find with this id!" });
                return;
            }
            res.json(dbUserData);
        }) .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    },
    deleteUser({ params }, res){
        User.findOneAndDelete({ _id: params.id })
            .then(dbUserData => {
                if (!dbUserData){
                    res.status(400).json({ message: "No user find with this id!" });
                    return;
                }
                res.json(dbUserData);
            }) .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },
    createFriends({ params }, res) {
        User.findOneAndUpdate(
          { _id: params.userId },
          { $push: { friends: params.friendId } },
          { new: true, runValidators: true }
        )
          .then((dbUserData) => {
            if (!dbUsertData) {
              res.status(404).json({ message: "No thought found with this id!" });
              return;
            }
            res.json(dbUserData);
          })
          .catch((err) => {
            console.log(err);
            res.status(400).json(err);
          });
      },
      removeFriends({ params }, res) {
        User.findOneAndUpdate(
          { _id: params.userId },
          { $pull: { friends: params.friendId } },
          { new: true, runValidators: true }
        )
          .then((dbUserData) => {
            if (!dbUsertData) {
              res.status(404).json({ message: "No thought found with this id!" });
              return;
            }
            res.json(dbUserData);
          })
          .catch((err) => {
            console.log(err);
            res.status(400).json(err);
          });
      },
}


module.exports = userController;