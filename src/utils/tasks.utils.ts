import { Task } from "../models/task.model";

export function isTask(data: unknown): data is Task {
    if (
        // data is an object and not null
        data && typeof data === 'object' &&
        // data.id is undefined or a number
        ((data as Task).id === undefined || typeof (data as Task).id == 'number') &&
        // data has 'title' and 'completed' properties of correct types
        'title' in data &&
        'completed' in data &&
        typeof (data as Task).title === 'string' &&
        typeof (data as Task).completed === 'boolean'
        // title is not an empty string
        && (data as Task).title.trim().length > 0

    ) {
        return true;
    }

    return false;
}
   
