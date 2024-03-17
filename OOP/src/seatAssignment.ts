class SeatAssignment{
    // Index signature property
    [seatNumber: string]: string;
}

let seats = new SeatAssignment();
seats.A1 = "Prem Kumar";
seats['A2'] = 'Akash Reddy';

console.log(seats);




// static properties
class Ride{
    // init here or use a constructor:)
    private static _activeRides  : number = 0;

    start() { Ride._activeRides++; }
    stop() { Ride._activeRides--; }
    static get activeRides() { return Ride._activeRides };
} 

let ride1 = new Ride();
ride1.start();
let ride2 = new Ride();
ride2.start();

console.log(Ride.activeRides);



