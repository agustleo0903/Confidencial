
const abrirArquivo =
document.getElementById("abrirArquivo");

const conteudo =
document.getElementById("conteudo");

const siteReal =
document.getElementById("siteReal");

const progress =
document.getElementById("scanProgress");

const scanText =
document.getElementById("scanText");

const drawing =
document.getElementById("drawing");

abrirArquivo.addEventListener("click", () => {

    abrirArquivo.disabled = true;

    conteudo.style.display = "block";

    conteudo.scrollIntoView({
        behavior: "smooth"
    });

    iniciarScanner();

});


function iniciarScanner(){

    let porcentagem = 0;

    const mensagens = [

        "Conectando ao banco de dados...",
        "Buscando registros...",
        "Registro encontrado: Lizia Beatriz",
        "Verificando nível de importância...",
        "Nível extremamente elevado detectado...",
        "Validando evidências...",
        "Arquivo desbloqueado."

    ];

    let indiceMensagem = 0;

    const intervalo = setInterval(()=>{

        porcentagem += 2;

        progress.style.width =
        porcentagem + "%";

        if(
            porcentagem % 15 === 0 &&
            indiceMensagem < mensagens.length
        ){

            scanText.textContent =
            mensagens[indiceMensagem];

            indiceMensagem++;

        }

        if(porcentagem >= 100){

            clearInterval(intervalo);

            scanText.innerHTML =
            "✅ Arquivo desbloqueado com sucesso";

            setTimeout(()=>{

                siteReal.style.display =
                "block";

                siteReal.scrollIntoView({
                    behavior:"smooth"
                });

                setTimeout(()=>{

                    drawing.classList.add(
                        "active"
                    );

                },500);

            },1200);

        }

    },80);

}



const btn =
document.getElementById("analisarBtn");

const statusText =
document.getElementById("status");

btn.addEventListener("click", () => {

    btn.disabled = true;

    const etapas = [

        "Iniciando análise...",
        "Coletando informações...",
        "Calculando nível de importância...",
        "Verificando imparcialidade...",
        "Erro detectado."
    ];

    let index = 0;

    const interval = setInterval(() => {

        statusText.innerHTML =
        etapas[index];

        index++;

        if(index >= etapas.length){

            clearInterval(interval);

            setTimeout(() => {

                statusText.innerHTML = `

                    <h2>Resultado</h2>

                    <br>

                    <p>
                        Não foi possível permanecer imparcial.
                    </p>

                    <br>

                    <h3>
                        ❤️ É, eu gosto muito de você ❤️
                    </h3>

                    <br>

                    <p>
                        E sinceramente...
                        acho que esse sistema estava
                        tendencioso desde o início 😑
                    </p>

                `;

            },1000);

        }

    },1200);

});