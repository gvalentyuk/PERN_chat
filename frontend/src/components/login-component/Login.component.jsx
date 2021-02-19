import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useHistory, Link} from 'react-router-dom';
import {startLoginAsync} from "../../redux/user/user.actions";
import FormInput from "../form-input/FormInput.component";
import loginImage from "../../assets/login.svg";
import {
    LoginCard,
    ImageSectionContainer,
    FormSectionContainer,
    ButtonContainer,
    ErrorContainer
} from "./login.styles";

import {selectError} from "../../redux/user/user.selectors";

const Login = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const error = useSelector(selectError)
    const [credentials, setCredentials] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setCredentials({...credentials, [name]: value});
    };

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(startLoginAsync(credentials, () => history.push('/')));
    };

    return (
        <LoginCard>
            <div>
                <ImageSectionContainer>
                    <img src={loginImage} alt="login"/>
                </ImageSectionContainer>
                <FormSectionContainer onSubmit={submitHandler}>
                    <h2>Welcome back</h2>
                    <form>
                        <FormInput
                            name="email"
                            required={true}
                            placeholder="Email"
                            value={credentials.email}
                            handleChange={handleChange}
                        />
                        <FormInput
                            name="password"
                            required={true}
                            placeholder="Password"
                            type="password"
                            value={credentials.password}
                            handleChange={handleChange}
                        />
                        {error && <ErrorContainer>{error}</ErrorContainer>}
                        <ButtonContainer>Login</ButtonContainer>
                    </form>
                    <p><Link to="/register">I don't have an account</Link></p>
                </FormSectionContainer>
            </div>
        </LoginCard>
    );
};

export default Login;
