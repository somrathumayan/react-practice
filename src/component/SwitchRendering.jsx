

const SwitchRendering = () => {
    const isLogIn = true;
    switch(isLogIn){
        case true:
            return <button>SwitchRendering Logout</button>
        case false:
            return <button>SwitchRendering Login</button>

        default:
            null;
    }
};

export default SwitchRendering;