{
    form: {
        name:"SignUpForMyService",
        action:"https://mySite/SignUp",
        method:"POST",
        fields: [
                {
                    name:"email",
                    type:"email",
                    required:"yes",
                    autofocus:"yes"
                    label:"Enter you email address"
                },
                {
                    name:"Password",
                    type:"password",
                    required:"yes"
                },
                {
                    name:"PasswordConfirm",
                    type:"password",
                    required:"yes",
                    placeholder:"Confirm your password"
                }
                {
                    name:"Age",
                    type:"numeric"
                },
                {
                    name:"website",
                    type:"url",
                    label:"Enter your website (optional)"
                }
            ]
    }

}
