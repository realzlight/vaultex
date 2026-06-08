import mongoose from 'mongoose';

const connectDB = async () => {
  console.log("🔌 Trying to connect to MongoDB...");
  
  mongoose.connection.on('connected', () => {
    console.log("✅ DB CONNECTED");
  });

  mongoose.connection.on('error', (err) => {
    console.error("❌ DB Error:", err.message);
    process.exit(1);
  });

  await mongoose.connect(process.env.MONGO_URI);
};

export default connectDB;
