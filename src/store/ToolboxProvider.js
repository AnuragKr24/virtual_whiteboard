import {  useReducer } from "react";
import { COLORS, TOOL_ITEMS, TOOLBOX_ACTIONS } from "../constants";
import toolboxContext from "./toolbox-context";
// import { TOOL_ACTION_TYPE } from "../constants";

const toolboxReducer = (state, action) => {
    switch (action.type){
        case TOOLBOX_ACTIONS.CHANGE_STROKE:{
            const newState = {...state};
            newState[action.payload.tool].stroke = action.payload.stroke;
            return newState;
        }
        case TOOLBOX_ACTIONS.CHANGE_FILL:{
            const newState = {...state};
            newState[action.payload.tool].fill = action.payload.fill;
            return newState;
        }
        case TOOLBOX_ACTIONS.CHANGE_SIZE:{
            const newState = {...state};
            newState[action.payload.tool].size = action.payload.size;
            return newState;
        }

        default: 
            return state;
    }
};

const initialToolboxState = {
    [TOOL_ITEMS.BRUSH]: {
        stroke: COLORS.black,
    },
    [TOOL_ITEMS.LINE]: {
        stroke: COLORS.black,
        size: 1
    },
    [TOOL_ITEMS.RECTANGLE]: {
        stroke: COLORS.black,
        fill: null,
        size: 1
    },
    [TOOL_ITEMS.CIRCLE]: {
        stroke: COLORS.black,
        fill: null,
        size: 1
    },
    [TOOL_ITEMS.ARROW]: {
        stroke: COLORS.black,
        size: 1
    },
    [TOOL_ITEMS.TEXT]: {
        stroke: COLORS.black,
        size: 16,
    },
    
    
};
const ToolboxProvider = ({children}) => {
    const [toolboxState, dispatchToolboxAction] = useReducer(toolboxReducer, initialToolboxState);
    const changeStrokeHandler = (tool, stroke) => {
        dispatchToolboxAction({
            type: TOOLBOX_ACTIONS.CHANGE_STROKE, 
            payload: {
                tool,
                stroke
            }
        })
    }
    const changeFillHandler = (tool, fill) => {
        dispatchToolboxAction({
            type: TOOLBOX_ACTIONS.CHANGE_FILL, 
            payload: {
                tool,
                fill
            }
        })
    }
    const changeSizeHandler = (tool, size) => {
        dispatchToolboxAction({
            type: TOOLBOX_ACTIONS.CHANGE_SIZE, 
            payload: {
                tool,
                size
            }
        })
    }
    const toolboxContextValue = {
        toolboxState,
        changeStroke: changeStrokeHandler,
        changeFill: changeFillHandler,
        changeSize: changeSizeHandler,
    };
    return (
        <toolboxContext.Provider value={toolboxContextValue}>
            {children}
        </toolboxContext.Provider>
    );
}
export default ToolboxProvider;