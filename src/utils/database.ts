import mongoose from "mongoose";
import dns from "dns";
import { DATABASE_URL } from "./env";

dns.setServers(["8.8.8.8", "1.1.1.1"]);

const connect = async () => {
  try {
    await mongoose.connect(DATABASE_URL, {
      dbName: "back-end-acara",
    });

    return "Database Connect";
  } catch (error) {
    throw error;
  }
};

export default connect;
