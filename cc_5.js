const employees = [
    { name: "Alice Johnson", hourlyRate: 22, hoursWorked: 40 },
    { name: "Brian Smith", hourlyRate: 18.5, hoursWorked: 35 },
    { name: "Carla Gomez", hourlyRate: 25, hoursWorked: 42 },
    { name: "David Lee", hourlyRate: 20, hoursWorked: 38 }
];
function calculateBasePay(rate, hours) {
    const regularHours = Math.min(hours, 40);
    return regularHours * rate;
}
console.log("Base Pay Calculation:");
employees.forEach(employee => {
    const basePay = calculateBasePay(employee.hourlyRate, employee.hoursWorked);
    console.log(`${employee.name}: $${basePay.toFixed(2)}`);
}
);
function calculateOvertimePay(rate, hours) {
    const overtimeHours = Math.max(0, hours - 40);
    return overtimeHours * rate * 1.5;
}
console.log("\nOvertime Pay Calculation:");
employees.forEach(employee => {
    const overtimePay = calculateOvertimePay(employee.hourlyRate, employee.hoursWorked);
    console.log(`${employee.name}: $${overtimePay.toFixed(2)}`);
});
function calculateTaxes(grossPay) {
    return grossPay * 0.15;
}
console.log("\nTax Calculation:");
function processPayroll(employee) {
    const basePay = calculateBasePay(employee.hourlyRate, employee.hoursWorked);
    const overtimePay = calculateOvertimePay(employee.hourlyRate, employee.hoursWorked);
    const grossPay = basePay + overtimePay;
    const taxes = calculateTaxes(grossPay);
    const netPay = grossPay - taxes;
    return {
        name: employee.name,
        basePay: basePay,
        overtimePay: overtimePay,
        grossPay: grossPay,
        netPay: netPay
    };
}
employees.forEach(employee => {
    const payroll = processPayroll(employee);
    console.log(payroll);
});
