// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

import { useState, useRef } from "react"

const Register = () => {
    const [ input, setInput ] = useState({
        name: "",
        birth: "",
        country: "",
        bio: ""
    });

    // const refObj = useRef(); // 새로운 레퍼런스 오브젝트 생성
    // console.log(refObj);  // {current: undefined}
    const countRef = useRef(0); // 초기값 설정
    // console.log(countRef); // {current: 0} 초기값 적용됨

    const onChange = (e) => {
        countRef.current++;
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
    }

    const inputRef = useRef();
    const onSubmit = (e) => {
        if (input.name === "") {
            inputRef.current.focus();
        }
    }
    
    return (
        <div>
            <div>
                <input ref={inputRef} name="name" value={input.name} onChange={onChange} placeholder={"이름"} />
            </div>
            <div>
                <input ref={inputRef} name="birth" type="date" value={input.birth} onChange={onChange} />
            </div>
            <div>
                <select ref={inputRef} name="country" value={input.country} onChange={onChange}>
                    <option value=""></option>
                    <option value="kr">한국</option>
                    <option value="us">미국</option>
                    <option value="jp">일본</option>
                </select>
            </div>
            <div>
                <textarea ref={inputRef} name="bio" value={input.bio} onChange={onChange} />
            </div>

            <button onClick={onSubmit}>제출</button>
        </div>
    )
}

export default Register