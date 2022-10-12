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


const SUGGEST_QUERY: DocumentNode = gql `query ($q: String!, $worktype: WorkType, $suggesttype: SuggestionType) {
    suggest(q: $q, workType: $worktype, suggestType: $suggesttype) {
      result {
        type
        work {
          titles {
            main
          }
          creators {
            display
          }
          manifestations {
            first {
              cover {
                detail
              }
            }
          }
        }
      }
    }
  }`
export {SEARCH_QUERY,SUGGEST_QUERY};