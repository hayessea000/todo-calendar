let today= dayjs();
$("#currentDay").text(today.format("dddd, MMMM D YYYY"));
let hour= today.format("H")
console.log(hour)

let times = [
    {blockTime: "9am", timeValue: 9, id: "hour-9"},
    {blockTime: "10am", timeValue: 10, id: "hour-10"},
    {blockTime: "11am", timeValue: 11, id: "hour-11"},
    {blockTime: "12pm", timeValue: 12, id: "hour-12"},
    {blockTime: "1pm", timeValue: 13, id: "hour-13"},
    {blockTime: "2pm", timeValue: 14, id: "hour-14"},
    {blockTime: "3pm", timeValue: 15, id: "hour-15"},
    {blockTime: "4pm", timeValue: 16, id: "hour-16"},
    {blockTime: "5pm", timeValue: 17, id: "hour-17"},
]


function makeTimeBlocks(){
    for (let i= 0; i<times.length; i++){
        let dayBlock= $(".dayBlock")
        let rowDiv= $("<div>")
        rowDiv.addClass("row time-block")
        rowDiv.attr("id", times[i].id)
        if (times[i].timeValue>hour){
            rowDiv.addClass("future")
        }else if (times[i].timeValue<hour){
            rowDiv.addClass("past")
        }else if (times[i].timeValue==hour){
            rowDiv.addClass("present")
        }
        let blockTimeDiv= $("<div>")
        blockTimeDiv.addClass("col-2 col-md-1 hour text-center py-3")
        blockTimeDiv.text(times[i].blockTime)
        let textAreaDiv =$("<textarea>")
        textAreaDiv.addClass("col-8 col-md-10 description")
        textAreaDiv.attr("rows", "3")
        let saveButtonDiv= $("<button>")
        saveButtonDiv.addClass("btn saveBtn col-2 col-md-1")
        saveButtonDiv.attr("id", "saveMe")
        saveButtonDiv.attr("aria-label", "save")
        let iDiv= $("<i>")
        iDiv.addClass("fas fa-save")
        iDiv.attr("aria-hidden", "true")

        dayBlock.append(rowDiv)
        rowDiv.append(blockTimeDiv, textAreaDiv, saveButtonDiv)
        saveButtonDiv.append(iDiv)
        saveButtonDiv.on("click", function(event){
            dayBlock.innerHTML = "";
            console.log("hello")
            saveDay= [nine.val(),ten.val(),eleven.val(),twelve.val(),one.val(),two.val(),three.val(),four.val(),five.val()]
            localStorage.setItem("todo", JSON.stringify(saveDay));
            console.log(saveDay)
        })
    }
    let nine =$("#hour-9 .description")
    let ten =$("#hour-10 .description")
    let eleven =$("#hour-11 .description")
    let twelve =$("#hour-12 .description")
    let one =$("#hour-13 .description")
    let two =$("#hour-14 .description")
    let three =$("#hour-15 .description")
    let four =$("#hour-16 .description")
    let five =$("#hour-17 .description")
    let saveDay = JSON.parse(localStorage.getItem("todo"));
    let blocks =[nine,ten,eleven,twelve,one,two,three,four,five]
    if (saveDay!=null){
        for(let i=0; i<saveDay.length; i++){
            blocks[i].val(saveDay[i])
        }
    }
}
makeTimeBlocks()





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
  


