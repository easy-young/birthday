import React, {Component} from 'react';

class Birthday2 extends Component{
    state = {
        submit: false,
        list: []
    };
    lists = [
        {userid: '강귀현', content: '쌤 생일 축하해요! 앞으로 행복한 일만 가득하세요~!!!'},
        {userid: '고예린', content: `~/ \\    / \\~\n
        @@@@@@  @@@@@@@\n
        (*^0^*)/(^▽⌒*)\n
        。　 。　 。　 。\n
        @}-\`-,-----------\n
        ㅅΗ ○ı 추ㅎГㅎΗ 유\n
          ○ ㄹ　.┒\n
        @}-\`-,-----------\n
         ˚　˚　 ˚　 ˚\n
        .   _iiiii_ *특제\n
        .  [_Happy_] 생일\n
         [_*_*_*_*_]케익\n
        .[_Birth-Day_] ♡\n
        [___To__You___]\n
         /￣￣￣￣￣＼`},
        {userid: '김규리', content: '1234'},
        {userid: '김도움', content: '교수님 생일 축하드립니다! 행복한 생일 되세요!!ㅎ'},
        {userid: '김지현', content: `인구쌤!\n 
        이미 갓벽한 개발자이지만\n
        계속해서 공부하고 노력 하시는 모습\n
        너무 멋있으시고, 본받고 싶습니다!\n
        \n
        끼니 거를때가 많으신 거 같은데,\n
        약소하게나마 저희 모두의 마음을 담은\n
        작은 선물 꼭꼭 잘 챙겨드시고\n
        식사도 잘 챙겨드셨으면 좋겠습니다.\n
        \n        
        생일 축하드려요 !`},
        {userid: '안수환', content: '늦은시간까지 남아서 다음수업 준비하시고 모르는거 자세히 알려주셔서 감사합니다'},
        {userid: '오승주', content: '생축'},
        {userid: '오하은', content: '🎉🎉🎉생일 축하드리구 건강하세요~!!🎉🎉🎉'},
        {userid: '이동훈', content: '1234'},
        {userid: '김윤재', content: '1234'},
        {userid: '이승준', content: '1234'},
        {userid: '이연정', content: '인구쌤 34살(?) 생일 추카드려요 💕 항상 저희 가르쳐주시느라 힘드시죠...심장 아프지않게 더 열심히 하겠습니다. 항상 건강하시고 행복하세요 🔥'},
        {userid: '이지영', content: '항상 저희를 위해 불철주야 힘써주시는 인구쌤 생신 축하드려요!! 앞으로도 열심히 할게요^^'},
        {userid: '이현진', content: '교수님 생일 축하드립니다:D 심장 아프다며 뭐라하셔도 한명한명 모두 데리고가려 성심성의껏 이끌어주심에 감사합니다! 다시 한번 생일 축하드리고, 올 한해는 평안하고 심장도 튼튼하시길 바라요!!'},
        {userid: '이화섭', content: '교수님 생일 축하드립니다. 심장 건강 지켜드리지 못해 죄송합니다 ;)'},
        {userid: '임태찬', content: '교수님 생일 축하드립니다!'},
        {userid: '임현우', content: 'hello'},
        {userid: '장주찬', content: '댓글댓글댓글'},
        {userid: '장재원', content: '생신 축하드립니다 교수님. 항상 부족한 저희들 챙겨주시고 가르쳐 주시느라 너무 고생많으십니다. function ingoo() { } 의 return 값은 언제나 무한한 감사입니다. 행복한 생일 보내시고 늘 건강하세요. 인구 포에버!!!!!'},
        {userid: '조용훈', content: 'hello'},
        {userid: '지정환', content: `후 교수님... 윤석열 정부 취임후 만 나이 적용하면 저는 다시 20대가 되는데 교수님은 여전히 30대시군요 하하하하하 장난이고...교수님 젊은 감각으로 항상 강의 너무 잘 해주시는데 못따라가서..죄송합니다.\n
        지난번에 말씀드린것처럼 달라진 모습 꼭 보여드리고 싶습니다,\n
        생신축하드리고 저희와 함께이지만 기억에 남고, 즐거운 하루 보내셨으면 합니다`},
        {userid: '한 빈', content: '교수님 생일축하드려요🥳 4개월간 열심히 좋은 강의 해주셔서 감사합니다! 교수님의 명강의 덕에 재밌게 배우고 있습니다. 앞으로 남은 기간도 잘 부탁드려요. 좋은 하루 보내세요.'},
        {userid: '홍종남', content: '교수님 생일 축하드립니다 ^^ 축하축하추 ~ 드시고 싶으신거 말씀만 하세여~'}
    ];
    items = () => this.state.list.map((v, k) => {
        return(
            <ul key={k}>
                <li>{v.userid}</li>
                <li>{v.content}</li>
                <li>2022-04-27</li>
            </ul>
        )
    });
    handleSubmit = e => {
        e.preventDefault();
        if (e.target.date.value === '2022-04-27') {
            let i = 0;
            const addList = setInterval(() => {
                this.setState({
                    ...this.state,
                    list: [...this.state.list, this.lists[i]],
                    submit: true
                });
                i++;
                if (i === this.lists.length) clearInterval(addList);
            }, 2000);
        } else {
            alert(`Hint : 오늘은 인구쌤 생신입니다.`);
        }
    };
    render() {
        return(
            <>
                <h1>Hello Ingoo</h1>
                <h2>오늘 날짜를 입력해 주세요.</h2>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name='date' placeholder='ex) 2022-04-27'/>
                    <input type="submit" value='제출' disabled={this.state.submit}/>
                </form>
                <div>
                    {this.state.submit && this.items()}
                </div>
            </>
        )
    }
};

export default Birthday2;