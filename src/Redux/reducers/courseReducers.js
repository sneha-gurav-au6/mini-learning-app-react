import { GetAllCourses, AddCourse } from "../actions/courseType";
const initialState = {
    getAllcourses: {},

};
const courseReducer = (state = initialState, actions) => {
    const { type, payload } = actions;
    switch (type) {
        case GetAllCourses:
            return {
                ...state,
                getAllcourses: payload,
            };

        default:
            return state;
    }
};

export default courseReducer;
