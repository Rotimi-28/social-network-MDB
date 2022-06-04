const router = require("express").Router();
 const {
     getAllUsers,
     createUser,
     getAllUserById,
     updateUser,
     createFriend,
     removeFriend, 
     deleteUser
} = require("../../controllers/user-controller");



 //api/user
 router.
   route("./")
   .get(getAllUsers)
   .post(createUser)

   router
        .route("/:id")
        .get(getAllUserById)
        .put(updateUser)
        .delete(deleteUser);


        router
         .route("/:userId/friends/:friendId")
         .post(createFriend)
         .delete(removeFriend)

        module.exports = router;
        