import { Fragment } from "react";
import fetcher from "../hook/fetcher";
import { GET_ABOUT } from "../hook/wordpress/api";
import Link from "next/link";

function Homepage(props) {
  const { content, title } = props;
  return (
    <Fragment>
      <Link href="/">
        <a>Homepage</a>
      </Link>
      <h1>{title}</h1>
      <div
        dangerouslySetInnerHTML={{ __html: content }}
        className="wordpress-content"
      />
    </Fragment>
  );
}

export default Homepage;

export async function getStaticProps() {
  // FETCHING DATA
  const response = await fetcher(GET_ABOUT);
  const content = response.data.page.content;
  const title = response.data.page.title;

  return {
    props: { content, title },
    revalidate: 1, // <--- Revalidation Time
  };
}
