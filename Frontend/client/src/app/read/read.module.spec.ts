import { ReadModule } from './read.module';

describe('ReadModule', () => {
  let readModule: ReadModule;

  beforeEach(() => {
    readModule = new ReadModule();
  });

  it('should create an instance', () => {
    expect(readModule).toBeTruthy();
  });
});
