let colorCounts = {}; // Objeto para armazenar contagens de cores
 
function colorirDia() {
    let days = document.getElementById('day').value;
    let color = document.getElementById('color').value;
    let calendar = document.getElementById('calendar');
    let tds = calendar.getElementsByTagName('td');
 
    // Obtém a data atual
    let currentDate = new Date();
    let currentMonth = currentDate.getMonth();
 
    // Verifica se é abril (índice 3 representa abril)
    if (currentMonth === 3) {
        // Obtém o dia da semana do dia selecionado (0 para domingo, 1 para segunda-feira, ..., 6 para sábado)
        let selectedDate = new Date(currentDate.getFullYear(), currentMonth, parseInt(days));
        let dayOfWeek = selectedDate.getDay();
 
        // Verifica se o dia selecionado é um domingo (dia da semana 0)
        if (dayOfWeek === 0) {
            alert('Não é possível marcar datas aos domingos no mês de abril.');
            return; // Sai da função se for domingo em abril
        }
    }
 
    // Verifica se o número digitado é válido (não maior que 30)
    if (parseInt(days) > 30) {
        alert("Esse número é inválido. O número não pode ser maior do que 30.");
        return; // Sai da função imediatamente
    }
 
    // Subtrai 1 do valor do dia porque os arrays em JavaScript começam com índice 0
    let index = parseInt(days);
 
    // Verifica se o índice está dentro do intervalo válido
    if (index >= 0 && index < tds.length) {
        // Verifica se a cor já foi selecionada três vezes
        if (colorCounts[color] >= 3) {
            alert('O frete não tem capacidade para mais e 3 viagens');
            return; // Sai da função se a cor já foi selecionada três vezes
        }
        // Atualiza o contador da cor selecionada
        colorCounts[color] = (colorCounts[color] || 0) + 1;
 
        // Verifica se o dia selecionado é um domingo e sai da função sem aplicar a cor
        if (currentMonth === 3 && new Date(currentDate.getFullYear(), currentMonth, parseInt(days)).getDay() === 0) {
            alert('Não é possível marcar datas aos domingos no mês de abril.');
            return;
        }
 
        tds[index].style.backgroundColor = color;
    } else {
        alert('Dia selecionado está fora do intervalo válido.');
    }
}