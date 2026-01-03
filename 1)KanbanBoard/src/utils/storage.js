const KEY = "kanban-board";

export function loadBoard() {
    try {
        const data = localStorage.getItem(KEY);
        return data
            ? JSON.parse(data)
            : {
                backlog: ["Task 1", "Task 2"],
                doing: ["Task 3"],
                review: [],
                done: ["Task 4"]
            };
    } catch {
        return {
            backlog: [],
            doing: [],
            review: [],
            done: []
        };
    }
}

export function saveBoard(board) {
    localStorage.setItem(KEY, JSON.stringify(board));
}
