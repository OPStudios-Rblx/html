const inputbuttons = document.querySelectorAll(".input-button");
const inputStates = Array(inputbuttons.length).fill(false);
const outputs = document.querySelectorAll(".output");
const wires = document.querySelectorAll(".wire");
const container2 = document.querySelector(".adder-visual");
const digits = container2.querySelectorAll("p");
const gates = document.querySelectorAll(".gate");

inputbuttons.forEach(setupButton);

function setupButton(button, index) {
    if (button) {
        button.addEventListener('click', function() {
            inputStates[index] = !inputStates[index];

            button.classList.toggle("active", inputStates[index]);
            const bg = button.parentElement;
            const container = bg.parentElement;
            const text = bg.querySelector("p");

            bg.classList.toggle("active", inputStates[index]);
            container.classList.toggle("active", inputStates[index]);

            if (text) {
                text.classList.toggle("active", inputStates[index]);
                text.textContent = inputStates[index] ? "ON" : "OFF";
                
            }
             console.log(inputStates); 
             updateOutputs();
        });
    }
};

function updateOutputs() {
    const allOn = inputStates.every(Boolean);
    const anyOn = inputStates.some(Boolean);
   
    outputs.forEach((output, i) => {
        if (allOn && i === 1) {
            output.classList.toggle("active");
        } else if (anyOn && !allOn && i === 0) {
            output.classList.toggle("active");
        } else {
            output.classList.remove("active");
        }
    });

    const firstOutput = inputStates[0]; 
    const secondOutput = inputStates[1]; 
    const firstOutputwires = [0,1];
    const secondOutputwires = [3,4];
    

    wires.forEach((wire, i) => {
        if (i === 2) {
            wire.classList.toggle("active", (firstOutput || secondOutput) && !allOn);
        } else if (firstOutputwires.includes(i)) {
            wire.classList.toggle("active", firstOutput);
        } else if (secondOutputwires.includes(i)) {
            wire.classList.toggle("active", secondOutput);
        } else if(allOn) {
            wire.classList.toggle("active",true);
        }else {
            wire.classList.remove("active");
        }
    });

    gates.forEach((gate,i) => {
        if (anyOn && i === 0) {
           gate.classList.toggle("active");
        }else if (allOn & i === 1 ) {
            gate.classList.toggle("active");
        }else {
            gate.classList.remove("active");
        }
    });

    
    digits.forEach((p, i) => {
        if (i === 1 || i === 3) return; // skip '+' and '='
       
        if (i === 0) {
            p.textContent = inputStates[0] ? '1' : '0'; // first input
        }

        if (i === 2) {
            p.textContent = inputStates[1] ? '1' : '0'; // second input
        }

        if (i === 4) {
            // sum output
            const sum = Number(inputStates[0] || 0) + Number(inputStates[1] || 0);
            p.textContent = sum;
        }
    });
}
