import "./index.scss";
import TaskCard from "../TaskCard";
import {Droppable, Draggable} from "@hello-pangea/dnd";

function BacklogColumn({tasks}) {
    return (
        <section id="backlogColumn">
            <div className="title">Backlog</div>

            <Droppable droppableId="backlog">
                {(p) => (
                    <div className="main" ref={p.innerRef} {...p.droppableProps}>
                        {tasks.map((t, i) => (
                            <Draggable key={t} draggableId={t} index={i}>
                                {(d) => (
                                    <div ref={d.innerRef} {...d.draggableProps} {...d.dragHandleProps}>
                                        <TaskCard text={t}/>
                                    </div>
                                )}
                            </Draggable>
                        ))}
                        {p.placeholder}
                    </div>
                )}
            </Droppable>
        </section>
    );
}

export default BacklogColumn;
