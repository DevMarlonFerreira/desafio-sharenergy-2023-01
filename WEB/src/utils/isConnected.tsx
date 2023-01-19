const isConnected = () => {
    const isConnected = localStorage.getItem('@token');
    if(isConnected)
        return true;
    else
        return false;
}

export default isConnected