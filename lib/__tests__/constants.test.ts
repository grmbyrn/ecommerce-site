describe('constants env', () => {
    const OLD_ENV = process.env;

    beforeEach(() => {
        jest.resetModules()
        process.env = {...OLD_ENV};
    })

    afterAll(() => {
        process.env = OLD_ENV;
    })

    test('uses fallback when env not set', async () => {
        delete process.env.NEXT_PUBLIC_APP_NAME;
        const {APP_NAME} = await import ('@/lib/constants');
        expect(APP_NAME).toBe("Prostore");
    })

    test('reflects NEXT_PUBLIC_APP_NAME when set', async () => {
        process.env.NEXT_PUBLIC_APP_NAME = 'MyShop';
        jest.resetModules(); // ensure require reads fresh module
        const { APP_NAME } = await import ('@/lib/constants');
        expect(APP_NAME).toBe('MyShop');
    })
})