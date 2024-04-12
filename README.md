# Calendário interativo com Javascript

# ``Descrição``
Este conjunto de códigos consiste em uma aplicação web que oferece um calendário interativo, permitindo aos usuários destacarem dias específicos com cores distintas. A seguir, são detalhados os principais componentes e funcionalidades:

# ``Ìndice``

* [calendario.html](#calendariohtml)
* [calendar.css](#calendarcss)
* [calendar.js](#calendarjs)

# ``Pré-visualização do projeto``

![Calendário interativo](img/Captura%20de%20tela%202024-04-12%20112648.png)

# ``Funcionalidades``

- ### **Seleção de Dia:** 
Os usuários podem inserir o número do dia desejado no campo de entrada.

- ### **Seleção de Cor:** 
Os usuários podem escolher uma cor da lista suspensa para destacar o dia selecionado.

- ### **Aplicação de Destaque:** 
Ao clicar no botão "Aplicar", a cor selecionada é aplicada ao dia especificado na tabela.

- ### **Restrições de Destaque:** 
O destaque não é aplicado aos domingos do mês de abril, conforme determinado pela aplicação.

- ### **Limitação de Cor:** 
Cada cor selecionada só pode ser aplicada até três vezes, visando a garantir uma distribuição equitativa das cores destacadas.

# ``calendario.html``

```html 
<!-- calendario.html -->

<!DOCTYPE html>
<html>
<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <title>Page Title</title>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <link rel='stylesheet' type='text/css' media='screen' href='calendar.css'>
    <script src='calendar.js'></script>
</head>
<body>
    <table id="calendar">
        <tbody>
            <tr><!--  Primeira linha -->
                <th class="domingo">Dom</th>
                <th>Seg</th>
                <th>Ter</th>
                <th>Qua</th>
                <th>Qui</th>
                <th>Sex</th>
                <th>Sab</th>
            </tr>
              <tr><!-- segunda linha -->
                <td class="domingo"></td>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
                <td>6</td>
            </tr>
            <tr><!-- terceira linha -->
                <td class="domingo">7</td>
                <td>8</td>
                <td>9</td>
                <td>10</td>
                <td>11</td>
                <td>12</td>
                <td>13</td>
            </tr>
             <tr><!--quarta linha -->
                <td class="domingo">14</td>
                <td>15</td>
                <td>16</td>
                <td>17</td>
                <td>18</td>
                <td>19</td>
                <td>20</td>
            </tr>
            <tr><!--quinta linha -->
                <td class="domingo">21</td>
                <td>22</td>
                <td>23</td>
                <td>24</td>
                <td>25</td>
                <td>26</td>
                <td>27</td>
            </tr>
             <tr><!--sexta linha -->
                <td class="domingo">28</td>
                <td>29</td>
                <td>30</td>
                <td></td>
                <td></td> 
                <td></td>
                <td></td>
            </tr>
        </tbody>
    </table>
    <hr/> <!--faz divisoria -->
 
    <label for="color">Escolha uma cor:</label>
    <select id="color" name="color">
        <option value="LightBlue">Azul</option>
        <option value="PaleGreen">Verde</option>
        <option value="LightPink">Rosa</option>
        <option value="SlateBlue">Roxo</option>
    </select>
    <label for="day">Escolha o dia:</label>
    <input type="number" id="day" name="day" min="1" max="31">
    <input type="submit" onclick="colorirDia()">
</div>
    <div class="legenda">
        <p><span class ="azul"></span> Veículo 1</p>
        <p><span class ="verde"></span> Veículo 2</p>
        <p><span class ="rosa"></span> Veículo 3</p>
        <p><span class ="roxo"></span> Veículo 4</p>
    </div>
 
</body>
</html>
```

# ``calendar.css``

```html
<!-- calendar.css -->

table,td,tr{
    border: 1px solid black;
    border-collapse: collapse;
}
.domingo{
    color: red;
}
.azul {
    width: 20px;
    height: 20px;
    display: inline-block;
    background-color: LightBlue
}
 
.verde {
    width: 20px;
    height: 20px;
    display: inline-block;
    background-color: PaleGreen
}
.rosa{
    width: 20px;
    height: 20px;
    display: inline-block;
    background-color:LightPink
}
.roxo{
    width: 20px;
    height: 20px;
    display: inline-block;
    background-color:SlateBlue
}
```

# ``calendar.js``

```html
<!-- calendar.js -->

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
```
# ``Tecnologias utilizadas``
- HTML5
- CSS3
- JavaScript

# ``Autores``

- Nikolas Angelo
- Deivid Marques
