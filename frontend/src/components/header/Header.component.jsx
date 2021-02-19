import {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

import Modal from '../modal/Modal.component';
import {HeaderContainer, LogoContainer, UserAltContainer, ProfileOptions, ImageAltContainer} from './header.styles';
import {logout} from "../../redux/user/user.actions";
import {selectCurrentUser} from "../../redux/user/user.selectors";

const Header = () => {
    const [showOptions, setShowOptions] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();
    const user = useSelector(selectCurrentUser);
    return (
        <HeaderContainer>
            <LogoContainer>
                <h2>Chat.io</h2>
            </LogoContainer>
            <UserAltContainer onClick={() => setShowOptions(!showOptions)}>
                <ImageAltContainer>
                    <img src="/images/male.svg" alt=""/>
                </ImageAltContainer>
                <p>{user.firstName}</p>
                <i className="fas fa-caret-down"/>
                {
                    showOptions && <ProfileOptions>
                        <p onClick={() => setShowModal(true)}>Update profile</p>
                        <p onClick={() => dispatch(logout())}>Logout</p>
                    </ProfileOptions>
                }
            </UserAltContainer>
            {showModal && <Modal show={showModal} setShowModal={setShowModal}/>}
        </HeaderContainer>
    )
};

export default Header;
