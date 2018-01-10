var filteredFriend = {}
var filteredArray = []

String.prototype.CamelCaseToArray = function() {
  var Delimed = this.replace(/([A-Z]+)/g, ",$1").replace(/^,/, "");
  return Delimed.split(",");
};

$.get('/groups/friends', function(friends) {
  friends.map((friend, index) => {
    filteredFriend.id = index
    filteredFriend.text = friend.name
    filteredArray[index] = filteredFriend
    filteredFriend = {}
  })
  $('.select-friend').select2({
    data: filteredArray,
    multiple: true
  })
  console.log($(".select-friend option:selected").text())
})

var payee = $(".select-friend option:selected").text()
$('#submitBill').click(function() {
  debugger
  var amount = $('#bill-amount').val()
  var group = localStorage.getItem('newGroup')
  var filteredGroupArray = JSON.parse(group)
  console.log(filteredGroupArray)
  $('#createBillForm').hide()
  $('.message').hide()
  var groupMembers = filteredGroupArray.friends.CamelCaseToArray()
  var groupStrength = groupMembers.length
  var payeeGetsBack = amount - (amount/groupStrength)
  groupMembers.map((member) => {
    if(member===$(".select-friend option:selected").text()) {
      debugger
      $('.compute-block').append('<span>' + member + 'gets back ' + payeeGetsBack + '</span>' )
    } else {
      $('.compute-block').append('<span>' + member + 'owes ' + (amount/groupStrength) + '</span>' )
    }
  })
})
