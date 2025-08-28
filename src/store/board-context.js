import { createContext } from "react";

const boardContext = createContext({
    activeToolItem: "",
    toolActionType: "",
    textAreaBlurHandler: () => {},
    changeToolHandler: () => {},
    boardMouseDownHandler: () => {},
    boardMouseMoveHandler: () => {},
    boardMouseUp: () => {},
    elements: [],
    history: [[]],
    index: 0,
});
export default boardContext;