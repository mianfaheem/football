var mongoose = require("mongoose");
var Schema = mongoose.Schema;

fixtureSchema = new Schema(
    {
        fixtureId: { type : String },
        alldata: [{ type: mongoose.Schema.Types.Mixed }]       
    },
    {
      timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at",
      },
    }
);

module.exports = mongoose.model("FixtureFacts", fixtureSchema);