//W
// rite your code 
const attendee = {
  attendeeId: "T001",
  name: "Alice Smith",
  event: "Javascript Conference",
  ticketType: "VIP",
  ticketPrice : 150.00
}

function logAttendee(attendee){
  console.log(attendee.name);
}
function logTicketPrice(attendee){
  console.log(attendee.ticketPrice);

};
function updateTicketTypes(attendee, newTicketType){
  attendee.ticketType = newTicketType;

}

function updateTicketPrice(attendee, newTicketPrice){
  attendee.ticketPrice = newTicketPrice;

}
function removeEventProperty(attendee){
  delete attendee.event;

}
function addCheckedInProperty(attendee){
  attendee.checkedIn = true;

}
logAttendee(attendee);
logTicketPrice(attendee);
updateTicketTypes(attendee, "gate");
updateTicketPrice(attendee, 300);
removeEventProperty(attendee);
addCheckedInProperty(attendee);






//Needed for the tests to work. Don't modify
/* module.exports = {
  ...(typeof attendee !== 'undefined' && { attendee }),
  ...(typeof logAttendeeName !== 'undefined' && { logAttendeeName }),
  ...(typeof logTicketPrice !== 'undefined' && { logTicketPrice }),
  ...(typeof updateTicketType !== 'undefined' && { updateTicketType }),
  ...(typeof updateTicketPrice !== 'undefined' && { updateTicketPrice }),
  ...(typeof removeEventProperty !== 'undefined' && { removeEventProperty }),
  ...(typeof addCheckedInProperty !== 'undefined' && { addCheckedInProperty })
}; */