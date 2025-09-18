export function Login() {
    return (
    <div class="content">
        <div class="center-layout login-form">
            <h1 class="center-title">로그인</h1>
            <form action="#" method="post">
                <ul>
                    <li>
                        <p>아이디 비밀번호를 입력하신 후, 로그인 버튼을 클릭해 주세요.</p>
                    </li>
                    <li>
                        <div class="login-form-input">
                            <i class="fa-regular fa-user"></i>
                            <input type="text" name="id" 
                                    id="id" placeholder="아이디를 입력해주세요" />
                        </div>
                    </li>
                    <li>
                        <div class="login-form-input">
                            <i class="fa-solid fa-lock"></i>
                            <input type="password" name="pwd" 
                                    id="pwd" placeholder="비밀번호를 입력해주세요" />
                        </div>
                    </li>
                    <li>
                        <button type="button"
                                class="btn-main-color"
                                onclick="loginCheck()"
                                >로그인</button>
                    </li>
                    <li>
                        <div>
                            <input type="checkbox" name="status" />
                            <label for="">아이디 저장</label>
                        </div>
                        <div>
                            <a href="#">아이디 찾기</a> 
                            <span>&gt;</span>
                            <a href="#">비밀번호 찾기</a> 
                            <span>&gt;</span>
                        </div>
                    </li>
                    <li>
                        <button class="btn-main-color-naver">네이버 로그인</button>
                    </li>
                </ul>
                <div>
                    <img src="https://adimg.cgv.co.kr//images/202206/loginplus/350x300.png" alt=""/>
                </div>
            </form>
        </div>
    </div>
    );
}