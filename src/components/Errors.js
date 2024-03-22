const Errors = ({ errors = [], ...props }) => {
    return (
        <>
            {errors.length > 0 && (
                <div {...props}>
                    <div className="text-red-700 font-bold">
                        Error!
                    </div>
                    <ul className="mt-2 text-red-700 text-sn">
                        {errors.map(error => {
                            <li key={errors}>{error}</li>
                        })}
                    </ul>
                </div>
            )}
        </>
    );
}
export default Errors;