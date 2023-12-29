import { useRef, useState } from "react";

const CONTENT = "Lorem ipsum dolor sit amet consectetur adipisicing elit Sed pariatur nemo ducimus odio fugiat magni veritatis reiciendis earum cupiditate nulla doloribus laboriosam ipsa iste debitis officiis deserunt est voluptatum sapiente sunt vel alias reprehenderit vitae suscipit repudiandae Iusto cum officia".split(" ");

const Main = () => { 

    const currentPara = useRef(CONTENT);
    const [input, setInput] = useState<string>('');
    const [chatAt, setCharAt] = useState<number>(0);
    const [failAt, setFailAt] = useState<number | null>(null);

    // handle user typed
    const handleUserTyped = (value: string) => {
        if(value.endsWith(' ')){
            let currentInputVal = input.split(' ')[chatAt];
            if(currentPara.current[chatAt] === currentInputVal){
                setCharAt(chatAt + 1);
                setFailAt(null);
            }else {
                setFailAt(chatAt);
            }
        }
        setInput(value);
    }

    return (
        <div className="main">
            <div className="main-container">
                <div className="para">
                    {currentPara.current?.map((p, idx) => {
                        return(
                            <span 
                                key={idx} 
                                className={`para-block 
                                ${idx === chatAt ? "para-block-current" : ""}    ${idx < chatAt ? "para-block-success": ""}       ${idx === failAt ? "para-block-wrong": ""}
                                `}
                            >
                            {p}</span>
                        )
                    }
                    )}
                </div>
                <div className="input-wrapper">
                    <textarea className="main-input" rows={5} placeholder="Start Typing Here..." value={input}
                    onChange={(e) => handleUserTyped(e.target.value)}>
                        </textarea>
                </div>
            </div>
        </div>
    )
}

export default Main