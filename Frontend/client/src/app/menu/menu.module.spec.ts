import { MenuModule } from './menu.module';
import {AddComponent } from './add/add.component';

describe('MenuModule', () => {
  let menuModule: MenuModule;

  beforeEach(() => {
    menuModule = new MenuModule();
  });

  it('should create an instance', () => {
    expect(menuModule).toBeTruthy();
  });
});
