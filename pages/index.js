import { Fragment } from "react";
import fetcher from "../hook/fetcher";
import { GET_ABOUT, GET_HOMEPAGE, GET_PAGE } from "../hook/wordpress/api";
import Link from "next/link";

function Homepage(props) {
  const { content, title } = props;
  return (
    <>
      <Link href="/about">
        <a>ABOUT</a>
      </Link>
      <Fragment>
        <h1>{title}</h1>
        <div
          dangerouslySetInnerHTML={{ __html: content }}
          className="wordpress-content"
        />
      </Fragment>
    </>
  );
}

export default Homepage;

export async function getStaticProps() {
  const response = await fetcher(GET_HOMEPAGE);
  const content = response.data.page.content;
  const title = response.data.page.title;

  return {
    props: { content, title },
    revalidate: 1,
  };
}
