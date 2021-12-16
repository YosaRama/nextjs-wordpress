export const GET_PAGE = `query getPage {
    page(id: "homepage", idType: URI) {
        id
        content(format: RENDERED)
    }
  }`;
