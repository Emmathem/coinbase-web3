import Sanity from '@sanity/client';

export const client = new Sanity({
    projectId: 'ls7tqmaz',
    dataset: 'production',
    apiVersion: '24-01-2022',
    token: 'skfOCEB0vJFrKNfbqCzVOnqcrt1YN2voB388ITpUaAcmyjaeUTtNPVYdbytswLDshkbkvKPyMEGZkBZ4neRqge1ZTE1MWHEq65j6hSfZCWI2JSWy6vUhk4fh5L5LrkpCg4LLaX9QwmG728Tvr57RaV5O2ubCjFL60UY0cGWIqeuYhijHjPLf',
    useCdn: false,
})