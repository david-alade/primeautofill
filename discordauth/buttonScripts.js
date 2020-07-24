function generateRandomString() {
    const rand = Math.floor(Math.random() * 10);
    let randStr = '';

    for (let i = 0; i < 20 + rand; i++) {
        randStr += String.fromCharCode(33 + Math.floor(Math.random() * 94));
    }

    return randStr;
}

window.onload = () => {
    const fragment = new URLSearchParams(window.location.hash.slice(1));

    if (fragment.has("access_token")) {
        const urlState = fragment.get("state");
        const stateParameter = localStorage.getItem('stateParameter');
        if (stateParameter !== atob(decodeURIComponent(urlState))) {
            return console.log('You may have been clickjacked!');
        }

        const accessToken = fragment.get("access_token");
        const tokenType = fragment.get("token_type");

        fetch('https://discordapp.com/api/users/@me', {
            headers: {
                authorization: `${tokenType} ${accessToken}`
            }
        })
            .then(res => res.json())
            .then(response => {
                console.log(response);
                const { username, discriminator } = response;
                document.getElementById('info').innerText += ` ${username}#${discriminator}`;
            })
            .catch(console.error);

    }
    else {
        const randStr = generateRandomString();
        localStorage.setItem('stateParameter', randStr);

        document.getElementById('login').href += `&state=${encodeURIComponent(btoa(randStr))}`;
        document.getElementById('login').style.display = 'block';
    }
}