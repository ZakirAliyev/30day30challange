import "./index.scss";
import {Button, Drawer, Input} from "antd";
import {useState} from "react";

function DrawerRight({setColumns}) {

    const [open, setOpen] = useState(false);
    const [text, setText] = useState("");

    const save = () => {
        if (!text.trim()) return;

        setColumns(prev => ({
            ...prev,
            backlog: [...prev.backlog, text]
        }));

        setText("");
        setOpen(false);
    };

    return (
        <section id="drawerRight">
            <Button type="primary" onClick={() => setOpen(true)} className="addBtn">
                Add task
            </Button>

            <Drawer
                title="Add task"
                placement="right"
                open={open}
                onClose={() => setOpen(false)}
            >
                <Input
                    placeholder="Task name"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />

                <Button
                    type="primary"
                    style={{marginTop: 16}}
                    block
                    onClick={save}
                >
                    Save
                </Button>
            </Drawer>
        </section>
    );
}

export default DrawerRight;
