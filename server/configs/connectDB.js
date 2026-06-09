import mongoose from 'mongoose';

const connectDB = async () => {
  console.log("🔌 Trying to connect to MongoDB...");
  
  mongoose.connection.on('connected', () => {
    console.log("✅ DB CONNECTED");
  });

  mongoose.connection.on('error', (err) => {
    console.error("❌ DB Connection Error:", err.message);
  });

  mongoose.connection.on('disconnected', () => {
    console.log("⚠️ DB Disconnected");
  });

  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: 'vaultex' // optional: forces DB name if not in URI
    });
  } catch (error) {
    console.error("❌ DB Connection Failed:", error.message);
    process.exit(1);
  }
};

export default connectDB;