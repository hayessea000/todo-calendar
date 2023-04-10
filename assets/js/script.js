let today= dayjs();
$("#currentDay").text(today.format('dddd, MMMM D YYYY'));

let times = [
    {blockTime: "9am", timeValue: 9, id: "hour-9"},
    {blockTime: "10am", timeValue: 10, id: "hour-10"},
    {blockTime: "11am", timeValue: 11, id: "hour-11"},
    {blockTime: "12pm", timeValue: 12, id: "hour-12"},
    {blockTime: "1am", timeValue: 13, id: "hour-13"},
    {blockTime: "2am", timeValue: 14, id: "hour-14"},
    {blockTime: "3am", timeValue: 15, id: "hour-15"},
    {blockTime: "4am", timeValue: 16, id: "hour-16"},
    {blockTime: "5am", timeValue: 17, id: "hour-17"},
]


function makeTimeBlocks(){
    for (let i= 0; i<times.length; i++){
        let rowDiv= $("<div>")
        rowDiv.addClass("row time-block")
        rowDiv.attr("id", times[i].id)

        let blockTimeDiv= $("<div>")
        blockTimeDiv.addClass("col-2 col-md-1 hour text-center py-3")
        blockTimeDiv.text(times[i].blockTime)

        let textarea =$("<textarea>")
        textarea.addClass("col-8 col-md-10 description")
        textarea.attr("rows", "3")

        let saveButtonDiv= $("<button>")
        saveButtonDiv.addClass("btn saveBtn col-2 col-md-1")
        saveButtonDiv.attr("id", "save-button")
        saveButtonDiv.attr("aria-label", "save")

        let iDiv= $("<i>")
        iDiv.addClass("fas fa-save")
        iDiv.attr("aria-hidden", "true")
    }
}







// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
  });
  