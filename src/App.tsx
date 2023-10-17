import './App.css'

function App() {

  const form = document.getElementById('form');
  form?.addEventListener(('submit'), function (event) {
    event.preventDefault();

    //@ts-ignore
    const weight = document.getElementById('weight').value;
    //@ts-ignore
    const height = document.getElementById('height').value;

    const bmi = (weight / (height * height)).toFixed(2);

    //@ts-ignore
    if (!isNaN(bmi)) {
      const value = document.getElementById('value');
      let description = '';

      //@ts-ignore
      value.classList.add('attention');
      //@ts-ignore
      document.getElementById('infos').classList.remove('hidden');
      //@ts-ignore
      if (bmi < 18.5) {
        description = 'Cuidado! Você está abaixo do peso!';
      }
      //@ts-ignore
      else if (bmi >= 18.5 && bmi <= 25) {
        description = "Você está no peso ideal!";
        //@ts-ignore
        value.classList.remove('attention');
        //@ts-ignore
        value.classList.add('normal');
      }
      //@ts-ignore
      else if (bmi > 25 && bmi <= 30) {
        description = "Cuidado! Você está com sobrepeso!";
      }

      //@ts-ignore
      else if (bmi > 30 && bmi <= 35) {
        description = "Cuidado! Você está com obesidade moderada!";
      }

      //@ts-ignore
      else if (bmi > 35 && bmi <= 40) {
        description = "Cuidado! Você está com obesidade severa!";
      }

      else {
        description = "Cuidado! Você está com obesidade morbida!";
      }
      //@ts-ignore
      value.textContent = bmi.replace('.', ',');
      //@ts-ignore
      document.getElementById('description').textContent = description;
    }
  });
  //@ts-ignore
  form?.addEventListener('keypress', function (event) {
    if (event.key === 'press') {
      //@ts-ignore
      document.getElementById('#calculate').click();
    }
  });
  return (
    <>
      <div className="first-section">
        <div className="calculator-content" id='calculator'>
          <h1> Calculadora - IMC</h1>

          <form action="submit" id='form'>
            <div className="input-box">
              <label> Peso em KG</label>
              <input type="number" id="weight" placeholder='KG' required />
            </div>
            <div className="input-box">
              <label> Altura em M</label>
              <input type="text" id="height" placeholder='EX: 1.70' required />
            </div>
            <div className="btn-box">
              <button id='calculate'>
                Calcular
              </button>
            </div>
          </form>
          <div id="infos" className="hidden">
            <div id="result">
              <div id="bmi">
                <span id='value'></span>
                <span>Seu IMC</span>
              </div>
              <div id="description">
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;
