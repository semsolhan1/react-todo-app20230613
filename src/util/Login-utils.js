
//로그인 한 유저의 데이터 객체를 반환하는 함수
export const getLoginUserInfo = () => {
    return{
        token: localStorage.getItem('ACCESS_TOKEN'),
        userName: localStorage.getItem('LOGIN_USERNAME'),
        role: localStorage.getItem('USER_ROLE')
    };
};


//로그인 여부를 확인하는 함수
//논리반전을 다시 반전해서 논리값을 만듬
export const isLogin = () => !!localStorage.getItem('ACCESS_TOKEN');
