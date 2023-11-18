import { Auth } from '.';

describe('Auth Entity', () => {
  let auth: Auth;

  it('should create an instance', () => {
    auth = Auth.New({
      email: '',
      password: '',
    });
    expect(auth).toBeDefined();
  });

  it('should create an instance from JSON', () => {
    auth = Auth.fromJSON(
      JSON.stringify({
        email: '',
        password: '',
      }),
    );

    expect(auth).toBeDefined();
    expect(auth.email).toBe('');
    expect(auth.password).toBe('');
  });
});
