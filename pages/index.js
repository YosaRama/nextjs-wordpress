import { Fragment } from "react";
import fetcher from "../hook/fetcher";
import { GET_PAGE } from "../hook/wordpress/api";

function Homepage(props) {
  const { result } = props;
  return (
    <Fragment>
      <div dangerouslySetInnerHTML={{ __html: result }}></div>
    </Fragment>
  );
}

export default Homepage;

export async function getStaticProps() {
  const response = await fetcher(GET_PAGE);
  const result = response.data.page.content;

  return {
    props: { result },
    revalidate: 1,
  };
}
