import { GgataskPage } from './app.po';

describe('ggatask App', () => {
  let page: GgataskPage;

  beforeEach(() => {
    page = new GgataskPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
