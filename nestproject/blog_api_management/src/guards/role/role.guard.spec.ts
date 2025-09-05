import { RolesGuard } from "./role.guard";

describe('RolesGuard', () => {
  it('should be defined', () => {
    const mockReflector = { get: jest.fn() } as any;
    expect(new RolesGuard(mockReflector)).toBeDefined();
  });
});