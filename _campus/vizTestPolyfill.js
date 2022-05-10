
function output(...args){
	console.log.call(this,...args);

    const line = document.createElement('tr');
    line.innerHTML = `<td>${args.join(' ')}</td>`
    document.querySelector('#output').appendChild(line);
}

let lastTestName;

function describe(testName, testCb){
    lastTestName = testName;
    testCb();
}

function logResult(testName, outcome, detail) {
    const line = document.createElement('tr');
    line.innerHTML = `<td>${testName}</td><td>${outcome}</td><td>${detail}</td>`
    document.querySelector('#results').appendChild(line);
}

function expect(given){
    return {
        to: {
            equal: (actual) => {
                const result = (actual === given);
                const detail = result ? '' : `Expect to equal: Got ${given} instead of ${actual}`;
                logResult(lastTestName, result ? 'PASS' : 'FAIL', detail);
            }
        }
    }
}