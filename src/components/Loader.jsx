/**
 * Page loader component
 * @category Components
 * @return {JSX.Element}
 * @example 
 * return (
 *  <Loader />
 * )
 */

function Loader(){
    return (
        <div className="loader__container">
            <span className="loader"></span>
        </div>
    )
}

export default Loader;