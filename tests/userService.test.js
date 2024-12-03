const UserService = require("../src/services/userService");

describe("UserService", () => {
  let userService;

  beforeEach(() => {
    const userRepositoryMock = {
      createUser: jest.fn(),
      getAllUsers: jest.fn(),
    };
    userService = new UserService(userRepositoryMock);
  });

  test("should validate and create a user", async () => {
    const user = { name: "John", email: "john@example.com", age: 30 };
    await expect(userService.createUser(user)).resolves.not.toThrow();
  });
});
