import "./index.scss";
import TaskCard from "../TaskCard";
import {Droppable, Draggable} from "@hello-pangea/dnd";

function DoingColumn({tasks}) {
    return (
        <section id="doingColumn">
            <div className="title">Doing</div>

            <Droppable droppableId="doing">
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

export default DoingColumn;
