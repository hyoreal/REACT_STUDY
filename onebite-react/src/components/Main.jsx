const Main = () => {
    const user = {
        name: "Hyoreal"
        , isLogin: true
    }

    return <> 
        {user.isLogin ? <div>로그아웃</div> : <div>로그인</div>}
    </>;
}

export default Main