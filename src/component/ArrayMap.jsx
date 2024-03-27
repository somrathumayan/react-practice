
const ArrayMap = () => {
    const city = ['Dhaka', 'Rajshahi', 'Chittagong', 'Khulna', 'Barishal', 'Sylhet', 'Mymensingh', 'Rongpur'];
    return (
        <div>
            <ul>
                {
                    city.map((item,i)=>{
                        return <li key={i.toString()}>{item}</li>
                    })
                }   
            </ul>         
        </div>
    );
};

export default ArrayMap;