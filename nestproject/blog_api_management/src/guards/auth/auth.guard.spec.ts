import { Jwtguard } from './auth.guard';

describe('AuthGuard', () => {
  it('should be defined', () => {
    expect(new Jwtguard()).toBeDefined();
  });
});
