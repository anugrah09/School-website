import reeact from 'react'
import './css/welcome.css';

function Welcome() {
    return (
        <>
        <div className="container margin">
            <span className="welcome-heading">
                A warm welcome by Head Master
            </span>
        </div>
        <div className="container ">
            <p className="welcome">
                "Now... to our new students, welcome, to our old students, welcome back!<br/> Another year full of magical education awaits you; <br/>it will be very much the same and somewhat different than it's always been.<br/> There are some delightful changes to our curriculum and staff this year, <br/>which I shall address shortly, but first, some business."
            </p>
        </div>
        </>

    )
}
export default Welcome;