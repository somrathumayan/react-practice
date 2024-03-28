
let isLogIn = true;
const LogicalAnsAnd = () => {
    return (
        <div>
            <h1>isLogIn Button Status</h1>
            {
                isLogIn && <button>isLogIn Logout Button</button>
            }
            <p title="Humayan-Props"></p>
        </div>
    );
};

export default LogicalAnsAnd;