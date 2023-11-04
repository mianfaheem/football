var mongoose = require("mongoose");
var Schema = mongoose.Schema;

fixtureSchema = new Schema(
    {
        date: { type : String },
        fixtureType: { type: String },
        alldata: [{ type: mongoose.Schema.Types.Mixed }]       
    },
    {
      timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at",
      },
    }
);

module.exports = mongoose.model("Fixture", fixtureSchema);