import { styled } from 'styled-components';
//Img
import profile from '../assets/img/account-avatar-profile.svg';

const ImgLogin = ({className}) => (<img className={className} src={profile} alt="icone do login" />)

export const Img = styled(ImgLogin)`
    width: 20%;
    margin: 0 auto;
    margin-bottom: 2%;
`