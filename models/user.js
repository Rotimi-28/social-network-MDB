const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
  {
    userName: {
      type: String,
      unique: true,
      require: true,
      trim: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
      validate: {},
    },
    thought: [
      {
        type: Schema.Types.ObjectId,
        ref: "Thought",
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    // prevents virtuals from creating duplicate of _id as `id`
    id: false,
  }
);

UserSchema.virtual('friendsCount').get(function() {
    return this.friends.length
});
const User = model("User", UserSchema);
module.exports = User;
