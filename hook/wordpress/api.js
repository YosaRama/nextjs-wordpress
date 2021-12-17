//? Wordpress Query for get About content
export const GET_ABOUT = `query getPage {
    page(id: "about", idType: URI) {
        content
        title
      }
  }`;

//? Wordpress Query for get Homepage content
export const GET_HOMEPAGE = `query getPage {
    page(id: "homepage", idType: URI) {
        content
        title
      }
  }`;
