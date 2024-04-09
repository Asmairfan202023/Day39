"use strict";
// Question117: Implement a switch statement that evaluate an expression and uses the default case if none of the case match.
// This function evaluate the statges of employee
function evaluateExpression(expression) {
    switch (expression) {
        case "worker":
            console.log("You have to work very hard");
            break;
        case "supervisor":
            console.log("You have to observe the workers");
            break;
        case "Manager":
            console.log("You have to check the supervisors");
            break;
        case "Genral Manager":
            console.log("You have to check manager");
            break;
        case "CEO":
            console.log("You have to check all");
            break;
        default:
            console.log("Invalid expression. Please enter a valid designation.");
    }
}
evaluateExpression("Manager"); // Output: Perform addition operation
evaluateExpression("CEO"); // Output: Perform division operation
evaluateExpression("honour"); // Output: Invalid expression. Please enter a valid operation.
