//TABS
function openCity(evt, cityName) {
  // Declare all variables
  let i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName('tabcontent');
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = 'none';
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName('tablinks');
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(' active', '');
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = 'block';
  evt.currentTarget.className += ' active';
}



//REGISTER
function form_submit() {
  let pass = document.getElementById('password').value;
  let repass = document.getElementById('retypePassword').value;

  if (pass != repass) {
    alert('Password must match');
    return false;
  }
  else {
    alert('Registration success!');
    return true;
  }
}

//CHAT
function onChatSent() {
  let comment = $('#comment').val();
  let nameChat = $('#nameChat').val();
  $('#comment').val('');

  let msgBlock = $('#messageTemplate').clone();
  msgBlock.find('.personName').html(nameChat.bold());
  msgBlock.find('.userMessage').html(comment);

  let today = new Date();
  let date = ((today.getDate() < 10) ? '0' : '') + today.getDate() + '.' + (today.getMonth() + 1) + '.' + today.getFullYear();
  let time = ((today.getHours() < 10) ? '0' : '') + today.getHours() + ':' + ((today.getMinutes() < 10) ? '0' : '') + today.getMinutes();
  let dateTime = (date + ' ' + time).bold();

  msgBlock.find('.chatTime').html(dateTime);

  msgBlock.appendTo('.firstPartofChat');
}



