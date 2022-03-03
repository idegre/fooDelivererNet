import React from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { ImgInput } from './ImgInput';


type Props = RouteComponentProps


const HomeComponent = ({history}: Props) => <>
	<ImgInput />
</>

export const Home = withRouter(HomeComponent)

