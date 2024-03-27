
const InvokeFunction = () => {
    let marks = 70;
    return (
        <div>
            {(()=>{
                if(marks>=80){
                    return <h1>IIF Brilliant Result</h1>
                }
                else {
                    return <h1>IIF Average Result</h1>
                }
            })()}
            
            {marks>=80 ? <h1>Briliant result</h1>:<h1>Average result</h1>}   
            {/* short if else  */}
        </div>
    );
};

export default InvokeFunction;