"use strict";
class SeatAssignment {
}
let seats = new SeatAssignment();
seats.A1 = "Prem Kumar";
seats['A2'] = 'Akash Reddy';
console.log(seats);
// static properties
class Ride {
    start() { Ride._activeRides++; }
    stop() { Ride._activeRides--; }
    static get activeRides() { return Ride._activeRides; }
    ;
}
// init here or use a constructor:)
Ride._activeRides = 0;
let ride1 = new Ride();
ride1.start();
let ride2 = new Ride();
ride2.start();
console.log(Ride.activeRides);
//# sourceMappingURL=seatAssignment.js.map