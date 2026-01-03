import "./index.scss";
import {useState, useEffect} from "react";
import {DragDropContext} from "@hello-pangea/dnd";
import DrawerRight from "../../../components/DrawerRight/index.jsx";
import DoingColumn from "../../../components/UserComponents/DoingColumn/index.jsx";
import BacklogColumn from "../../../components/UserComponents/BacklogColumn/index.jsx";
import ReviewColumn from "../../../components/UserComponents/ReviewColumn/index.jsx";
import DoneColumn from "../../../components/UserComponents/DoneColumn/index.jsx";
import {loadBoard, saveBoard} from "../../../utils/storage.js";

function HomePage() {

    const [columns, setColumns] = useState(loadBoard);

    useEffect(() => {
        saveBoard(columns);
    }, [columns]);

    const onDragEnd = (result) => {
        const {source, destination} = result;
        if (!destination) return;

        const sourceList = [...columns[source.droppableId]];
        const [moved] = sourceList.splice(source.index, 1);

        if (source.droppableId === destination.droppableId) {
            sourceList.splice(destination.index, 0, moved);
            setColumns({
                ...columns,
                [source.droppableId]: sourceList
            });

        } else {
            const destList = [...columns[destination.droppableId]];
            destList.splice(destination.index, 0, moved);

            setColumns({
                ...columns,
                [source.droppableId]: sourceList,
                [destination.droppableId]: destList
            });
        }
    };

    return (
        <section id="homePage">
            <div className="nameAndBtn">
                <div className="name">Kanban Board</div>

                <DrawerRight setColumns={setColumns}/>
            </div>

            <DragDropContext onDragEnd={onDragEnd}>
                <div className="columnWrapper">
                    <BacklogColumn tasks={columns.backlog}/>
                    <DoingColumn tasks={columns.doing}/>
                    <ReviewColumn tasks={columns.review}/>
                    <DoneColumn tasks={columns.done}/>
                </div>
            </DragDropContext>
        </section>
    );
}

export default HomePage;
