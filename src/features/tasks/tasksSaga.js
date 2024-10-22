import { takeEvery, call, put, select, delay, takeLatest } from "redux-saga/effects";
import { fetchExampleTasks, selectTasks, fetchExampleTasksSuccess, fetchExampleTasksError } from "./tasksSlice";
import { getExampleTasks } from "./getExampleTasks";
import { saveTasksInLocaleStorage } from "./tasksLocalStorage";

function* fetchExampleTasksHandler() {
    try {
        yield delay(1000);
        const exampleTasks = yield call(getExampleTasks);
        yield put(fetchExampleTasksSuccess(exampleTasks));
    } catch (error) {
        yield put(fetchExampleTasksError());
        yield call(alert, "Coś poszło nie tak!");
    }
}

function* saveTasksInLocaleStorageHandler() {
    const tasks = yield select(selectTasks);
    yield call(saveTasksInLocaleStorage, tasks)
}

export function* tasksSaga() {
    yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
    yield takeEvery("*", saveTasksInLocaleStorageHandler);
}