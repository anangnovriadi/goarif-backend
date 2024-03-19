import request from "supertest";

import app from "../src/index";

describe("Auth test", () => {
    it("auth login test", async () => {
        const res = await request(app)
            .post("/api/login")
            .send({
                email: "test@mail.com",
                password: "123456"
            });

        expect(res.statusCode).toBe(200);
    });
});