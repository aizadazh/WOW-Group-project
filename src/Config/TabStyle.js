import styled from 'styled-components';


const TabContent = styled.div`
	padding-bottom: 10px;
	padding-top: 10px;
    width: 100%;
    height: 50px;
	display: flex;
	background: #f0f0f0;
	border-bottom: 1px solid #040505;
`;

const TabBox = styled.div`
    margin-left: 18px;
    top: 10px;
	height: 30px;
	width: 500px;
    border-radius: 5px;
    border: 3px solid #ff7676;
	display: flex;
	align-items: center;
	padding: 0 0 0 20px;
	position: relative;
	background: #fff;
`;
const TabInput = styled.input`
	border: none;
	height: 20px;
	color: #1b1b1b;
	font-size: 1rem;
	outline: none;
	position: absolute;
	bottom: 1px;
	&:not(:placeholder-shown) + Label {
      font-size: 0.9rem;
      top: 3px;
      color: #6c757d;
    }
	&:focus ~ Label {
      font-size: 0.9rem;
      top: 3px;
      color: #4279a3;
      transition: all 0.5s ease;
    }
	&:focus ~ HighLight {
      width:80%;
      transition: all 1s ease;
     }
`;
const TabLabel = styled.span`
	color: #aaaaaa;
	position: absolute;
	top: 9px;
	pointer-events: none;
	transition: all 0.5s ease;
`;
const HighLight = styled.span`
	width: 0px;
	height: 1px;
	background: #4279a3;
	position: absolute;
	bottom: 4px;
	transition: all 1s ease;
`;

const TabButton = styled.div`
	background: #ff7676;
	border-radius: 5px;
	height: 30px;
	min-width: 33px;
	display: flex;
	align-items: center;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
	justify-content: center;
	cursor: pointer;
	right: -50px;
	position: absolute;
    transition: all 1s ease;
    width: 30px; 
    border: 1px solid #ff7676; 
    text-align: center; 
    color: #fff; 
    cursor: pointer; 
    font-size: 2.0rem;
`;

const TabIcon = styled.i`
	font-size: 1.2rem;
    color: white;
`;

const TabTitle = styled.div`
	width: 100%;
    height: 33px;
	display: flex;
    background: #ff7676;
    color: white;
    text-align: left;
    padding: 2px 0 0 10px;
    font-weight: 500;
`;

const TabTitleQ = styled.div`
	width: 100%;
    height: 33px;
	display: flex;
    background: white;
    color: #3a3a3ade;
    text-align: center;
    padding: 2px 0 0 10px;
	font-weight: 500;
	font-size: 1.1rem;
`;

const TabTitleText = styled.div`
	color: #3a3a3ade;
    text-align: center;
    font-size: 1.2rem;
    font-weight: 600;
    display: flex;
    justify-content: flex-start;
    align-self: flex-start;
	padding-left: 30px;
	font-size: 1.1rem;
`;

const SearchBox = styled.div`
	width: 900px;
	height: 100px;
	margin-left: 20px;
	margin-top: 30px;
	font-size: 0.8rem;
	background: white;
`;

const Questions = styled.div`
	padding-bottom: 10px;
	padding-top: 10px;
    width: 100%;
    height: 50px;
	display: flex;
	background: #f0f0f0;
	border-bottom: 1px solid #040505;
	left: 200px;
`;

export { TabContent, TabBox, TabButton, Questions, SearchBox, TabIcon, HighLight, TabLabel, TabInput, TabTitle, TabTitleQ, TabTitleText };
