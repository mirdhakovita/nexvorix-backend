export class AuthService {
  async login(username: string, password: string): Promise<{ status: string; message: string }> {
    if (!username || !password) {
      return {
        status: "error",
        message: "Username and password required",
      };
    }
    return {
      status: "not_implemented",
      message: "Login service skeleton ready - waiting for IRIS contract",
    };
  }
}

export const authService = new AuthService();
