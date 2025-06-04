import mongoose from "mongoose";
import app from ".";

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://ruhit_portfolio:H7OKG9HZ8bDkB3EU@ruhitbaidya.wlcbu.mongodb.net/task-project?retryWrites=true&w=majority&appName=ruhitbaidya"
    );
    console.log("this DB is connected");
  } catch (err) {
    console.log(err);
  }
};
app.listen(5000, async () => {
  await connectDB();
  console.log("start this code port 5000");
});
