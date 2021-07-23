import Head from "next/head";

import MeetupList from "../components/meetups/MeetupList";
import { accessMeetups } from "./api/mongodb";

const HomePage = ({ meetups }) => {
  return (
    <>
      <Head>
        <title>Awesome meetups</title>
        <meta
          name="description"
          content="A page for finding awesome meetups!"
        />
      </Head>
      <MeetupList meetups={meetups} />
    </>
  );
};

export const getStaticProps = async () => {
  const meetups = await accessMeetups(meetups => meetups.find().toArray());
  return {
    props: {
      meetups: meetups.map(meetup => ({
        title: meetup.title,
        image: meetup.image,
        description: meetup.description,
        address: meetup.address,
        id: meetup._id.toString()
      }))
    },
    revalidate: 1
  };
};

export default HomePage;
