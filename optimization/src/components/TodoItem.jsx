import './css/TodoItem.css';
import { memo } from "react";

const TodoItem = ({id, isDone, content, date, onUpdate, onDelete}) => {
    const onChaneCheckbox = () => {
        onUpdate(id);
    }

    const onClickButton = () => {
        onDelete(id);
    }

    return (
        <div className='TodoItem'>
            <input onChange={onChaneCheckbox} readOnly checked={isDone} type="checkbox" />
            <div className='content'>{content}</div>
            <div className='date'>{new Date(date).toLocaleDateString()}</div>
            <button onClick={onClickButton}>삭제</button>
        </div>
    );
}

// export default memo(TodoItem, (prevProps, nextProps) => {
//     // 반환값에 따라 Props 가 바뀌었는지 안바뀌었는지 판단
//     // true -> Props 동일 -> 리렌더링 X
//     // false -> Props 변경됨 -> 리렌더링 O

//     if (prevProps.id !== nextProps.id) return false;
//     if (prevProps.isDone !== nextProps.isDone) return false;
//     if (prevProps.content !== nextProps.content) return false;
//     if (prevProps.date !== nextProps.date) return false;

//     return true;
// });

export default memo(TodoItem);