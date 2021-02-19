import {useSelector} from "react-redux";
import {selectLogged} from '../../redux/user/user.selectors';
import {Route, Redirect} from "react-router-dom";

const ProtectedRoute = ({component: Component, ...otherProps}) => {
    const logged = useSelector(selectLogged);
    return (
        <Route
            {...otherProps}
            render={() =>
                logged ? <Component {...otherProps} /> : <Redirect to="/login"/>
            }
        />
    );
};

export default ProtectedRoute;
