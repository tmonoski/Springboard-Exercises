
it('should calculate the monthly rate correctly', function () {
  const values = {
    amount: 5000,
    years: 5,
    rate: 5
  };
  expect(calculateMonthlyPayment(values)).toEqual('$94.36');
});


it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 5003,
    years: 5,
    rate: 5
  };
  expect(calculateMonthlyPayment(values)).toEqual('$94.41');
});

it("should calculate extremely high interest rates", function() {
  const values = {
    amount: 10000,
    years: 10,
    rate: 99
  };
  expect(calculateMonthlyPayment(values)).toEqual('$825.06');
});

