import {  gql, DocumentNode } from "@apollo/client";

const SEARCH_QUERY: DocumentNode = gql`
query ($q: SearchQuery!, $offset: Int!, $limit: PaginationLimit!) {
    search(q: $q) {
        hitcount
        works(offset: $offset, limit: $limit) {
          manifestations {
            first {
              cover {
                detail
              }
            }
          }
          titles {
            main
          }
          creators {
            display
          }
          subjects {
            dbcVerified {
              display
            }
          }
        }
      }
  }
`;
export {SEARCH_QUERY};