const sgMail = require('@sendgrid/mail');

//const API_KEY = 'CHAVE SENDGRID';

sgMail.setApiKey(API_KEY)

const message = {
    to: ['tauanmarrazzo@gmail.com'],
    from: 'bruno.yuri.alves@gmail.com',
    subject: 'Teste',
    text: 'Apenas um teste',
    html: `<!DOCTYPE html>
    <html style="max-width: 580px !important;">
    
    <head>
      <style type="text/css">
        @media screen {
          @font-face {
            font-family: ''''Open Sans'''';
            src: local(''''Open Sans''''), url(OpenSans-Regular.ttf) format(''''ttf'''');
          }
    
          @font-face {
            font-family: ''''Open Sans SemiBold'''';
            src: local(''''Open Sans SemiBold''''), url(OpenSans-SemiBold.ttf) format(''''ttf'''');
          }
    
          @font-face {
            font-family: ''''Open Sans Bold'''';
            src: local(''''Open Sans Bold''''), url(OpenSans-Bold.ttf) format(''''ttf'''');
          }
    
          body {
            min-width: 575px;
            max-width: 580px !important;
            color: #000 !important;
          }
    
          * {
            font-family: ''''Open Sans'''', sans-serif;
            font-size: 12px;
          }
    
    
    
          .w-25 {
            width: 25%;
            max-width: 25%;
          }
    
          .w-50 {
            width: 50%;
            max-width: 50%;
          }
    
          .w-100 {
            width: 100%;
            max-width: 100%;
          }
    
          .h-100 {
            height: 100%;
          }
    
          .text-center {
            text-align: center;
          }
    
          .mx-5vw {
            margin-left: 5%;
    
          }
    
          .mx-15px {
            margin-left: 15px;
            margin-right: 15px;
          }
    
          .mb-10px {
            margin-bottom: 10px;
          }
    
          .my-10px {
            margin-top: 10px;
            margin-bottom: 10px;
          }
    
          .mt-10px {
            margin-top: 10px;
          }
    
          .my-20px {
            margin-top: 20px;
            margin-bottom: 20px;
          }
    
          .mx-10vw {
            margin-left: 10vw;
            margin-right: 10vw;
          }
    
          .px-20px {
            padding-left: 20px;
            padding-right: 20px;
          }
    
          .px-30px {
            padding-left: 30px;
            padding-right: 30px;
          }
    
          .py-10px {
            padding-top: 10px;
            padding-bottom: 10px;
          }
    
          .py-20px {
            padding-top: 20px;
            padding-bottom: 20px;
          }
    
          .d-flex {
            display: flex;
          }
    
          .d-grid {
            display: grid;
          }
    
          .d-inline-block {
            display: inline-block;
          }
    
          .vertical-middle {
            vertical-align: middle;
          }
    
          .arredondado {
            border-radius: 10px;
          }
    
          .background-branco {
            background-color: white;
          }
    
          .background-cinza-1 {
            background-color: #eae9e6;
          }
    
          .background-cinza-2 {
            background-color: #f4f4f4;
          }
    
          .background-preto {
            background-color: #000 !important;
          }
    
          .texto-branco {
            color: white;
          }
    
          .texto-vermelho {
            color: red;
          }
    
          .texto-vinho {
            color: #a60b19;
          }
    
          .texto-verde {
            color: #00BE50;
          }
    
          .titulo-coluna {
            margin-bottom: 10px;
          }
    
          /* ID's */
          #info-pagamento {
            height: 35px;
          }
    
          #info-entrega {
            border-radius: 0px 0px 10px 10px;
          }
    
          /* Media Querys */
          /* Dispositivos bem pequenos */
          @media (max-width: 575.98px) {
            #info-pagamento {
              height: fit-content;
            }
          }
    
          /* Dispositivos pequenos */
          @media (max-width: 767.98px) {}
    
          /* Dispositivos médios */
          @media (max-width: 991.98px) {}
    
          /* Dispositivos grandes */
          @media (max-width: 1199.98px) {}
    
          /* SEÇÃO 2 */
          @font-face {
            font-family: ReservaSerif-Black;
            src: url(ReservaSerif-Black.woff);
          }
    
          .cartao {
            min-width: 580px;
            height: 100px;
            background-color: #eae9e6;
            border-radius: 10px !important;
          }
    
          .conteudo-cartao {
            display: flex;
          }
    
          .icone-container {
            width: 20%;
          }
    
          .icone {
            width: 22.44px;
            height: 33.62px;
          }
    
          .center {
            position: relative;
            top: 50%;
            transform: translateY(-50%);
          }
    
          .titulo-cartao {
            font-weight: bold;
          }
    
          .cartao-info-espacamento {
            line-height: 17px;
          }
    
          .espacamento {
            margin-top: 10px;
            margin-bottom: 10px;
          }
    
          .espacamento-maior {
            margin-top: 30px;
            margin-bottom: 30px;
          }
    
          .maior {
            height: 192px !important;
            background-color: #e6e4e1 !important;
          }
    
          .texto-grande-1p-5p {
            width: 429px;
          }
    
          .preenchimento {
            padding: 10px 10px 10px 30px !important;
          }
    
          .secao-relevancia {
            text-align: center;
          }
    
          .texto-secao-relevancia {
            font-size: 12px;
            font-weight: 600;
          }
    
          .cta-container {
            display: flex;
            text-align: center;
          }
    
          .botao-eu-quero {
            border: 1px solid #000;
            height: 40px;
            background-color: #fff;
            border-radius: 5px;
            width: 120px;
            font-weight: bold;
            text-decoration: none;
            color: black;
          }
    
          .secao-contato {
            padding-left: 30px;
          }
    
          /* FOOTER E HEADER */
          .imagem {
            padding: 30px;
          }
    
          .direito1 {
            padding-right: 30px;
            line-height: 25px;
          }
    
          .texto1 {
            margin: 0px 90px 0px 10px;
            text-align: right;
            padding: 25px 0px 0px 0px;
          }
    
          .texto2 {
            text-align: right;
            margin-right: 15px;
          }
    
          .cabecalho,
          .footer {
            color: #ffffff;
          }
    
          .cabecalho {
            height: 480px;
            background-color: #aca69a;
          }
    
          .cabecalho-info {
            display: flex;
          }
    
          .cabecalho-imagem {
            padding-left: 30px;
            margin-top: 30px;
          }
    
          .cabecalho-info-texto {
            width: 100%;
          }
    
          .footer {
            min-width: 575px;
            height: 117px;
            background-color: #edebe8;
            left: 0;
            width: 100%;
          }
    
          .titulo-principal {
            padding-left: 30px;
          }
    
          .bold {
            font-family: ''''Open Sans Bold'''', sans-serif;
          }
    
          .center-eu-quero {
            margin-top: 11px !important;
          }
    
          .semibold {
            font-family: ''''Open Sans SemiBold'''', sans-serif !important;
          }
    
          .bold {
            font-family: ''''Open Sans Bold'''', sans-serif !important;
          }
        }
      </style>
    </head>
    
    <body style="max-width: 580px !important;">
    
      <!-- SEÇÃO 1 -->
      <div class="cartao" style="height: fit-content !important; padding-bottom: 10px; background: url('https://produtos-digitais.usereserva.com/imagens_simples/background.png') no-repeat !important">
        <div class="cabecalho-info">
          <div class="cabecalho-imagem" style="">
            <img src="https://produtos-digitais.usereserva.com/imagens_simples/logo-simples.png" />
          </div>
          <div class="cabecalho-info-texto" style="padding-top: 10px; position: relative; color: #fff;">
            <div style="display: flex; flex-direction: row; padding-right: 7px; float: right; margin-top: 10px; margin-bottom: 20px;">
    
                <div style="margin-right: 20px; text-align: right;">
                  <span style="font-size: 14px;"> NÚMERO DO PEDIDO </span> <br>
      
                  <span style="font-size: 14px; margin-top: 10px;"> DATA DA COMPRA </span> <br>
      
                  <span style="font-size: 14px; margin-top: 10px;"> PREVISÃO DA ENTREGA </span>
                  
                </div>
      
                <div style="text-align: left;">
                  <span style="font-size: 14px; font-weight: 700;" class="semibold"> 1115423 </span> <br>
      
                  <span style="font-size: 14px; margin-top: 10px;"> quarta, 20 nov 19 </span> <br>
      
                  <span style="font-size: 14px; margin-right: 7px; margin-top: 10px;" class="semibold"> segunda, 10 jan 21 </span>
                </div>
              </div>
          </div>
        </div>
    
        <div class="espacamento"></div>
    
        <img src="http://app.usereserva.com/imagens/occ/ops1/divisor-branco.png" alt="borda" width="100%" height="1px" />
    
        <div class="espacamento"></div>
    
        <div class="titulo-principal" style="margin-top: 20px;">
          <img src="https://produtos-digitais.usereserva.com/imagens_simples/titulo_bemvindo.png" width="520" height="178" />
        </div>
    
        <div class="espacamento-maior"></div>
    
        <div class="titulo-principal" style="color: #fff;">
          <p style="font-size: 14px;">
            Acompanhe seu pedido sempre que precisar pelo clicando <a
              href="https://www.usereserva.com/profile?module=orders-history"
              style="text-decoration: none; color: #fff;"><span style="text-decoration: underline; font-size: 14px;"
                class="semibold">aqui</span></a>
            ou pelo
            <a class="semibold" style="font-weight: bold; color: white; text-decoration: none;"
              href="https://www.usereserva.com/profile?module=orders-history" target="_blank"><span
                style="text-decoration: underline; font-size: 14px;" class="semibold">minha conta ></span></a>
          </p>
        </div>
      </div>
    
      <div class="espacamento"></div>
    
      <div class="info-completa">
        <div class="py-20px" style="padding-left: 30px">
          <p class="semibold" style="font-size: 16px; font-weight: 600;">Olá Rodrigo!</p>
          <p style="font-size: 14px;"> 
            Ótimas notícias: o pagamento foi aprovado e agora você é oficialmente assinante Simples&reg;! <br>
            Confira abaixo a peça escolhida e os detalhes sobre seus benefícios.
          </p>
        </div>
    
        
        <div class="espacamento"></div>
    
        <img src="divisor.png" alt="borda" width="100%" height="1px" />
    
        <div class="espacamento-maior"></div>
    
        <div style="padding-left: 30px; margin-top: 14px;">
          <span style="font-weight: 600; font-size: 14px">RESUMO DO PEDIDO</span>
    
          <br />
          <br />
    
          <div style="display: flex; width: 100%">
            <div style="display: grid; width: 20%;">
              <span style="margin-bottom: 10px; font-weight: 600 !important; font-size: 14px !important; height: 40px;">
                VALOR DA <br> COMPRA
              </span>
              <span style="font-size: 14px;">R$299,00</span>
            </div>
            <div style="display: grid; width: 25%; margin-left: 30px;">
              <span style="margin-bottom: 10px; font-weight: 600 !important; font-size: 14px; height: 40px;">DATA DA <br> COMPRA</span>
              <span style="font-size: 14px;">01/07/2019</span>
            </div>
            <div class="d-grid" style="width: 30%; margin-left: 20px;">
              <span style="margin-bottom: 10px; font-weight: 600 !important; font-size: 14px; height: 40px;">TIPO DA <br> ENTREGA</span>
              <span style="font-size: 14px; font-weight: 600 !important;">Receba em casa</span>
            </div>
    
            <div class="d-grid" style="width: 35%;">
              <span style="margin-bottom: 10px; font-weight: 600 !important; font-size: 14px; height: 40px;">PREVISÃO DE <br> ENTREGA</span>
              <span class="subtitulo-coluna texto-vermelho" style="font-size: 12px;">Aguardando
                confirmação
                do <br />
              </span>
              <span class="subtitulo-coluna semibold texto-vermelho" style="text-align: justify; margin-left: 35px; font-size: 12px;">
                pagamento
              </span></span>
            </div>
          </div>
    
        </div>
      </div>
    
      <div class="info-completa">
        <div class="my-10px py-20px">
          <!-- Produto 1 -->
    
          <div class="d-flex w-100 my-10px">
            <img src="http://app.usereserva.com/imagens/occ/ops1/img_exemplo.png" />
            <div class="mx-5vw w-100">
              <span style="font-size: 13px; font-weight: 700 !important; text-transform: uppercase;">Camiseta Simples Masc (Assinatura)</span>
              <div class="propriedades-produto d-flex my-20px">
                <div class="w-25"><span style="font-size: 13px;"> <span style="font-size: 13px; font-weight: 600 !important;"> Cor </span>: Branca</span></div>
                <div class="w-25"><span style="font-size: 13px;"> <span style="font-size: 13px; font-weight: 600 !important;"> Tamanho </span>: M</span></div>
                <div class="w-25"><span style="font-size: 13px;"> <span style="font-size: 13px; font-weight: 600 !important;"> Quantidade </span>: 1</span></div>
                <div class="w-25"><span style="font-size: 13px;"> <span style="font-size: 13px; font-weight: 600 !important;"> Valor </span>: R$299,88</span></div>
              </div>  
            </div>
          </div>
        </div>
      </div>
    
      <div class="espacamento"></div>
    
      <div class="cartao" style="height: fit-content !important; padding-bottom: 16px;">
        <div class="conteudo-cartao">
          <div class="icone-container text-center">
            <img src="http://app.usereserva.com/imagens/occ/ops1/icone-localizacao.png" class="icone" style="width: 22.44px; height: 33.62px; margin-top: 35px" />
          </div>
    
          <div style="margin-top: 15px; width: 100%">
            <p class="titulo-cartao semibold"  style="font-size: 14px;">ENDEREÇO DE ENTREGA</p>
    
            <div class="endereco-telefone-espacamento">
              <div class="cartao-info-espacamento">
                <span style="font-size: 14px;">
                  Jardins - R. Bela Cintra 2149, Jardins - São Paulo/SP
                </span>
                <br>
              </div>
            </div>
          </div>
        </div>
      </div>
    
      <div class="espacamento"></div>
    
      <div class="cartao" style="height: fit-content !important;">
        <div class="conteudo-cartao">
    
          <div class="icone-container text-center">
            <img src="http://app.usereserva.com/imagens/occ/ops1/icone-cartao.png" class="icone" style="width:30.8px; height: 22px; margin-top: 40px" />
          </div>
    
          <div style="width: 100%; margin-top: 14px; margin-bottom: 14px; display: grid;">
            <div>
              <span class="titulo-cartao semibold"
              style="margin-bottom: 7px; font-size: 14px;">
                PAGAMENTO
              </span>
            </div>
            
    
            <div 
              style="display: flex; flex-direction: row; margin-top: 10px;
              padding-bottom: 10px; border-bottom: #000 solid 1px; margin-right: 30px;"
            >
    
              <div style="margin-right: 20px; text-align: left;">
                
                <!--Início Método de pagamento 1-->
                <span style="font-size: 14px;">Boleto</span> <br>
                <!--Fim Método de pagamento-->
    
              </div>
    
              <div style="text-align: left;">
                <!--Início valor do método 1-->
                <span style="font-size: 14px; font-weight: 600 !important;">R$299,00 (em 12 parcelas de R$24,99).</span> <br>
                <!--Fim valor do método 1-->
    
              </div>
            </div>
    
            <div style="margin-top: 10px;">
              <span style="font-size: 14px !important;">Opa! Tudo certo por aqui.</span>
            </div>
          </div>
        </div>
      </div>
      
      
      
    
      <div class="espacamento-maior"></div>
    
      <img src="http://app.usereserva.com/imagens/occ/ops1/divisor.png" alt="borda" width="100%" height="1px" />
      <div class="espacamento-maior"></div>
    
      <div class="info-completa">
        <div class="py-20px" style="padding-left: 30px">
          <p class="semibold" style="font-size: 16px; font-weight: 600;">BENEFÍCIOS</p>
          <p style="font-size: 14px;"> 
            Ser assinante Simples&reg; te dá acesso a uma série de benefícios exclusivos. Confira todos e as regras para usá-los:
          </p>
        </div>
      </div>
    
      <!-- <img src="https://produtos-digitais.usereserva.com/imagens_simples/infos.png" style="width: 100%"> -->
    
      <!-- Infos -->
      <div style="background: #FCFCFC;">
        <div>
          <table style="margin: 0 auto; width: 100%; height: 60px;" >
            <tbody>
              <tr>
    
                <td>
                  <div style="margin-left: 30px; width: 240px;">
                    <img src="https://produtos-digitais.usereserva.com/bem-vindo_new_images/info01.png">
                    <p>
                      Você já pode usar seu desconto de 20% nas compras acima de R$ 399 (exceto nas peças em promoção). 
                    </p>
                    <p>
                      Ele é válido enquanto você for assinante Simples, por até 1 ano. Para usá-lo, basta usar o e-mail cadastrado em sua conta.
                    </p>
                  </div>
                </td>
    
                <td style="width: 274px;">
                  <img src="https://produtos-digitais.usereserva.com/bem-vindo_new_images/img01.png">
                </td>
    
              </tr>
            </tbody>
          </table>
        </div>
    
        <img src="http://app.usereserva.com/imagens/occ/ops1/divisor.png" alt="borda" width="100%" height="1px"/>
    
        <table style="margin: 0 auto; width: 100%; height: 60px;" >
          <tbody>
            <tr>
    
              <td style="width: 274px;">
                <img src="https://produtos-digitais.usereserva.com/bem-vindo_new_images/img02.png">
              </td>
    
              <td style="background: #fff;">
                <div style="margin-left: 20px; width: 200px;">
                  <img src="https://produtos-digitais.usereserva.com/bem-vindo_new_images/info02.png" width="200">
                  <p style=" text-align: right;">
                    O valor da sua assinatura volta pra você! Todo dia 1º, você receberá R$ 24,99 em créditos na sua conta da Reserva. 
                  </p>
                  <p style=" text-align: right;">
                    Eles não são cumulativos e expiram a cada 30 dias. Você poderá usar seus créditos em toda compra acima de R$ 85.
                  </p>
                </div>
              </td>
    
            </tr>
          </tbody>
        </table>
    
        <img src="http://app.usereserva.com/imagens/occ/ops1/divisor.png" alt="borda" width="100%" height="1px"/>
    
        <table style="margin: 0 auto; width: 100%; height: 60px;" >
          <tbody>
            <tr>
    
              <td style="background: #fff;">
                <div style="margin-left: 10px; width: 250px;">
                  <img src="https://produtos-digitais.usereserva.com/bem-vindo_new_images/info03.png" width="200">
                  <p style="margin-top: 8px;">
                    Ao longo da assinatura, você receberá uma peça novinha a cada 5 meses. Mas relaxa, nós entraremos em contato cerca de 30 dias antes de cada envio.
                  </p>
                  <p style="margin-top: 8px;">
                    Você pode escolher uma peça de tamanho e até gênero diferente da anterior. Aqui você tem total liberdade! 
                  </p>
                  <p style="color: #7E7E7E; font-size: 10px; margin-top: 10px;">
                    Atenção: se não tivermos uma resposta sua até 20 dias antes do prazo para o envio, nós enviaremos uma peça de mesmo tamanho e gênero, mas de cor a ser escolhida por nossa equipe.
                  </p>
                </div>
              </td>
    
              <td style="width: 274px;">
                <img src="https://produtos-digitais.usereserva.com/bem-vindo_new_images/img03.png" height="202">
              </td>
    
            </tr>
          </tbody>
        </table>
    
        <img src="http://app.usereserva.com/imagens/occ/ops1/divisor.png" alt="borda" width="100%" height="1px"/>
    
        <table style="margin: 0 auto; width: 100%; height: 60px;" >
          <tbody>
            <tr>
    
              <td style="width: 274px;">
                <img src="https://produtos-digitais.usereserva.com/bem-vindo_new_images/img04.png">
              </td>
    
              <td style="background: #fff;">
                <div style="margin-left: 10px; width: 230px;">
                  <img src="https://produtos-digitais.usereserva.com/bem-vindo_new_images/info04.png" width="200">
                  <p style="margin-top: 8px; text-align: right;">
                    Ao final da sua anuidade, você receberá mais R$ 75 em créditos, caso devolva as suas 3 peças Simples&reg;. 
                  </p>
                  <p style="margin-top: 8px; text-align: right;">
                    São R$ 25 por peça devolvida e você pode devolver só uma, duas ou todas, diretamente a uma loja Reserva. Seus créditos estarão disponíveis em até 7 dias depois da devolução.
                  </p>
                  <p style="color: #7E7E7E; font-size: 10px; margin-top: 10px; text-align: right;">
                    Mas atenção: você terá até 30 dias depois do fim da sua assinatura para devolver suas peças.
                  </p>
                </div>
              </td>
    
            </tr>
          </tbody>
        </table>
    
        <img src="http://app.usereserva.com/imagens/occ/ops1/divisor.png" alt="borda" width="100%" height="1px"/>
    
        <table style="margin: 0 auto; width: 100%; height: 60px;" >
          <tbody>
            <tr>
    
              <td style="background: #fff;">
                <div style="margin-left: 10px; width: 250px;">
                  <img src="https://produtos-digitais.usereserva.com/bem-vindo_new_images/info05.png" width="220">
                  <p style="width: 220px;">
                    As peças devolvidas serão desfibradas, recicladas e transformadas em novas peças. Ou seja, elas não irão poluir o meio ambiente. Ficar com a consciência tranquila é Simples&reg;
                  </p>
                </div>
              </td>
    
              <td style="width: 274px;">
                <img src="https://produtos-digitais.usereserva.com/bem-vindo_new_images/img05.png" height="202">
              </td>
    
            </tr>
          </tbody>
        </table>
    
      </div>
      
      <img src="http://app.usereserva.com/imagens/occ/ops1/divisor.png" alt="borda" width="100%" height="1px" />
      <div class="espacamento-maior"></div>
      <table>
        <tbody>
          <td>
            <img src="https://produtos-digitais.usereserva.com/bem-vindo_new_images/simples-lembrete.png">
          </td>
        </tbody>
      </table>
      <div class="espacamento-maior"></div>
      <img src="http://app.usereserva.com/imagens/occ/ops1/divisor.png" alt="borda" width="100%" height="1px" />
    
      <div class="espacamento-maior"></div>
    
      <div>
    
        <p style="text-align: center; font-size: 14px; margin-bottom: 20px;">
          Se quiser tirar alguma dúvida ou bater um papo, entre em contato conosco pelos canais abaixo:
        </p>
    
        <div
        style="
          display: flex;
          height: 160px;
        "
        >
    
        <div style=" border-right: 1px solid #8A8C8E; height: 160px; width: 25%;">
    
          <div style=" height: 24px; width: 24px; margin: 0 auto 10px 62px ;">
            <img src="http://app.usereserva.com/imagens/occ/enviado_casa/email.png" />
          </div>
    
          <p style=" text-align: center; margin-bottom: 2px; font-size: 12px; font-weight: 700; color: #000; "> 
            E-mail
          </p>
    
          <p style=" text-align: center; margin: 0 auto 12px; color: #8A8C8E; "> 
            Seg a sex: 09h às 18h
          </p>
    
          <p style=" text-align: center; margin-bottom: 2px; color: #8A8C8E;"> 
            E-mail Reserva
          </p>
    
          <p style=" text-align: center; margin: 0 auto 12px; "> 
            <a href="##email-reserva##" style="text-decoration: none; color: #13294B; font-weight: 500 !important;">
              <span style="text-decoration: underline; font-weight: 500 !important;">
                sac@usereserva.com
              </span>
            </a>
          </p>
    
          <p style=" text-align: center; margin-bottom: 2px; color: #8A8C8E;"> 
            E-mail Oficina
          </p>
    
          <p style=" text-align: center; margin: 0 auto 12px; "> 
            <a href="##email-reserva##" style="text-decoration: none; color: #13294B; font-weight: 500 !important;">
              <span style="text-decoration: underline; font-weight: 500 !important;">
                sac@oficinareserva.com
              </span>
            </a>
          </p>
    
        </div>
    
        <div style="border-right: 1px solid #8A8C8E; height: 160px; width: 23%;">
    
          <div style=" height: 24px; width: 24px; margin: 0 auto 10px 56px ;">
            <img src="http://app.usereserva.com/imagens/occ/enviado_casa/telephone-call.png" />
          </div>
    
          <p style=" text-align: center; margin-bottom: 2px; font-size: 12px; font-weight: 700; color: #000; "> 
            Telefone
          </p>
    
          <p style=" text-align: center; margin: 0 auto 12px; color: #8A8C8E; "> 
            Seg a sex: 09h às 18h
          </p>
    
          <p style=" text-align: center; margin-bottom: 2px; color: #8A8C8E;"> 
            Telefone
          </p>
    
          <p style=" text-align: center; margin: 0 auto 12px; "> 
            <a href="##phone-link##" style="text-decoration: none; color: #13294B; font-weight: 500 !important;">
              <span style="text-decoration: underline; font-weight: 500 !important;">
                (21) 2108-4990
              </span>
            </a>
          </p>
    
        </div>
    
        <div style="border-right: 1px solid #8A8C8E; height: 160px; width: 27%;">
    
          <div style=" height: 24px; width: 24px; margin: 0 auto 10px 69px ;">
            <img src="http://app.usereserva.com/imagens/occ/enviado_casa/whatsapp%20(1).png" />
          </div>
    
          <p style=" text-align: center; margin-bottom: 2px; font-size: 12px; font-weight: 700; color: #000; "> 
            Whatsapp
          </p>
    
          <p style=" text-align: center; margin: 0 auto 12px; color: #8A8C8E; "> 
            Horários de atendimento:
          </p>
    
          <p style=" text-align: center; margin-bottom: 2px; color: #8A8C8E;"> 
            Seg a sex: 10h às 21h
          </p>
    
          <p style=" text-align: center; margin: 0 auto 12px; "> 
            <a href="https://whts.co/reserva" style="text-decoration: none; color: #13294B; font-weight: 500 !important;">
              <span style="text-decoration: underline; font-weight: 500 !important;">
                Loja mais próxima
              </span>
            </a>
          </p>
    
          <p style=" text-align: center; margin-bottom: 2px; color: #8A8C8E;"> 
            Seg a sex: 09h às 20h
          </p>
    
          <p style=" text-align: center; margin: 0 auto 12px; "> 
            <a href="https://api.whatsapp.com/send?1=pt_BR&phone=552121084990" style="text-decoration: none; color: #13294B; font-weight: 500 !important;">
              <span style="text-decoration: underline; font-weight: 500 !important;">
                Atendimento
              </span>
            </a>
          </p>
    
        </div>
    
        <div style=" height: 160px; width: 25%;">
    
          <div style=" height: 24px; width: 24px; margin: 0 auto 10px 62px ;">
            <img src="http://app.usereserva.com/imagens/occ/enviado_casa/path2-4-4.png" />
          </div>
    
          <p style=" text-align: center; margin-bottom: 2px; font-size: 12px; font-weight: 700; color: #000; "> 
            Libras
          </p>
    
          <p style=" text-align: center; margin: 0 auto 12px; color: #8A8C8E; "> 
            Para atendimento em libras, acesse o link abaixo:
          </p>
    
          <p style=" text-align: center; margin: 0 auto 12px; "> 
            <a href="https://www.usereserva.com/libras" style="text-decoration: none; color: #13294B; font-weight: 500 !important;">
              <span style="text-decoration: underline; font-weight: 500 !important;">
                Atendimento em Libras
              </span>
            </a>
          </p>
    
        </div>
    
        </div>
    
        <div class="espacamento"></div>
    
        <p style="font-size: 14px !important; font-weight: 700 !important; text-align: center; margin: 25px auto;">Tudo de bom para você! Um abraço.</p>
    
      </div>
    </body>
    
    <div class="footer" style="max-width: 580px !important;">
      
      <a style="text-decoration: none;" href="https://www.usereserva.com/" target="_blank">
        <img width="111" src="https://front.usereserva.com/emails/Reserva.png" style="margin: 50px 0 51px 12px" />
      </a>
     
      <a style="text-decoration: none;" href="https://www.usereserva.com/c/infantil/navega%C3%A7%C3%A3o-na-vitrine/infantil"
        target="_blank">
        <img src="https://front.usereserva.com/emails/reserva-mini.png" style="margin: 49px 0 48px 24px;" width="60" />
      </a>
     
      <a style="text-decoration: none;" href="https://www.usereserva.com/" target="_blank">
        <img src="https://front.usereserva.com/emails/Go.png" width="43.66" style="margin: 51px 0 50px 24px;" />
      </a>
     
      <a style="text-decoration: none;" href="https://www.usereserva.com/c/oficina/navega%C3%A7%C3%A3o-na-vitrine/oficina"
        target="_blank">
        <img src="https://front.usereserva.com/emails/Oficina.png" width="81.54" style="margin: 43px 0 43px 23px;" />
      </a>
     
      <a style="text-decoration: none;" href="https://www.usereserva.com/c/eva/navega%C3%A7%C3%A3o-na-vitrine/eva"
        target="_blank">
        <img src="https://front.usereserva.com/emails/Eva.png" width="70" style="margin: 51px 0 50px 24px;" />
      </a>
    
      <a style="text-decoration: none;" href="https://www.reserva.ink/"
        target="_blank">
        <img  src="https://produtos-digitais.usereserva.com/Ink/Logo-INK.png" width="51" style="margin: 45px 0 44px 24px;" />
      </a>
     
    </div>
    
    </html>`,
};

sgMail
    .send(message)
    .then((response) => console.log('Email sent...'))
    .catch((error) => console.log(error.message));