import { DeletModule } from './delet.module';

describe('DeletModule', () => {
  let deletModule: DeletModule;

  beforeEach(() => {
    deletModule = new DeletModule();
  });

  it('should create an instance', () => {
    expect(deletModule).toBeTruthy();
  });
});
