describe("Circle", function() {
    var circle;

    beforeEach(function() {
        circle = new Circle();
    });

    it("should have a radius of 100", function() {
        expect(circle.radius).toEqual(100);
    });

    it("should have a default x and a y position", function() {
        expect(circle.getCoords()).toEqual([0, 0]);
    });

    describe('#randomisePostition', function() {
        it("returns a random postition between a given 2d range", function() {
            spyOn(Math, 'random').and.returnValue(1);
            circle.randomisePosition(10, 10);
            expect(circle.getCoords()).toEqual([10, 10]);
        });
    });
});