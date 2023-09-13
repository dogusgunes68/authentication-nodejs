const {createServer} = require("../server");
const request = require("supertest");
const app = createServer();

const token = "asdadasd"

describe("GET /post", () => {
    it("should have a token", async () => {
            request(app)
            .get(`/auth/post/${85}`)
            .set('Authorization', 'Bearer '+token)
            .expect(201)

    });
});
