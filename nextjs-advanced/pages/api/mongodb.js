import { MongoClient } from "mongodb";

export const accessMeetups = async handleMeetup => {
  // TODO: Add error handling
  const client = await MongoClient.connect(process.env.DB_URL);
  const db = client.db();
  const meetups = db.collection("meetups");
  const response = await handleMeetup(meetups);
  client.close();
  return response;
};
