import styles from "./TodoItem.module.css"
const TodoItem = (props) => {
    const completedStyle = {
        fontStyle: "italic",
        color: "#595959",
        opacity: 0.4,
        textDecoration: "line-through",
    }
    const { completed, id, title } = props.todo
    return (<li className={styles.item}>
        <input type="checkbox"
            className={styles.checkbox}
        onChange={()=>props.handleChange(id)}
            checked={completed} />
        <button  onClick={() => props.deleteTodoProps(id)}>Delete</button>
        <span style={completed ? completedStyle : null}>
            {title}
        </span>
    </li> );
}
 
export default TodoItem;