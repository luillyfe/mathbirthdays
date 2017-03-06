"use strict";
describe('MathBirthday', function() {
    var $controller, controller;
    beforeEach(inject(function(_$controller_){
        $controller = _$controller_;
        var $scope = {};
        controller = $controller('MainCtrl', { $scope: $scope });
    }));

    describe("When an user type its birthday", function () {
        it('getNextDate should be called', function() {
            controller.birthday = new Date("5/8/1990");
            controller.calcMathBirthday();

            expect(controller.mathBirthday).toEqual(4);
            expect(controller.getNextDate).toHaveBeenCalled();
        });
    });
});
