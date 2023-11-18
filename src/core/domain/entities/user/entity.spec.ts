import { User } from '.';

describe('Auth Entity', () => {
  let user: User;

  it('should create an instance', () => {
    user = User.New({
      email: 'joe@example.com',
      name: 'Joe Smith',
    });
    expect(user).toBeDefined();
  });

  it('should create an instance from JSON', () => {
    user = User.fromJSON(
      JSON.stringify({
        email: 'joe@example.com',
        name: 'Joe Smith',
      }),
    );

    expect(user).toBeDefined();
    expect(user.email).toBe('joe@example.com');
    expect(user.name).toBe('Joe Smith');
  });
});
