
import tasks from '../../data/tasks.json' with { type: "json" };

const dataExample = [{
    "id": "t_1001",
    "title": "Thedoerer",
    "status": "open",
    "priority": "medium",
    "due": "2025-1-31",
    "createdAt": "2024-10-01T09:00:00.000Z",
    "updatedAt": "2024-10-05T14:30:00.000Z"
  }
]

const validateTaskInput = (dataExample) => {
    
    
    let dateValidate = true;

    for (const element of dataExample) {
        const [year, month, day] = element.due.split("-")
        const thisDate = "2025-12-16"
        const [thisYear, thisMonth, thisDay] = thisDate.split("-")
        
        
        if (!element.title || typeof element.title !== "string") {
            dateValidate = false 
            throw new Error("Title is required and must be a string");
        }
        if (element.title.trim().length < 3) {
            dateValidate = false
            throw new Error("Title must be at least 3 letters"); 
        }
        if (element.priority !== "high" && element.priority !== "medium" && element.priority !== "low") {
            dateValidate = true
            throw new Error("Priority must be in high or medium or low");
        }
        
        
    }
    
    
}

console.log(validateTaskInput(dataExample));
