describe('Home Page', () => {
  it('Should have a page title', async () => {
    await page.goto('http://localhost:8080/', { timeout: 60000 });
    expect(await page.title()).toBe('Document');
  });
});
