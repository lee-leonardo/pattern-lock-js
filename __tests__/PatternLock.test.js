import PatternLock from '../src/PatternLock'

const timeoutInt = 5000;

describe('PatternLock snapshots', () => {
    beforeAll(async () => {
        const context = await global.__BROWSER__.newContext();
        page = await context.newPage();
        await page.goto('/test.html');
    }, timeout);

    afterAll(async () => {
        await page.close();
    });

    test('happy test case', async () => {
        const lock = PatternLock({
            $canvas: '',
            width: 500,
            height: 500,
            grid: [ 3, 3 ],
        })

        expect(lock).toMatchSnapshot()
    })
})