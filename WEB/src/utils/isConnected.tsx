const isConnected = () => {
    const isConnectedLocal = localStorage.getItem('@token');
    const isConnectedSession = sessionStorage.getItem('@token');

    if (isConnectedLocal || isConnectedSession)
        return true;
    else
        return false;
}

export default isConnected