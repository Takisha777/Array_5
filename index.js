const clientsEstimations = [];
const askClientToGiveEstimation = ()=>{
    return prompt('Как вы оцениваете нашу кофейню от 1 до 10?');
}
let clientToGiveEstimation;
for (let i=0; i < 5; i++){
    clientToGiveEstimation = Number(askClientToGiveEstimation());
    clientsEstimations.push(clientToGiveEstimation);
}
const goodEstimations = clientsEstimations.filter((estimation) => { return estimation > 5 && estimation < 10});
const notGoodEstimations = clientsEstimations.filter((estimation) => { return estimation <= 5 && estimation >= 1});
alert(`Всего положительных оценок: ${goodEstimations.length}; Всего отрицательных оценок: ${notGoodEstimations.length}`);