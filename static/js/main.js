(function inputCheck() {

  const dayEl = document.querySelectorAll("ul.day-list>li");
  dayEl.forEach( el => {
    el.addEventListener("click", () => {
      const checkboxInputEl = el.firstElementChild
      let value = checkboxInputEl.checked
      checkboxInputEl.checked = !value
    })
  })

})();


(function changeDayColorBaseOnInput() {

  const nodeMondays   = document.querySelectorAll(".mon");
  const nodeTuesadys  = document.querySelectorAll(".tue");
  const nodeWednesday = document.querySelectorAll(".wed");
  const nodeThurdays  = document.querySelectorAll(".thu");
  const nodeFridays   = document.querySelectorAll(".fri");
  const nodeSaturdays = document.querySelectorAll(".sat");
  const nodeSundays   = document.querySelectorAll(".sun");

  const mondays    = [...nodeMondays].slice(1);
  const tuesdays   = [...nodeTuesadys].slice(1);
  const wednesdays = [...nodeWednesday].slice(1);
  const thurdays   = [...nodeThurdays].slice(1);
  const fridays    = [...nodeFridays].slice(1);
  const saturdays  = [...nodeSaturdays].slice(1);
  const sundays    = [...nodeSundays].slice(1);

  const mondayInput    = document.getElementById("monday-input-li");
  const tuesdayInput   = document.getElementById("tuesday-input-li");
  const wednesdayInput = document.getElementById("wednesday-input-li");
  const thurdayInput   = document.getElementById("thurday-input-li");
  const fridayInput    = document.getElementById("friday-input-li");
  const saturdayInput  = document.getElementById("saturday-input-li");
  const sundayInput    = document.getElementById("sunday-input-li");


  mondayInput.addEventListener("click", el => {
    mondays.forEach(( monday => {
      monday.classList.toggle("selected-day")
      }))
    });

  tuesdayInput.addEventListener("click", () => {
    tuesdays.forEach( tuesday => {
      tuesday.classList.toggle("selected-day")
    });
  })

  wednesdayInput.addEventListener("click", () => {
    wednesdays.forEach( wednesday => {
      wednesday.classList.toggle("selected-day");
    })
  })

  thurdayInput.addEventListener("click", () => {
    thurdays.forEach( thurday => {
      thurday.classList.toggle("selected-day");
    });
  })

  fridayInput.addEventListener("click", ()=> {
    fridays.forEach( friday => {
      friday.classList.toggle("selected-day")
    })

  })

  saturdayInput.addEventListener("click", () => {
    saturdays.forEach( saturday => {
      saturday.classList.toggle("selected-day")
    })
  })

  sundayInput.addEventListener("click", () => {
    sundays.forEach( sunday => {
      sunday.classList.toggle("selected-day")
    })
  })

})();
