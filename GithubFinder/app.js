//Init github
const github = new GitHub;
//Init UI
const ui = new UI;
//search input
const searchUser = document.getElementById('searchUser');

//search input event listener
searchUser.addEventListener('keyup', (e) => {
    //get input text
    const userText = e.target.value;

    if(userText !== ''){
        //Make http call
        github.getUser(userText)
        .then(data => {
            if(data.profile.message === 'Not Found') {
                //Show alert

            }else {
                //Show Profile
                ui.showProfile(data.profile);
            }
        })
    }else {
        //clear profile

    }
});