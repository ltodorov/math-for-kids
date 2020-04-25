export type ParsedQuery = Record<string, number>;

/**
 * Parse a URL query string
 * @param {string} search The query string
 */
export function getParsedQueryParams(search: string): ParsedQuery {
    const withoutLeading = search.slice(1); // Remove the leading "?"
    const splitQuery = withoutLeading.split("&");
    const parsedQuery: ParsedQuery = splitQuery.reduce((acc: ParsedQuery, str: string) => {
        if (str.length > 0) {
            const [key, value] = str.split("=");
            acc[key] = parseInt(value, 10); // Convert to number
        }
        return acc;
    }, {});
    return parsedQuery;
}