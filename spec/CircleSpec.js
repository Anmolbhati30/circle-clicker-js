describe("Circle", function() {
    var circle;

    beforeEach(function() {
        circle = new Circle();
    });

    it("should have a radius of 100", function() {
        expect(circle.radius).toEqual(100);
    });

});