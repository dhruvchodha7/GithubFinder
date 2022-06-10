class GitHub {
    constructor() {
        this.client_id = '9f4ba461aadd0c9bec6d';
        this.client_secret = '9965f522d6d8a8361c6f91b2de7a0e555ffcb9f4';
    }


    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profileData = await profileResponse.json();

        return{
            profile
        }

    }
}