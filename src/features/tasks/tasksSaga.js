import { takeEvery, call, put, select } from "redux-saga/effects";
import { fetchExampleTasks, setTasks, selectTasks } from "./tasksSlice";
import { getExampleTasks } from "./getExampleTasks";
import { saveTasksInLocaleStorage } from "./tasksLocalStorage";

function* fetchExampleTasksHandler() {
    try {
        const exampleTasks = yield call(getExampleTasks);
        yield put(setTasks(exampleTasks));
    } catch (error) {
        yield call(alert, "Coś poszło nie tak!");
    }
}

function* saveTasksInLocaleStorageHandler() {
    const tasks = yield select(selectTasks);
    yield call(saveTasksInLocaleStorage, tasks)
}

export function* tasksSaga() {
    yield takeEvery(fetchExampleTasks.type, fetchExampleTasksHandler);
    yield takeEvery("*", saveTasksInLocaleStorageHandler);
}