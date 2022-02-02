const swap_btn = document.querySelector(".swap-btn");
const origin_input = document.querySelector(".origin-input");
const destination_input = document.querySelector(".destination-input");
const calender_container = document.querySelector(".selectiongroup");
const calender_input = document.querySelector(".calender-input");
const checkbox_custom = document.querySelector(".checkbox-custom");
const form_defence_options = document.querySelector(".form-defence-options");
const defence_dropdown_item = document.querySelectorAll(
  ".defence-dropdown-item"
);
const defence_input = document.querySelector(".defence-input");
const defence_dropdown_input = document.querySelector(
  ".defence-dropdown-input"
);
const defence_dropdown_container = document.querySelector(
  ".defence-dropdown-container"
);
const minus_icon = document.querySelectorAll(".minus-icon");
const plus_icon = document.querySelectorAll(".plus-icon");
const question_icon = document.querySelector(".question-icon");
const travellers_input = document.querySelector(".travellers-input");
const traveller_tabs = document.querySelectorAll(".traveller-tab");
var total_travellers = 1;
var traveller_tab = "Eco";
var today = new Date();
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
var yyyy = today.getFullYear();
var mS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

swap_btn.addEventListener("click", () => {
  swap_btn.style.transform = "rotateX(180deg)";
  let temp = origin_input.value;
  origin_input.value = destination_input.value;
  destination_input.value = temp;
});

question_icon.addEventListener("click", () => {
  const overlay_pannel = document.querySelector(
    ".overlaypanel-content-container"
  );
  if (overlay_pannel.style.display == "block") {
    overlay_pannel.style.display = "none";
  } else {
    overlay_pannel.style.display = "block";
  }
});
calender_container.addEventListener("click", () => {
  calender_input.min = `${yyyy}-${mm}-${dd}`;
  calender_input.max = `${yyyy + 1}-${mm}-${dd}`;
  //   calender_input.pattern = "d{4}-d{2}-d{2}";
  // calender_input.value = `${dd} ${mS[mm - 1]} ${yyyy}`;
});
checkbox_custom.addEventListener("click", () => {
  if (checkbox_custom.checked) {
    form_defence_options.style.display = "block";
  } else {
    form_defence_options.style.display = "none";
  }
});
defence_dropdown_input.addEventListener("click", () => {
  if (defence_dropdown_container.style.display == "block") {
    defence_dropdown_container.style.display = "none";
  } else {
    defence_dropdown_container.style.display = "block";
  }

  for (let i = 0; i < defence_dropdown_item.length; i++) {
    defence_dropdown_item[i].addEventListener("click", (e) => {
      defence_input.value = defence_dropdown_item[i].innerText;
      defence_dropdown_container.style.display = "none";
    });
  }
});
travellers_input.addEventListener("click", () => {
  const traveller_overlay = document.querySelector(".traverller-overlay");
  if (traveller_overlay.style.display == "block") {
    traveller_overlay.style.display = "none";
  } else {
    traveller_overlay.style.display = "block";
  }
});
for (let i = 0; i < minus_icon.length; i++) {
  minus_icon[i].addEventListener("click", () => {
    let temp = minus_icon[i].nextElementSibling.innerText;
    temp--;
    total_travellers--;
    if (temp < 0) {
      minus_icon[i].nextElementSibling.innerText = 0;
    } else {
      minus_icon[i].nextElementSibling.innerText--;
      if (total_travellers < 0) {
        total_travellers = 0;
      }
    }
    const adults_count = document.querySelector(".adults-count").innerText;
    const children_count = document.querySelector(".children-count").innerText;
    const infants_count = document.querySelector(".infants-count").innerText;
    travellers_input.value = `${adults_count} Ad, ${children_count} Ch, ${infants_count} In, ${traveller_tab}`;
  });
  plus_icon[i].addEventListener("click", () => {
    let temp = plus_icon[i].previousElementSibling.innerText;
    temp++;
    total_travellers++;
    if (temp > 9 && total_travellers < 10) {
      plus_icon[i].previousElementSibling.innerText = 9;
    } else if (total_travellers < 10) {
      plus_icon[i].previousElementSibling.innerText++;
    } else if (total_travellers > 9) {
      total_travellers = 9;
    }
    const adults_count = document.querySelector(".adults-count").innerText;
    const children_count = document.querySelector(".children-count").innerText;
    const infants_count = document.querySelector(".infants-count").innerText;
    travellers_input.value = `${adults_count} Ad, ${children_count} Ch, ${infants_count} In, ${traveller_tab}`;
  });
}
for (let i = 0; i < traveller_tabs.length; i++) {
  traveller_tabs[i].addEventListener("click", (e) => {
    const adults_count = document.querySelector(".adults-count").innerText;
    const children_count = document.querySelector(".children-count").innerText;
    const infants_count = document.querySelector(".infants-count").innerText;

    for (let j = 0; j < traveller_tabs.length; j++) {
      traveller_tabs[j].classList.remove("active");
    }
    traveller_tabs[i].classList.add("active");
    if (traveller_tabs[i].innerText == "Economy") {
      traveller_tab = "Eco";
    } else if (traveller_tabs[i].innerText == "Premium Economy") {
      traveller_tab = "Pre";
    } else if (traveller_tabs[i].innerText == "Business") {
      traveller_tab = "Bus";
    }
    travellers_input.value = `${adults_count} Ad, ${children_count} Ch, ${infants_count} In, ${traveller_tab}`;
  });
}
