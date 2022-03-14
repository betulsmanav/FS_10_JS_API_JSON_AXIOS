const mail = document.querySelector("#email");
const password = document.querySelector("#password");
const sbmtButon = document.querySelector("#submit");

window.addEventListener("load", () => {
    
    mail.value = "eve.holt@reqres.in";
    password.value = "pistol";
});
sbmtButon.addEventListener("click", e => {
    postCustumerRegister();
});
const postCustumerRegister = async() => {
    // alert("custumer data sended");
    const bodyData = {
        email: mail.value,
        password:password.value
    };
    // console.log(JSON.stringify(bodyData));
    // console.log(bodyData);

    try {
        showLoading();
        const response = await axios({
            url: "https://reqres.in/api/register",
            method: 'post',
            data:bodyData
        });
        const { data: userData } = response;
        console.log(userData);
        if (userData.token == undefined) {
            alert("undefined");
            removeLoading();
        }
        else {
            localStorage.setItem("baseUrl", EncryptStringAES("https://reqres.in"));
            localStorage.setItem("apiKey", EncryptStringAES(userData.token));
            removeLoading();

            window.location.href = "userList.html";
        }
    }
    catch {
        alert(error);
    }
    
    
};


