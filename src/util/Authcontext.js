
import React, { useEffect, useState } from "react";

//새로운 전역 Context를 생성
const AuthContext = React.createContext({
    isLoggedIn: false, //로그인 했는지의 여부 추적
    userName: '',
    onLogout: () => {}, //더미 함수를 넣으면 자동완성 시 편함.
    onLogin: (email, pssword) => {}
});

//위에서 생성한 Context를제공할 수 있는 Provider
//이 컴포넌트를 통해 자식 컴포넌트들에게 인증 상태와 관련된 함수들을 전달할 수 있음.
export const AuthContextProvider = props => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userName, setUserName] = useState('');

    //컴포넌트가 랜더링 될 때 localStorage에서 로그인 정보를 가지고 와서 상태를 설정.
    useEffect(() => {
        if(localStorage.getItem('isLoggedIn') === '1') {
            setIsLoggedIn(true);
            setUserName(localStorage.getItem('LOGIN_USERNAME'));
        }
    }, []);

    //로그아웃 핸들러
    const logoutHandler = () => {
        localStorage.clear();
        setIsLoggedIn(false);
    }

    //로그인 핸들러
    const loginHandler = (token, userName, role) => {

        //json에 담긴 인증정보를 클라이언트에 보관
        //1. 로컬 스토리지 - 브라우저가 종료되어도 보관됨.
        //2. 세션 스토리지 - 브라우저가 종료되면 사라짐.
        //sessionStorage.setItem('', );
        //localStorage.setItem('저장할 데이터 이름', 저장할 데이터의 값);
        localStorage.setItem('ACCESS_TOKEN', token);
        localStorage.setItem('LOGIN_USERNAME', userName);
        localStorage.setItem('USER_ROLE', role);

        localStorage.setItem("isLoggedIn", "1");
        setIsLoggedIn(true);
        setUserName(userName);
    };

    return (
        // 데이터를 전달하고자 하는 자식 컴포넌트들을 Provider로 감쌉니다.
        <AuthContext.Provider value={{
            isLoggedIn, //변수이름과 프로퍼티 값이 같으면 생략
            userName,
            onLogout: logoutHandler, //데이터 전달 3가지
            onLogin: loginHandler
        }}>
            {props.children} {/* 자식 컴포넌트들 */}
        </AuthContext.Provider>
    );

};

export default AuthContext;



