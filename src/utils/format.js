import tasks from '../../data/tasks.json' with { type: "json" };



const formatTask = (tasks) => {
    const {id,title,status,priority,due} = tasks

    return `The task is ${title} with an id ${id} is ${status} with a ${priority} priority level due ${due}`
}

export default formatTask(tasks);
