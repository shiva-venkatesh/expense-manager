var filteredFriend = {}
var filteredArray = []
$.get('/groups/friends', function(friends) {
  friends.map((friend, index) => {
    filteredFriend.id = index
    filteredFriend.text = friend.name
    filteredArray[index] = filteredFriend
    filteredFriend = {}
  })
  $('.select-friends').select2({
    data: filteredArray,
    multiple: true
  })
  console.log($(".select-group option:selected").text())
})

function saveGroup() {
  var selectedFriends = $(".select-friends option:selected").text()
  var newGroup = {
    name: $('#group-name').val(),
    friends: selectedFriends
  }
  console.log(newGroup)
  localStorage.setItem('newGroup', JSON.stringify(newGroup))
  alert('You have created a group!')
  window.location = '/bills'
}
