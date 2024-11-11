// 헤더 스크롤 시 그림자
const hdScroll = function(){
    const header = document.querySelector('.header');
    if (window.scrollY > 5) {
        header.classList.add('scr');
    } else {
        header.classList.remove('scr');
    }
};
window.addEventListener('scroll', hdScroll);

// 로그인 회원가입 페이지 비밀번호 토글버튼
const pwViewToggle = function(e){
    e.classList.toggle('active');
    const inp = e.closest('li').querySelector('input');
    if (inp.getAttribute('type') === 'password') {
        inp.setAttribute('type', 'text');
    } else {
        inp.setAttribute('type', 'password');
    }
};
const pwViewBtn = document.querySelectorAll('.form_inp_list > li > .desc > .btn');
pwViewBtn.forEach(function(e) {
    e.addEventListener('click', function() {
        pwViewToggle(e);
    });
});

//추가
