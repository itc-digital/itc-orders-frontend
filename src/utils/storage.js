export const maybeReadToken = () => {
    localStorage.getItem('vkToken');
};

export const writeToken = (token) => {
    localStorage.setItem('vkToken', token);
};
