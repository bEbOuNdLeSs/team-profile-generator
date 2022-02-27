const Engineer = require("../lib/Engineer");

test("Can create a github.", () => {
    const testGithub = "bEbOuNdLeSs";
    const employeeInstance = new Engineer("bEbOuNdLeSs", 2, "beboundlessssss@gmail.com", testGithub);
    expect(employeeInstance.github).toBe(testGithub);
});

test("Testing getGithub will return github.", () => {
    const testGithub = "bEbOuNdLeSs";
    const employeeInstance = new Engineer("bEbOuNdLeSs", 2, "beboundlessssss@gmail.com", testGithub);
    expect(employeeInstance.getGithub()).toBe(testGithub);
});

test("Testing role.", () => {
    const returnValue = "Engineer";
    const employeeInstance = new Engineer("bEbOuNdLeSs", 2, "beboundlessssss@gmail.com", "bEbOuNdLeSs");
    expect(employeeInstance.getRole()).toBe(returnValue);
});