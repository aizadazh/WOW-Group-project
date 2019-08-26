import styled from 'styled-components';


const HeaderTopBox = styled.div`
	padding-bottom: 10px;
	padding-top: 10px;
	width: 100%;
	display: flex;
	background: #f0f0f0;
	border-bottom: 1px solid #040505;
`;

const LogoLink = styled.div`
	width: 130px;			
	display: flex;
	align-items: center;
`;
const LogoImg = styled.img`
	width: 100%;
	height: 100%;
`;
const SearchBox = styled.div`
	margin-left: 18px;
	height: 34px;
	width: 300px;
	border-radius: 40px;
	display: flex;
	align-items: center;
	padding: 0 0 0 20px;
	position: relative;
	background: #fff;
`;
const Label = styled.span`
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

const Input = styled.input`
	border: none;
	height: 25px;
	width: 74%;
	color: #1b1b1b;
	font-size: 1.5rem;
	outline: none;
	position: absolute;
	bottom: 1px;
	&:not(:placeholder-shown) + ${Label} {
      font-size: 0.9rem;
      top: 3px;
      color: #6c757d;
    }
	&:focus ~ ${Label} {
      font-size: 0.9rem;
      top: 3px;
      color: #4279a3;
      transition: all 0.5s ease;
    }
	&:focus ~ ${HighLight} {
      width:80%;
      transition: all 1s ease;
     }
`;

const SearchButton = styled.div`
	background: #ff7676;
	border-radius: 20px;
	height: 34px;
	min-width: 53px;
	display: flex;
	align-items: center;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
	justify-content: center;
	cursor: pointer;
	right: 2px;
	position: absolute;
	transition: all 1s ease;
`;

const SearchIcon = styled.i`
	font-size: 1.0rem;
	color: #ffffff;
`;
const HeaderLeftPart = styled.div`
	width:100%;
	display:flex;
	justify-content:space-around;
`;
export { HeaderTopBox, LogoImg, LogoLink, SearchBox, SearchButton, SearchIcon, HighLight, Label, Input ,HeaderLeftPart};
