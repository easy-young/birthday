import React, {useState, useEffect} from 'react';

const Birthday = () => {
    const lists = [
        {userid: '김규리', content: '댓글댓글댓글', date: '2022-04-27'},
        {userid: '오하은', content: '댓글', date: '2022-04-27'},
        {userid: '이지영', content: '댓글댓글', date: '2022-04-27'},
    ];
    const [list, setList] = useState([]);
    const [flag, setFlag] = useState(true);
    const [submit, setSubmit] = useState(false);
    // const items = () => lists.map((v, k) => {
    //     if (submit === false) return;
    //     return(
    //         <ul key={k}>
    //             <li>{v.userid}</li>
    //             <li>{v.content}</li>
    //             <li>{v.date}</li>
    //         </ul>
    //     )
    // });

    useEffect(()=>{
        const init = () => {
            setFlag(false);
            let i = 0;
            setInterval(()=>{
                console.log(lists[i]);
                console.log(i);
                setList(v=>[...v, lists[i]]);
                i++;
                console.log(list);
            },1000);
        };
        if (flag) init();
    },[]);
    const handleSubmit = e => {
        e.preventDefault();
        if (e.target.date.value === '2022-04-27') {
            setSubmit(true);
            // for (let i = 0; i < lists.length; i++) {
            //     setInterval(() => {
            //         console.log(lists[i]);
            //         addList(lists[i]);
            //         console.log(list);
            //     }, 1000);
            // }
            // let i = 0;
            // setInterval(() => {
            //     console.log(lists[i]);
            //     setList(v=>[...v, lists[i]]);
            //     console.log(list);
            //     i++;
            // }, 1000);
        } else {
            alert(`Hint : 오늘은 인구쌤 생신입니다.`);
            return;
        }
    };
    return(
        <>
            <h1>Hello Ingoo</h1>
            <h2>오늘 날짜를 입력해 주세요.</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name='date' placeholder='ex) 2022-04-27'/>
                <input type="submit" value='제출' disabled={submit}/>
            </form>
            {/* <div>{items()}</div> */}
        </>
    )
};

export default Birthday;