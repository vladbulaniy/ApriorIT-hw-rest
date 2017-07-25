var request = require("request");

var base_url = "http://localhost:3000"

describe("Delete a cat", function() {
  describe("DELETE /", function() {
    it("returns status code 200", function(done) {
      request.delete(base_url + '/cats/18', function(error, response, body) {
        expect(response.statusCode).toBe(200);
        done();
      });
    });

    it("returns The cat was deleted", function(done) {
      request.delete(base_url + '/cats/18', function(error, response, body) {
        expect(body).toBe("The cat was deleted");
        done();
      });
    });
  });
});