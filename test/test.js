const request = require("supertest");
const app = require("../app");

describe("GET /", () => {
    it("responds with Sample Git Hub Actions", (done) => {
        request(app).get("/").expect("Sample Git Hub Actions", done);
    })
});