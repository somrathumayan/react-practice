

const ImmediateltInvokedFunction = () => {
    let marks=10;
    return (
        <div>
            {
                (()=>{
                    if(marks>=80){
                        return <h1>You got A+</h1>
                    }
                    else{
                        return <h1>You did not get A+</h1>
                    }
                })()
            }
        </div>
    );
}

export default ImmediateltInvokedFunction;