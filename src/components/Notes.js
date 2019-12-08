import React, { useContext } from "react";
import { AlertContext } from "../context/alert/alertContext";
import { TransitionGroup, CSSTransition } from "react-transition-group"
export const Notes = ({ notes, onRemove }) => {
    const alert = useContext(AlertContext)


    return (
        <TransitionGroup component="ul" className="list-group">

            {notes.map(note => (
                <CSSTransition
                    key={note.id}
                    classNames={'note'}
                    timeout={800}
                >
                    <li className="list-group-item note">
                        <div>
                            <strong>{note.title}</strong>
                            <small>{note.data}</small>
                        </div>
                        <button
                            type="button"
                            className="btn btn-outline-danger btn-sm"
                            onClick={() => {
                                onRemove(note.id).then(
                                    alert.show(`заметка ${note.title} была удалена `, "danger")
                                )
                            }}
                        >
                            &times;
                        </button>
                    </li>
                </CSSTransition>
            ))}
        </TransitionGroup>
    )
}