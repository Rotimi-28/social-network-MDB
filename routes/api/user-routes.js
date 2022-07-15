const router = require("express").Router();
 const {
     getAllUsers,
     createUser,
     getUserById,
     updateUser,
     createFriends,
     removeFriends, 
     deleteUser
} = require("../../controllers/user-controller");



 //api/user
 router.
   route("/")
   .get(getAllUsers)
   .post(createUser)

   router
        .route("/:id")
        .get(getUserById)
        .put(updateUser)
        .delete(deleteUser);


        router
         .route("/:userId/friends/:friendId")
         .post(createFriends)
         .delete(removeFriends)

        module.exports = router;
        