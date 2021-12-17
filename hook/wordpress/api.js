// export const GET_PAGE = `query getPage {
//     page(id: "homepage", idType: URI) {
//         id
//         content(format: RENDERED)
//     }
//   }`;

export const GET_ABOUT = `query getPage {
    page(id: "about", idType: URI) {
        content
        title
      }
  }`;

export const GET_HOMEPAGE = `query getPage {
    page(id: "homepage", idType: URI) {
        content
        title
      }
  }`;
