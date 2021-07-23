import { accessMeetups } from "./mongodb";

const handler = async (req, res) => {
  if (req.method !== "POST") {
    return;
  }
  const data = req.body;
  await accessMeetups(meetups => meetups.insertOne(data));
  // Assume always succeeds
  res.status(201).json({ message: "Meetup inserted" });
};

export default handler;
