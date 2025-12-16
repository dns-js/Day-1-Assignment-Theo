
import tasks from '../../data/tasks.json' with { type: "json" };

const dataExample = [tasks
]

const validateTaskInput = (dataExample) => {
    
    let dateValidate = true;

    for (const element of dataExample) {
        const thisDate = element.due

        if (!element.title || typeof element.title !== "string") {
            dateValidate = false 
            throw new Error("Title is required and must be a string");
        }
        if (element.title.trim().length < 3) {
            dateValidate = false
            throw new Error("Title must be at least 3 letters"); 
        }
        if (element.priority !== "high" && element.priority !== "medium" && element.priority !== "low") {
            dateValidate = false
            throw new Error("Priority must be in high or medium or low");
        }
        if (!(/^\d{4}-\d{2}-\d{2}$/.test(thisDate)) || thisDate === null) {
            dateValidate = false
            throw new Error("Tanggal tidak sesuai");
        }
    }
    return dateValidate
}

console.log(validateTaskInput(dataExample));
