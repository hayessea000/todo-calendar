let today= dayjs();
$("#currentDay").text(today.format("dddd, MMMM D YYYY"));
let hour= today.format("H")
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
        saveButtonDiv.on("click", function(){
            saveDay= [nine.val(),ten.val(),eleven.val(),twelve.val(),one.val(),two.val(),three.val(),four.val(),five.val()]
            localStorage.setItem("todo", JSON.stringify(saveDay));
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