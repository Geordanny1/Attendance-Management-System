function inputCheck() {

  const dayEl = document.querySelectorAll("ul.day-list>li");
  dayEl.forEach( el => {
    el.addEventListener("click", () => {
      const checkboxInputEl = el.firstElementChild
      let value = checkboxInputEl.checked
      checkboxInputEl.checked = !value
    })
  })

};



function changeDayColorBaseOnInput() {

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
      monday.classList.toggle("selected-day");
      }))
    });

  tuesdayInput.addEventListener("click", () => {
    tuesdays.forEach( tuesday => {
      tuesday.classList.toggle("selected-day");
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
      friday.classList.toggle("selected-day");
    })

  })

  saturdayInput.addEventListener("click", () => {
    saturdays.forEach( saturday => {
      saturday.classList.toggle("selected-day");
    })
  })

  sundayInput.addEventListener("click", () => {
    sundays.forEach( sunday => {
      sunday.classList.toggle("selected-day")
    })
  })

};

async function changeMonth(direction){ 

  const year  = Number(document.querySelector("th.month").innerText.replace(/\D/g,""))
  const month = getMonthFromString(document.querySelector("th.month").innerText.replace(/[^a-z]/gi, ""))

  const date =  {
    "month"     : month,
    "year"      : year,
    "direction" : direction
  }


  const response = await fetch("/changemonth", {
    "method"       : "POST",
    "headers"      : {
      "Content-Type" : "application/json"
    },
    "body"         : JSON.stringify(date)
    }
  )

  const result = await response.json();

  const calendar = document.querySelector("table.month")

  calendar.innerHTML = result["html"]


  const mondayInput    = document.getElementById("monday-input");
  const tuesdayInput   = document.getElementById("tuesday-input");
  const wednesdayInput = document.getElementById("wednesday-input");
  const thurdayInput   = document.getElementById("thurday-input");
  const fridayInput    = document.getElementById("friday-input");
  const saturdayInput  = document.getElementById("saturday-input");
  const sundayInput    = document.getElementById("sunday-input");


  const inputs = [mondayInput, tuesdayInput, wednesdayInput, thurdayInput, fridayInput, saturdayInput, sundayInput]

  changeDayColorBaseOnInput()

  inputs.forEach( input => {
    if ( input.checked === true ) {
      day = input.id.split("-")[0]
      applySelectedDay(day)
    }
  })


}


const next_button = document.getElementById("next");

next_button.addEventListener("click", () => {
  changeMonth("next");
})

const prev_button = document.getElementById("prev");

prev_button.addEventListener("click", () => {
  changeMonth("prev");
})

const present = document.getElementById("present")

present.addEventListener("click", () =>{
  changeMonth("present");
})


// Source - https://stackoverflow.com/a/13566675
// Posted by Aaron Romine, modified by community. See post 'Timeline' for change history
// Retrieved 2026-07-01, License - CC BY-SA 3.0

function getMonthFromString(mon){
   return new Date(Date.parse(mon +" 1, 2026")).getMonth()+1
}

function applySelectedDay(day) {

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

  switch (day) {

    case "monday":
      mondays.forEach( monday => {
        monday.classList.add("selected-day");
      })
      break;

    case "tuesday":
      tuesdays.forEach ( tuesday => {
        tuesday.classList.add("selected-day");
      })
      break;

    case "wednesday":
      wednesdays.forEach ( wednesday => {
        wednesday.classList.add("selected-day");
      })
      break;

    case "thurday":
      thurdays.forEach ( thurday => {
        thurday.classList.add("selected-day");
      })
      break;

    case "friday":
      fridays.forEach( friday => {
        friday.classList.add("selected-day");
      })
      break;

    case "saturday":
      saturdays.forEach( saturday => {
        saturday.classList.add("selected-day");
      })
      break;

    case "sunday":
      sundays.forEach( sunday => {
        sunday.classList.add("selected-day");
      })
      break;

  }

}

window.addEventListener("load", (event) => {
  inputCheck()
  changeDayColorBaseOnInput()
});
