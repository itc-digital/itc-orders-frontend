export const maybeReadToken = () => {
    return localStorage.getItem('vkToken');
};

export const writeToken = (token) => {
    localStorage.setItem('vkToken', token);
};

export const eraseToken = () => {
    localStorage.removeItem('vkToken');
};
