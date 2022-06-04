const { Schema, model } = require("mongoose");

const reactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId()

    },
    reactionBody: {
        type: String,
        require: true,
        maxlength: 280
    },
    userName: {
        type: String,
        require: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => new Date(timestamp).toLocaleDateString(),
      },
}, {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    // prevents virtuals from creating duplicate of _id as `id`
    id: false,
  })


const ThoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      require: true,
      minlength: 1,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => new Date(timestamp).toLocaleDateString(),
    },
    userName: {
      type: String,
      require: true,
    },
    reactions: [reactionSchema],
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

ThoughtSchema.virtual("reactionsCount").get(function () {
  return this.reactions.length;
});
const Thought = model("Thought", ThoughtSchema);
module.exports = Thought;
