import "./index.scss";
import TaskCard from "../TaskCard";
import {Droppable, Draggable} from "@hello-pangea/dnd";

function ReviewColumn({tasks}) {
    return (
        <section id="reviewColumn">
            <div className="title">Review</div>

            <Droppable droppableId="review">
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

export default ReviewColumn;
