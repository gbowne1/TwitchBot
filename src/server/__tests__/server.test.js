const { MongoMemoryServer } = require("mongodb-memory-server");
const request = require("supertest");

let mongo;
let server;

beforeAll(async () => {
  mongo = await MongoMemoryServer.create();
  const uri = mongo.getUri();
  // Generate a random secret key for JWT auth
  process.env.SECRET_KEY = require("crypto").randomBytes(32).toString("hex");
  // Passing the in-memory database connection string to the server
  process.env.MONGO_TEST_URI = `${uri}twitchbot`;
  server = require("../server.js");
});

afterAll(async () => {
  await server.close();
  await mongo.stop();
});

describe("Server", () => {
  describe("POST /register", () => {
    it("should register a new user", async () => {
      const res = await request(server).post("/register").send({
        username: "testuser",
        email: "test@test.com",
        password: "testpassword",
      });
      expect(res.statusCode).toEqual(201);
    });

    it("should return an error for duplicate username", async () => {
      const res = await request(server)
        .post("/register")
        .send({ username: "testuser", password: "testpassword" });
      expect(res.statusCode).toEqual(400);
    });
  });

  describe("POST /login", () => {
    it("should log in a user", async () => {
      const res = await request(server)
        .post("/login")
        .send({ username: "testuser", password: "testpassword" });
      expect(res.statusCode).toEqual(200);
    });

    it("should return an error for invalid credentials", async () => {
      const res = await request(server)
        .post("/login")
        .send({ username: "invaliduser", password: "invalidpassword" });
      expect(res.statusCode).toEqual(401);
      // Add more assertions to validate the error response if needed
    });
  });

  describe("POST /logout", () => {
    it("should log out a user", async () => {
      const res = await request(server).post("/logout");
      expect(res.statusCode).toEqual(200);
    });
  });
});
