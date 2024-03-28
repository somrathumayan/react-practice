

let status=true;

const TernaryOperator = () => {
    return (
        <div>
            {
                status?
                <button>Ternary Logout Button</button>
                :
                <button>Ternary Login Button</button>
            }
        </div>
    );
};

export default TernaryOperator;