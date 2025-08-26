import './css/TodoItem.css';
import { memo, useContext } from "react";
import { TodoContext } from "../App";

const TodoItem = ({id, isDone, content, date}) => {
    const { onUpdate, onDelete } = useContext(TodoContext);
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

export default memo(TodoItem);