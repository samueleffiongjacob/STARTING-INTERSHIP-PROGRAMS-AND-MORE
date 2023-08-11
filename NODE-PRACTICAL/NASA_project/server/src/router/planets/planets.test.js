const request = require("supertest");
const app = require("../../app");
const { mongoConnect, mongoDisconnect } = require("../../services/mongodb");

// APP REQUEST FUCTION
//SUPERTEST TESTING

describe("PLANET GET API ", () => {
  beforeAll(async () => {
    await mongoConnect();
  });

  // discounting from db

  afterAll(async () => {
    await mongoDisconnect();
  });

  describe("TEST GET /planets", () => {
    test("It should response with 200 sucess", async () => {
      const response = await request(app)
        .get("/v1/planets")
        .expect("Content-Type", /json/)
        .expect(200);
    });
  });
});
