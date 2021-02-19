import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useHistory, Link} from "react-router-dom";
import {startRegisterAsync} from "../../redux/user/user.actions";
import FormInput from "../form-input/FormInput.component";
import registerImage from "../../assets/register.svg";
import {
    RegisterCard,
    ImageSectionContainer,
    FormSectionContainer,
    ButtonContainer,
} from "./register.styles";
import {selectError} from "../../redux/user/user.selectors";
import {ErrorContainer} from "../login-component/login.styles";

const Register = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const error = useSelector(selectError)
    const [credentials, setCredentials] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setCredentials({...credentials, [name]: value});
    };

    const submitHandler = (e) => {
        e.preventDefault();
        if (credentials.password !== credentials.confirmPassword) {
            return;
        }
        const user = {
            firstName: credentials.firstName,
            lastName: credentials.lastName,
            email: credentials.email,
            password: credentials.confirmPassword,
        }
        dispatch(startRegisterAsync(user, () => history.push("/")));
    };

    return (
        <RegisterCard>
            <div>
                <ImageSectionContainer>
                    <img src={registerImage} alt="register"/>
                </ImageSectionContainer>
                <FormSectionContainer>
                    <h2>Welcome</h2>
                    <form onSubmit={submitHandler}>
                        <FormInput
                            name="email"
                            value={credentials.email}
                            handleChange={handleChange}
                            required={true}
                            placeholder="Email"
                        />
                        <FormInput
                            name="firstName"
                            value={credentials.firstName}
                            handleChange={handleChange}
                            required={true}
                            placeholder="First name"
                        />
                        <FormInput
                            name="lastName"
                            value={credentials.lastName}
                            handleChange={handleChange}
                            required={true}
                            placeholder="Last name"
                        />
                        <FormInput
                            name="password"
                            value={credentials.password}
                            handleChange={handleChange}
                            required={true}
                            placeholder="Password"
                            type="password"
                        />
                        <FormInput
                            name="confirmPassword"
                            value={credentials.confirmPassword}
                            handleChange={handleChange}
                            required={true}
                            placeholder="Confirm password"
                            type="password"
                        />
                        {error && <ErrorContainer>{error}</ErrorContainer>}
                        <ButtonContainer>Registration</ButtonContainer>
                    </form>
                    <p><Link to="/login">I already have an account</Link></p>
                </FormSectionContainer>
            </div>
        </RegisterCard>
    );
};

export default Register;
