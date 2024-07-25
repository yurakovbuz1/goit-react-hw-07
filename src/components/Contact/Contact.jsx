import css from './Contact.module.css'

const Contact = ({ id, name, number, onDelete}) => {
    return (
        <>
            <div className={css.container}>
                <div className={css.description}>
                    <p>{name}</p>
                    <p>{number}</p>
                </div>
                <button className={css.deleteButton} type='button' onClick={() => onDelete(id)}>Delete</button>
            </div>
            
        </>
    );
}

export default Contact