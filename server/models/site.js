const mongoose = require("mongoose");

const siteSchema = mongoose.Schema({
  featured: {
    require: true,
    type: Array,
    default: []
  },
  siteInfo: {
    require: true,
    type: Array,
    default: []
  }
});

const Site = mongoose.model("Site", siteSchema);

module.exports = { Site };
