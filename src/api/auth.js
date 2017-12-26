import { writeToken } from 'utils/storage';

export const authenticate = () =>
    new Promise((resolve, reject) => {
        const hash = window.location.hash.substr(1);
        const token = hash.substr(hash.search('=') + 1, hash.search('&'));
        fetch(`http://localhost:3001/auth?access_token=${token}`)
            .then(response => response.json())
            .then((json) => {
                if (json.success === true) {
                    writeToken(token);
                    resolve();
                } else {
                    reject(json);
                }
            })
            .catch(reject);
    });
