import Link from "next/link";

const NewsPage = () => {
  return (
    <>
      <h1>The news page</h1>
      <ul>
        <li>
          <Link href="/news/nextjs-is-great">NextJs is great</Link>
        </li>
        <li>
          <Link href="/news/whatever">Whatever</Link>
        </li>
      </ul>
    </>
  );
};

export default NewsPage;
