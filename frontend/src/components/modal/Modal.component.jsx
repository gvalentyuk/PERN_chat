import ReactDOM from 'react-dom';
import {useSelector, useDispatch} from "react-redux";
import {useState} from "react";

import FormInput from "../form-input/FormInput.component";
import {selectCurrentUser} from "../../redux/user/user.selectors";
import {ModalOverlay, ModalContainer, ModalHeader, ModalForm, ModalFooter, ButtonContainer} from "./modal.styles";
import {startUpdateProfile} from "../../redux/user/user.actions";

const Modal = ({setShowModal}) => {
    const user = useSelector(selectCurrentUser);
    const dispatch = useDispatch();
    const [credentials, setCredentials] = useState({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        password: "",
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setCredentials({...credentials, [name]: value});
    };

    const submitHandler = (e) => {
        e.preventDefault();

        const user = {
            firstName: credentials.firstName,
            lastName: credentials.lastName,
            email: credentials.email,
            password: credentials.confirmPassword,
        }
        dispatch(startUpdateProfile(user, () => setShowModal(false)));
    };

    const content = <ModalOverlay>
        <ModalContainer>
            <ModalHeader><h3>Update the Profile</h3></ModalHeader>
            <ModalForm>
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
                </form>
            </ModalForm>
            <ModalFooter>
                <ButtonContainer color={'#5046b9'}
                                 onClick={() => setShowModal(false)}>close</ButtonContainer>
                <ButtonContainer onClick={submitHandler} color={'#65ff4c'}>update</ButtonContainer>
            </ModalFooter>
        </ModalContainer>
    </ModalOverlay>;
    return ReactDOM.createPortal(content, document.getElementById('modal-hook'))
}


export default Modal;
