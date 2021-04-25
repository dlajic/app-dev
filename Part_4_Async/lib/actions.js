///////////////////////////////////////////////////////////////////
// Actions to prepare the bread and butter of async programming. //
///////////////////////////////////////////////////////////////////

module.exports = function (doAsync, doSilly, doExit) {

  let { logCounter, log, err } = require("./log.js")(doAsync, doSilly, doExit);

  let { fridge, table, bread } = require("./kitchen.js")(
    doAsync,
    doSilly,
    doExit
  );

  // Let's decide how many bread slices to cut.
  // I will cut between 1 and the max number of available slices.
  let nSlicesNeeded = doAsync
    ? Math.ceil(Math.random() * bread.availableSlices)
    : 1;

  // Open Fridge.
  ///////////////
  function openFridge() {
    logCounter("I am opening the fridge.");

    if (fridge.opened) {
      log(
        "Wait...it is already open! Who left it opened??? Brendan was it you?"
      );
    }
    else {
      if (doSilly && Math.random() > 0.8) {

        log("Oh no, the door is stuck I cannot open the fridge!");

        setTimeout(() => {
          log("OK, I removed the baby-lock and I opened the fridge's door.");
          fridge.opened = true;
        }, 2000);
      }
      else {
        fridge.opened = true;
      }
    }
  }

  
  // Take Butter.
  //
  // Self-executing function (closure) to create private variables.
  /////////////////////////////////////////////////////////////////
  let takeButter = (function () {

    // Private function.
    function _justTakeTheButter() {
      logCounter("I am taking the butter.");
      fridge.stuff.butter = false;
      table.butter = true;
    }

    // The actual function that will be assigned to takeButter.
    return function () {
      if (!fridge.opened) {
        err("The fridge is closed, you fool!");
      }
      if (!fridge.stuff.butter) {
        err("There is no butter in the fridge, we are all going to die!");
      }

      // Is there too much stuff in the fridge?
      if (Object.keys(fridge.stuff).length > 4) {
        // With a certain probability the fridge is cluttered
        // and you cannot find the butter immediately.
        log("Where the hell is the butter?");
        log("Who took my butter?! Brendan!!");

        setTimeout(_justTakeTheButter, 2000);
      }
      else {
        _justTakeTheButter();
      }
    };
  })();

  // Take Bread.
  //
  // We are just taking the bread and putting on the table.
  // At least this one does not fail.
  ////////////////////////////////////
  function takeBread() {
    table.bread = bread;
    logCounter("I am taking the bread.");
  }

  // Slice Bread.
  //
  // Self-executing function (closure) to create private variables.
  /////////////////////////////////////////////////////////////////
  let sliceBread = (function () {

    function _putBreadSliceOnPlate(txt = "I am slicing the bread.") {
      logCounter(txt);
      // Increment the number of bread slices on the plate.
      if (!table.plate.breadSlices) table.plate.breadSlices = 1;
      else table.plate.breadSlices++;
    }

    // The actual function that will be assigned to sliceBread.
    return function () {
      let bread = table.bread;
      // Switch-true pattern to check multiple conditions.
      // It is equivalent to multiple if/else statements.
      switch (true) {
        case !table.bread:
          err("I have no knife!");
        case !bread:
          err("There is no bread, I am not in the mood to slice air.");
        case bread.availableSlices <= 0:
          err("No more bread to slice.");
        case bread.availableSlices < 3:
          logCounter(
            "There is a little bread left, it's kind of difficult to cut it."
          );
          if (Math.random() > 0.4) {
            err("I cut myself, I told you!");
          }
      }

      // Whole wheat is complicated and we always do at most one slice.
      if (bread.type === "Whole Wheat") {
        log(
          "Oh, the bread is " +
            bread.type.toLowerCase() +
            "; its crust is kind of hard...it'll take a while to slice it without a chainsaw."
        );

        // Create async function executed after a timeout of 3 seconds.
        setTimeout(() => {
          _putBreadSliceOnPlate(
            "I finally managed to cut a slate from that stone-bread."
          );
        }, 3000);
      }
      // If it is white bread we might do more slices.
      else {
        // Cut the first slice.
        _putBreadSliceOnPlate();

        if (nSlicesNeeded > 1) {
          // Create async function executed with a periodic interval of 1 second.
          // We keep a reference to the interval, so that we can remove it when
          // we are done slicing.
          let intervalSlicing = setInterval(() => {
            let stillNeeded = nSlicesNeeded - table.plate.breadSlices;
            log(`Just ${stillNeeded} slices left to cut...`);

            _putBreadSliceOnPlate();

            if (nSlicesNeeded === table.plate.breadSlices) {
              clearInterval(intervalSlicing);
            }
          }, 1000);
        }
      }
    };
  })();

  // Spread Butter.
  /////////////////
  function spreadButter() {
    logCounter("I am spreading the butter on the bread.");
    
    if (!table.butter) {
      err("There is no butter on the table? How can I spread it?");
    }
    if (!table.plate.breadSlices) {
      err("I haven't sliced my bread yet, how can I spread the butter?");
    }
    
  }

  // Yummy!
  /////////
  function yummy() {
    logCounter("Yummy!");
  }

  return {
    openFridge,
    takeButter,
    takeBread,
    sliceBread,
    spreadButter,
    yummy,
  };
};
