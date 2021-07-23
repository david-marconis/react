import { ObjectId } from "mongodb";
import Head from "next/head";

import MeetupDetail from "../../components/meetups/MeetupDetail";
import { accessMeetups } from "../api/mongodb";

const MeetupDetailPage = props => {
  return (
    <>
      <Head>
        <title>{props.meetup.title}</title>
        <meta name="description" content={props.meetup.description} />
      </Head>
      <MeetupDetail {...props.meetup} />
    </>
  );
};

export const getStaticPaths = async () => {
  const meetups = await accessMeetups(meetups =>
    meetups.find({}, { _id: 1 }).toArray()
  );

  return {
    fallback: false,
    paths: meetups.map(meetup => ({
      params: { meetupId: meetup._id.toString() }
    }))
  };
};

export const getStaticProps = async context => {
  const { meetupId } = context.params;
  const meetup = await accessMeetups(meetups =>
    meetups.findOne({ _id: ObjectId(meetupId) })
  );
  return {
    props: {
      meetup: {
        id: meetupId,
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        description: meetup.description
      }
    }
  };
};

export default MeetupDetailPage;
