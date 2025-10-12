import { isTask } from "../src/utils/tasks.utils";


test("isTask returns false for task with empty title", () => {
    const data = {
        id: 1,
        title: "",
        completed: false
    };
    expect(isTask(data)).toBe(false);
})
