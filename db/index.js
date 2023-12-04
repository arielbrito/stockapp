const mongoose = require("mongoose");

const dbConnect = async (app) => {
  try {
    await mongoose.connect(process.env.MONGO_URL);

    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });

    console.log("Connected to the database successfully");
  } catch (error) {
    console.error("Error connecting to the database:", error.message);
    process.exit(1);
  }
};

module.exports = dbConnect;
