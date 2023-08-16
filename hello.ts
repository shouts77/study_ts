"use strict";

function great(person, date) {
    console.log("Hello ".concat(person, ", today is ").concat(date.toDateString(), "!"));
}

great("Brendan", new Date());

