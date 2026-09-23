const getNewUser = new Promise((resolve, reject) => {
    let isLogin = true;

    setTimeout(() => {
        if (isLogin) {
            const user = {
                id: 152494,
                name: "Riya",
                role: "Manager",
                email: "riya@gmail.com",
                password: "Riya@1234",
            };

            resolve(user);
        } else {
            reject("Auth is required...");
        }
    }, 2000);
});
console.log(getNewUser);

getNewUser
    .then((res) => {
        console.log("Success : ", res);
    })
    .catch((error) => {
        console.error("Error : ", error);
    });