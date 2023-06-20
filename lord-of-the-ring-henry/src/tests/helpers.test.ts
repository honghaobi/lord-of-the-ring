import { encodeQueryString } from '../utils/helpers';
describe('encodeQueryString', () => {
    test('encodes query string with non-empty params', () => {
        const params = {
            limit: 10,
            page: 1,
            offset: 0,
            name: 'Frodo',
        };

        const queryString = encodeQueryString(params);

        expect(queryString).toBe('limit=10&page=1&offset=0&name=Frodo');
    });

    test('ignores empty params in query string', () => {
        const params = {
            limit: 10,
            page: 1,
            offset: 0,
            name: '',
        };

        const queryString = encodeQueryString(params);
        expect(queryString).toBe('limit=10&page=1&offset=0');
    });

    test('returns an empty string for empty params object', () => {
        const params = {} as any;
        const queryString = encodeQueryString(params);
        expect(queryString).toBe('');
    });
});