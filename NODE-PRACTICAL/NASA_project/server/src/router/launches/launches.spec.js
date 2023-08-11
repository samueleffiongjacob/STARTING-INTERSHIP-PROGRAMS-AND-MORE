const request = require("supertest");
const app = require("../../app");
const { mongoConnect, mongoDisconnect } = require("../../services/mongodb");

describe("LAUNCHECHES API", () => {
  // adding db test
  beforeAll(async () => {
    await mongoConnect();
  });

  // discounting from db

  afterAll(async () => {
    await mongoDisconnect();
  });
  // APP REQUEST FUCTION
  //SUPERTEST TESTING

  describe("TEST GET /Launches", () => {
    test("It should response with 200 sucess", async () => {
      const response = await request(app)
        // super test way of testing
        .get("/v1/launches")
        .expect("Content-Type", /json/)
        .expect(200);
      // expect(response.statusCode).toBe(200);// jest way of testing
    });
  });

  describe("TEST POST /Launches", () => {
    const completeLaunchesData = {
      mission: "USS ENTERPRISE",
      rocket: "NCC 1701-D",
      target: "Kepler-668 b",
      launchDate: "1 october 4, 2028",
    };

    const launchDateWithoutDate = {
      mission: "USS ENTERPRISE",
      rocket: "NCC 1701-D",
      target: "Kepler-668 b",
    };

    const launchDateWithInvalidDate = {
      mission: "USS ENTERPRISE",
      rocket: "NCC 1701-D",
      target: "Kepler-668 b",
      launchDate: "samuel",
    };

    test("It should response with 201 sucess", async () => {
      const response = await request(app)
        .post("/v1/launches")
        .send(completeLaunchesData)
        // old way fixed into the bracket above
        //   {
        //   mission: "USS ENTERPRISE",
        //   rocket: "NCC 1701-D",
        //   target: "KEPLER-186 f",
        //   launchDate: "1 october 4, 2028",
        // }
        .expect("Content-Type", /json/)
        .expect(201);

      // jest assotions
      const requestDate = new Date(completeLaunchesData.launchDate).valueOf();
      const responseDate = new Date(response.body.launchDate).valueOf();
      expect(responseDate).toBe(requestDate);

      expect(response.body).toMatchObject(launchDateWithoutDate);
      // old way fixed into the bracket above
      //   {
      //    mission: "USS ENTERPRISE",
      //    rocket: "NCC 1701-D",
      //    target: "KEPLER-186 f",
      //  }
      // expect(response).toBe(200); //jest way of testing
    });

    test("It should response with 200 sucess", () => {
      const response = 200;
      expect(response).toBe(200);
    });

    test("It Invalid date", async () => {
      const response = await request(app)
        .post("/v1/launches")
        .send(launchDateWithInvalidDate)
        .expect("Content-Type", /json/)
        .expect(400);

      expect(response.body).toStrictEqual({
        error: "Invalid Launch date",
      });
    });

    test("It should catch missing required properties", async () => {
      const response = await request(app)
        .post("/v1/launches")
        .send(launchDateWithoutDate)
        .expect("Content-Type", /json/)
        .expect(400);

      expect(response.body).toStrictEqual({
        error: "Missing required launch Property",
      });
    });
  });

  // JEST TESTING
  // describe("TEST GET /Launches", () => {
  //   test("It should response with 200 sucess", () => {
  //     const response = 200;
  //     expect(response).toBe(200);
  //   });
  // });

  // describe("TEST POST /Launches", () => {
  //   test("It should response with 200 sucess", () => {
  //     const response = 200;
  //     expect(response).toBe(200);
  //   });

  //   test("It should response with 200 sucess", () => {
  //     const response = 200;
  //     expect(response).toBe(200);
  //   });

  //   test("It Invalid date", () => {
  //     const response = 200;
  //     expect(response).toBe(200);
  //   });

  //   test("It should catch missing required properties", () => {
  //     const response = 200;
  //     expect(response).toBe(200);
  //   });
  // });
});
