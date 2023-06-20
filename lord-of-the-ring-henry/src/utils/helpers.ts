export type Params = {
    limit: number;
    page: number;
    offset: number;
    name?: string;
    race?: string;
}
export const encodeQueryString = (params: Params) =>
    Object.keys(params)
        .filter(key => params[key as keyof Params] !== '')
        .map(key => key + '=' + params[key as keyof Params])
        .join('&');