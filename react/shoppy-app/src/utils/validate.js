/**
 * 회원가입 폼 체크
 */
export function validateFormCheck({refs, setErrors}) {
    if(refs.idRef.current.value === "") {
        setErrors({id: "아이디를 입력해주세요"});
        refs.idRef.current.focus();
        return false;
    } else if(refs.emailDomainRef.current.value === "default") {
        setErrors({emailDomain: "이메일 주소를 선택해주세요"});
        refs.emailDomainRef.current.focus();
        return false;
    }

}


/**
 * 로그인 폼 체크
 */
export function validateLoginCheck(refs, setMsg) {
    
    if(refs.idRef.current.value === "") {
        setMsg({id: "아이디를 입력해주세요"});
        refs.idRef.current.focus();
        return false;
    } else if(refs.passRef.current.value === "") {
        setMsg({pass: "패스워드를 입력해주세요"});
        refs.passRef.current.focus();
        return false;
    } 
    return true;
}