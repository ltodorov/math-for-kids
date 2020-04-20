type ParsedQuery = Record<string, number>;

/**
 * Local cache for parsed query strings
 */
const CACHE: Record<string, ParsedQuery> = {};

/**
 * Get a parsed query string
 * @param search {string} a search string also known as a query string
 */
function getParsedQueryString(search: string): ParsedQuery {
    if (CACHE[search]) {
        return CACHE[search];
    }
    const withoutLeading: string = search.slice(1); // Remove the leading "?"
    const splitQuery: string[] = withoutLeading.split("&");
    const parsedQuery: ParsedQuery = splitQuery.reduce((acc: ParsedQuery, str: string) => {
        if (str.length > 0) {
            const [key, value] = str.split("=");
            acc[key] = parseInt(value, 10);
        }
        return acc;
    }, {});
    CACHE[search] = parsedQuery;
    return parsedQuery;
}

export default getParsedQueryString;