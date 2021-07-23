import { useRouter } from "next/router";

const NewsDetail = () => {
  const router = useRouter();
  const newsId = router.query.newsId;
  return <h1>The {newsId} page</h1>;
};

export default NewsDetail;
