const sgMail = require('@sendgrid/mail');

const API_KEY = 'CHAVE DO SENDGRID';

sgMail.setApiKey(API_KEY);

const bemVindoApSimples = {
  to: ['bruno.yuri.alves@gmail.com'],
  from: 'gruporeserva@usereserva.com',
  fromname: 'Grupo Reserva',
  subject: 'Bem vindo guia 2',
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
    
          /* Dispositivos m??dios */
          @media (max-width: 991.98px) {}
    
          /* Dispositivos grandes */
          @media (max-width: 1199.98px) {}
    
          /* SE????O 2 */
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
      <!-- SE????O 1 -->
      <div style="height: fit-content !important; min-width: 580px; height: 100px; border-radius: 10px !important; padding-bottom: 10px; background: url('https://produtos-digitais.usereserva.com/imagens_simples/background.png') no-repeat !important">
        <div style="display: flex;">
          <div style="padding-left: 30px; margin-top: 30px;">
            <img src="https://produtos-digitais.usereserva.com/imagens_simples/logo-simples.png" />
          </div>
          <div style="padding-top: 10px; position: relative; color: #fff; width: 100%;">
            <div style="display: flex; flex-direction: row; padding-right: 7px; float: right; margin-top: 10px; margin-bottom: 20px;">
    
                <div style="margin-right: 20px; text-align: right;">
                  <span style="font-size: 14px;"> N??MERO DO PEDIDO </span> <br>
      
                  <span style="font-size: 14px; margin-top: 10px;"> DATA DA COMPRA </span> <br>
      
                  <span style="font-size: 14px; margin-top: 10px;"> PREVIS??O DA ENTREGA </span>
                  
                </div>
      
                <div style="text-align: left;">
                  <span style="font-size: 14px; font-weight: 700;" class="semibold"> 1115423 </span> <br>
      
                  <span style="font-size: 14px; margin-top: 10px;"> quarta, 20 nov 19 </span> <br>
      
                  <span style="font-size: 14px; margin-right: 7px; margin-top: 10px;" class="semibold"> segunda, 10 jan 21 </span>
                </div>
              </div>
          </div>
        </div>
    
        <div style="margin-top: 10px; margin-bottom: 10px;"></div>
    
        <img src="http://app.usereserva.com/imagens/occ/ops1/divisor-branco.png" alt="borda" width="100%" height="1px" />
    
        <div style="margin-top: 10px; margin-bottom: 10px;"></div>
    
        <div style="margin-top: 20px; padding-left: 30px;">
          <img src="https://produtos-digitais.usereserva.com/imagens_simples/titulo_bemvindo.png" width="520" height="178" />
        </div>
    
        <div style="margin-top: 30px; margin-bottom: 30px;"></div>
    
        <div style="color: #fff; padding-left: 30px;">
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
    
      <div style="margin-top: 10px; margin-bottom: 10px;"></div>
    
      <div class="info-completa">
        <div class="py-20px" style="padding-left: 30px">
          <p class="semibold" style="font-size: 16px; font-weight: 600;">Ol?? Rodrigo!</p>
          <p style="font-size: 14px;"> 
            ??timas not??cias: o pagamento foi aprovado e agora voc?? ?? oficialmente assinante Simples&reg;! <br>
            Confira abaixo a pe??a escolhida e os detalhes sobre seus benef??cios.
          </p>
        </div>
    
        <img src="http://app.usereserva.com/imagens/occ/ops1/divisor.png" alt="borda" width="100%" height="1px" />
    
        <div style="margin-top: 30px; margin-bottom: 30px;"></div>
    
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
            <div style=" display: grid; width: 30%; margin-left: 20px;">
              <span style="margin-bottom: 10px; font-weight: 600 !important; font-size: 14px; height: 40px;">TIPO DA <br> ENTREGA</span>
              <span style="font-size: 14px; font-weight: 600 !important;">Receba em casa</span>
            </div>
    
            <div style=" display: grid; width: 35%;">
              <span style="margin-bottom: 10px; font-weight: 600 !important; font-size: 14px; height: 40px;">PREVIS??O DE <br> ENTREGA</span>
              <span class="" style="font-size: 12px; color: rgb(40, 122, 7);">Aprovado
                 <br />
              </span>
            </div>
          </div>
    
        </div>
      </div>
    
      <div class="info-completa">
        <div style=" display: grid; margin-top: 10px; margin-bottom: 10px; padding-top: 20px; padding-bottom: 20px;">
          <!-- Produto 1 -->
    
          <div style="display: flex; width: 100%; max-width: 100%; margin-top: 10px; margin-bottom: 10px;">
            <img src="http://app.usereserva.com/imagens/occ/ops1/img_exemplo.png" />
            <div style="width: 100%; max-width: 100%; margin-left: 5%;">
              <span style="font-size: 13px; font-weight: 700 !important; text-transform: uppercase;">Camiseta Simples Masc (Assinatura)</span>
              <div class="propriedades-produto my-20px" style="display: flex;">
                <div style="width: 25%; max-width: 25%;"><span style="font-size: 13px;"> <span style="font-size: 13px; font-weight: 600 !important;"> Cor </span>: Branca</span></div>
                <div style="width: 25%; max-width: 25%;"><span style="font-size: 13px;"> <span style="font-size: 13px; font-weight: 600 !important;"> Tamanho </span>: M</span></div>
                <div style="width: 25%; max-width: 25%;"><span style="font-size: 13px;"> <span style="font-size: 13px; font-weight: 600 !important;"> Quantidade </span>: 1</span></div>
                <div style="width: 25%; max-width: 25%;"><span style="font-size: 13px;"> <span style="font-size: 13px; font-weight: 600 !important;"> Valor </span>: R$299,88</span></div>
              </div>  
            </div>
          </div>
        </div>
      </div>
    
      <div style="margin-top: 10px; margin-bottom: 10px;"></div>
    
      <div class="cartao" style="height: fit-content !important; padding-bottom: 16px; min-width: 580px; background-color: #eae9e6; border-radius: 10px !important;">
        <div style="display: flex;">
          <div style="width: 20%; text-align: center;">
            <img src="http://app.usereserva.com/imagens/occ/ops1/icone-localizacao.png" class="icone" style="width: 22.44px; height: 33.62px; margin-top: 35px" />
          </div>
    
          <div style="margin-top: 15px; width: 100%">
            <p style="font-size: 14px; font-weight: 600;">ENDERE??O DE ENTREGA</p>
    
            <div class="endereco-telefone-espacamento">
              <div class="cartao-info-espacamento">
                <span style="font-size: 14px;">
                  Jardins - R. Bela Cintra 2149, Jardins - S??o Paulo/SP
                </span>
                <br>
              </div>
            </div>
          </div>
        </div>
      </div>
    
      <div style="margin-top: 10px; margin-bottom: 10px;"></div>
    
      <div class="cartao" style="height: fit-content !important; min-width: 580px; background-color: #eae9e6; border-radius: 10px !important;">
        <div style="display: flex;">
    
          <div style="width: 20%; text-align: center;">
            <img src="http://app.usereserva.com/imagens/occ/ops1/icone-cartao.png" class="icone" style="width:30.8px; height: 22px; margin-top: 40px" />
          </div>
    
          <div style="width: 100%; margin-top: 14px; margin-bottom: 14px; display: grid;">
            <div>
              <span
              style="margin-bottom: 7px; font-size: 14px; font-weight: 600;">
                PAGAMENTO
              </span>
            </div>
            
    
            <div 
              style="display: flex; flex-direction: row; margin-top: 10px;
              padding-bottom: 10px; border-bottom: #000 solid 1px; margin-right: 30px;"
            >
    
              <div style="margin-right: 20px; text-align: left;">
                
                <!--In??cio M??todo de pagamento 1-->
                <span style="font-size: 14px;">Boleto</span> <br>
                <!--Fim M??todo de pagamento-->
    
              </div>
    
              <div style="text-align: left;">
                <!--In??cio valor do m??todo 1-->
                <span style="font-size: 14px; font-weight: 600 !important;">R$299,00 (em 12 parcelas de R$24,99).</span> <br>
                <!--Fim valor do m??todo 1-->
    
              </div>
            </div>
    
            <div style="margin-top: 10px;">
              <span style="font-size: 14px !important;">Opa! Tudo certo por aqui.</span>
            </div>
          </div>
        </div>
      </div>
      
      
      
    
      <div style="margin-top: 30px; margin-bottom: 30px;"></div>
    
      <img src="http://app.usereserva.com/imagens/occ/ops1/divisor.png" alt="borda" width="100%" height="1px" />
      <div style="margin-top: 30px; margin-bottom: 30px;"></div>
    
      <div class="info-completa">
        <div class="py-20px" style="padding-left: 30px">
          <p class="semibold" style="font-size: 16px; font-weight: 600;">BENEF??CIOS</p>
          <p style="font-size: 14px;"> 
            Ser assinante Simples&reg; te d?? acesso a uma s??rie de benef??cios exclusivos. Confira todos e as regras para us??-los:
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
                  <div style="margin-left: 30px; width: 240px; font-size: 10px;">
                    <img src="https://produtos-digitais.usereserva.com/bem-vindo_new_images/info01.png">
                    <p>
                      Voc?? j?? pode usar seu desconto de 20% nas compras acima de R$ 399 (exceto nas pe??as em promo????o). 
                    </p>
                    <p>
                      Ele ?? v??lido enquanto voc?? for assinante Simples, por at?? 1 ano. Para us??-lo, basta usar o e-mail cadastrado em sua conta.
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
                <div style="margin-left: 20px; width: 200px; font-size: 10px;">
                  <img src="https://produtos-digitais.usereserva.com/bem-vindo_new_images/info02.png" width="200">
                  <p style=" text-align: right;">
                    O valor da sua assinatura volta pra voc??! Todo dia 1??, voc?? receber?? R$ 24,99 em cr??ditos na sua conta da Reserva. 
                  </p>
                  <p style=" text-align: right;">
                    Eles n??o s??o cumulativos e expiram a cada 30 dias. Voc?? poder?? usar seus cr??ditos em toda compra acima de R$ 85.
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
                <div style="margin-left: 10px; width: 250px; font-size: 10px;">
                  <img src="https://produtos-digitais.usereserva.com/bem-vindo_new_images/info03.png" width="200">
                  <p style="margin-top: 8px;">
                    Ao longo da assinatura, voc?? receber?? uma pe??a novinha a cada 5 meses. Mas relaxa, n??s entraremos em contato cerca de 30 dias antes de cada envio.
                  </p>
                  <p style="margin-top: 8px;">
                    Voc?? pode escolher uma pe??a de tamanho e at?? g??nero diferente da anterior. Aqui voc?? tem total liberdade! 
                  </p>
                  <p style="color: #7E7E7E; font-size: 9px; margin-bottom: 0;">
                    Aten????o: se n??o tivermos uma resposta sua at?? 20 dias antes do prazo para o envio, n??s enviaremos uma pe??a de mesmo tamanho e g??nero, mas de cor a ser escolhida por nossa equipe.
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
                <div style="margin-left: 10px; width: 230px; font-size: 10px;">
                  <img src="https://produtos-digitais.usereserva.com/bem-vindo_new_images/info04.png" width="200">
                  <p style="margin-top: 8px; text-align: right;">
                    Ao final da sua anuidade, voc?? receber?? mais R$ 75 em cr??ditos, caso devolva as suas 3 pe??as Simples&reg;. 
                  </p>
                  <p style="margin-top: 8px; text-align: right;">
                    S??o R$ 25 por pe??a devolvida e voc?? pode devolver s?? uma, duas ou todas, diretamente a uma loja Reserva. Seus cr??ditos estar??o dispon??veis em at?? 7 dias depois da devolu????o.
                  </p>
                  <p style="color: #7E7E7E; font-size: 9px; margin-bottom: 0; text-align: right;">
                    Mas aten????o: voc?? ter?? at?? 30 dias depois do fim da sua assinatura para devolver suas pe??as.
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
                    As pe??as devolvidas ser??o desfibradas, recicladas e transformadas em novas pe??as. Ou seja, elas n??o ir??o poluir o meio ambiente. Ficar com a consci??ncia tranquila ?? Simples&reg;
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
      <div style="margin-top: 30px; margin-bottom: 30px;"></div>
      <table>
        <tbody>
          <td>
            <img src="https://produtos-digitais.usereserva.com/bem-vindo_new_images/simples-lembrete.png">
          </td>
        </tbody>
      </table>
      <div style="margin-top: 30px; margin-bottom: 30px;"></div>
      <img src="http://app.usereserva.com/imagens/occ/ops1/divisor.png" alt="borda" width="100%" height="1px" />
    
      <div style="margin-top: 30px; margin-bottom: 30px;"></div>
    
      <div>
    
        <p style="text-align: center; font-size: 14px; margin-bottom: 20px;">
          Se quiser tirar alguma d??vida ou bater um papo, entre em contato conosco pelos canais abaixo:
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
            Seg a sex: 09h ??s 18h
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
            Seg a sex: 09h ??s 18h
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
            Hor??rios de atendimento:
          </p>
    
          <p style=" text-align: center; margin-bottom: 2px; color: #8A8C8E;"> 
            Seg a sex: 10h ??s 21h
          </p>
    
          <p style=" text-align: center; margin: 0 auto 12px; "> 
            <a href="https://whts.co/reserva" style="text-decoration: none; color: #13294B; font-weight: 500 !important;">
              <span style="text-decoration: underline; font-weight: 500 !important;">
                Loja mais pr??xima
              </span>
            </a>
          </p>
    
          <p style=" text-align: center; margin-bottom: 2px; color: #8A8C8E;"> 
            Seg a sex: 09h ??s 20h
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
    
        <div style="margin-top: 10px; margin-bottom: 10px;"></div>
    
        <p style="font-size: 14px !important; font-weight: 700 !important; text-align: center; margin: 25px auto;">Tudo de bom para voc??! Um abra??o.</p>
    
      </div>
    </body>
    
    <div style="min-width: 575px; height: 117px; background-color: #edebe8; left: 0; width: 100%; max-width: 580px !important;">
      
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
    
    </html>`
  }

const bemVindoGuia2Simples = {
  to: ['bruno.yuri.alves@gmail.com'],
    from: 'gruporeserva@usereserva.com',
    //${parametro para pegar o nome do usu??rio 'primeiro nome'}
    subject: '${<primeiro nome>}, use seus benef??cios!!',
    text: 'Confira as vantagens de ser assinante Simples:marca_registrada:',
    html: `--link das fotos: http://app.usereserva.com/imagens/occ/ops1/

    declare 
      @sql nvarchar(max),
      @html nvarchar(max),
      @cliente varchar(200),
      @email varchar(200)
    
    
    set @html ='<!DOCTYPE html>
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
    
          /* Dispositivos m??dios */
          @media (max-width: 991.98px) {}
    
          /* Dispositivos grandes */
          @media (max-width: 1199.98px) {}
    
          /* SE????O 2 */
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
      <!-- SE????O 1 -->
      <div style="height: fit-content !important; min-width: 580px; height: 100px; border-radius: 10px !important; padding-bottom: 10px; background: url('https://produtos-digitais.usereserva.com/imagens_simples/background.png') no-repeat !important">
        <div style="display: flex;">
          <div style="padding-left: 30px; margin-top: 30px;">
            <img src="https://produtos-digitais.usereserva.com/imagens_simples/logo-simples.png" />
          </div>
        </div>
    
        <div style="margin-top: 10px; margin-bottom: 10px;"></div>
    
        <img src="http://app.usereserva.com/imagens/occ/ops1/divisor-branco.png" alt="borda" width="100%" height="1px" />
    
        <div style="margin-top: 10px; margin-bottom: 10px;"></div>
    
        <div style="margin-top: 20px; padding-left: 30px;">
          <img src="https://produtos-digitais.usereserva.com/bem-vindo-guia-2/titulo-01.png" width="520" height="178" />
        </div>
    
        <div style="margin-top: 30px; margin-bottom: 30px;"></div>
    
      </div>
    
      <div style="margin-top: 10px; margin-bottom: 10px;"></div>
    
      <div class="info-completa">
        <div class="py-20px" style="padding-left: 30px">
          <p class="semibold" style="font-size: 16px; font-weight: 600;">Ol?? Pedro!</p>
          <p style="font-size: 14px;"> 
            Como assinante Simples&reg;, voc?? tem acesso a uma s??rie de benef??cios exclusivos. Confira todos e as regras para us??-los:
          </p>
        </div>
      </div>  
      <img src="http://app.usereserva.com/imagens/occ/ops1/divisor.png" alt="borda" width="100%" height="1px" />
      <div style="margin-top: 30px; margin-bottom: 30px;"></div>
      <!-- Infos -->
      <div style="background: #FCFCFC;">
        <div>
          <table style="margin: 0 auto; width: 100%; height: 60px;" >
            <tbody>
              <tr>
    
                <td>
                  <div style="margin-left: 30px; width: 240px; font-size: 10px;">
                    <img src="https://produtos-digitais.usereserva.com/bem-vindo-guia-2/info01.png">
                    <p>
                      Voc?? j?? pode usar seu desconto de 20% nas compras acima de R$ 399 (exceto nas pe??as em promo????o). 
                    </p>
                    <p>
                      Ele ?? v??lido enquanto voc?? for assinante Simples, por at?? 1 ano. Para us??-lo, basta usar o e-mail cadastrado em sua conta.
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
                <div style="margin-left: 20px; width: 200px; font-size: 10px;">
                  <img src="https://produtos-digitais.usereserva.com/bem-vindo-guia-2/info02.png" width="200">
                  <p style=" text-align: right;">
                    O valor da sua assinatura volta pra voc??! Todo dia 1??, voc?? receber?? R$ 24,99 em cr??ditos na sua conta da Reserva. 
                  </p>
                  <p style=" text-align: right;">
                    Eles n??o s??o cumulativos e expiram a cada 30 dias. Voc?? poder?? usar seus cr??ditos em toda compra acima de R$ 85.
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
                <div style="margin-left: 10px; width: 250px; font-size: 10px;">
                  <img src="https://produtos-digitais.usereserva.com/bem-vindo-guia-2/info03.png" width="200">
                  <p style="margin-top: 8px;">
                    Ao final da sua anuidade, voc?? receber?? mais R$ 75 em cr??ditos, caso devolva as suas 3 pe??as Simples&reg;. 
                  </p>
                  <p style="margin-top: 8px;">
                    S??o R$ 25 por pe??a devolvida e voc?? pode devolver s?? uma, duas ou todas, diretamente a uma loja Reserva. Seus cr??ditos estar??o dispon??veis em at?? 7 dias depois da devolu????o.
                  </p>
                  <p style="color: #7E7E7E; font-size: 9px; margin-bottom: 0;">
                    Mas aten????o: voc?? ter?? at?? 30 dias depois do fim da sua assinatura para devolver suas pe??as.
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
                <div style="margin-left: 10px; width: 230px; font-size: 10px;">
                  <img src="https://produtos-digitais.usereserva.com/bem-vindo-guia-2/info04.png" width="200">
                  <p style="margin-top: 8px; text-align: right;">
                    As pe??as devolvidas ser??o desfibradas, recicladas e transformadas em novas pe??as. Ou seja, elas n??o ir??o poluir o meio ambiente. Ficar com a consci??ncia tranquila ?? Simples&reg;
                  </p>
                </div>
              </td>
    
            </tr>
          </tbody>
        </table>
    
      </div>
      
      <img src="http://app.usereserva.com/imagens/occ/ops1/divisor.png" alt="borda" width="100%" height="1px" />
      <div style="margin-top: 30px; margin-bottom: 30px;"></div>
    
      <div style="width: 544px; margin-left: 27px;">
        <img src="https://produtos-digitais.usereserva.com/imagens_simples/logo_simples2.png" style="margin-left: 208px;">
        <p style="font-size: 15px; text-align: center;">
          Vamos sempre entrar em contato com voc??, seja para avisar sobre a defini????o das suas pr??ximas pe??as ou sobre seus benef??cios. Por isso, lembre-se de manter seu 
           <br> <span style="text-decoration: underline; font-size: 15px;">cadastro atualizado</span>.
        </p>
      </div>
    
      <div style="margin-top: 30px; margin-bottom: 30px;"></div>
      <img src="http://app.usereserva.com/imagens/occ/ops1/divisor.png" alt="borda" width="100%" height="1px" />
    
      <div style="margin-top: 30px; margin-bottom: 30px;"></div>
    
      <div>
    
        <p style="text-align: center; font-size: 14px; margin-bottom: 20px;">
          Se quiser tirar alguma d??vida ou bater um papo, entre em contato conosco pelos canais abaixo:
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
            Seg a sex: 09h ??s 18h
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
            Seg a sex: 09h ??s 18h
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
            Hor??rios de atendimento:
          </p>
    
          <p style=" text-align: center; margin-bottom: 2px; color: #8A8C8E;"> 
            Seg a sex: 10h ??s 21h
          </p>
    
          <p style=" text-align: center; margin: 0 auto 12px; "> 
            <a href="https://whts.co/reserva" style="text-decoration: none; color: #13294B; font-weight: 500 !important;">
              <span style="text-decoration: underline; font-weight: 500 !important;">
                Loja mais pr??xima
              </span>
            </a>
          </p>
    
          <p style=" text-align: center; margin-bottom: 2px; color: #8A8C8E;"> 
            Seg a sex: 09h ??s 20h
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
    
        <div style="margin-top: 10px; margin-bottom: 10px;"></div>
    
        <p style="font-size: 14px !important; font-weight: 700 !important; text-align: center; margin: 25px auto;">Tudo de bom para voc??! Um abra??o.</p>
    
      </div>
    </body>
    
    <div style="min-width: 575px; height: 117px; background-color: #edebe8; left: 0; width: 100%; max-width: 580px !important;">
      
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
    
    </html>'
    
    select @SQL = 'EXEC msdb.dbo.sp_send_dbmail ' +
        
          '@profile_name = ''AgradecimentoReserva'', @recipients = '' clarapfarias@gmail.com'', ' +            
                '@body = ''' + @HTML + ''', ' +
                '@query = '''', ' +
                '@subject = ''Ops! Tivemos um problema'', ' +
                '@attach_query_result_as_file = 0, ' +
                '@body_format = ''HTML'', ' +
                '@query_result_header = 0, ' +
                '@importance = ''Normal'';'
     
     begin
          exec (@SQL)
        end 
    
    `,
};

const cashbackSimples = {
  to: ['bruno.yuri.alves@gmail.com'],
    from: 'gruporeserva@usereserva.com',
    subject: 'cashback',
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
    
          /* IDs */
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
    
          /* Dispositivos m???dios */
          @media (max-width: 991.98px) {}
    
          /* Dispositivos grandes */
          @media (max-width: 1199.98px) {}
    
          /* SE??????O 2 */
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
      <!-- SE??????O 1 -->
      <div style="height: fit-content !important; min-width: 580px; height: 100px; border-radius: 10px !important; padding-bottom: 10px; background: url('https://produtos-digitais.usereserva.com/imagens_simples/background.png') no-repeat !important">
        <div style="display: flex;">
          <div style="padding-left: 30px; margin-top: 30px;">
            <img src="https://produtos-digitais.usereserva.com/imagens_simples/logo-simples.png"/>
          </div>
        </div>
    
        <div style="margin-top: 30px; margin-bottom: 30px;"></div>
    
    
        <img src="http://app.usereserva.com/imagens/occ/ops1/divisor-branco.png" alt="borda" width="100%" height="1px" />
    
        <div style="margin-top: 30px; margin-bottom: 30px;"></div>
    
        <div  style="margin-bottom: 30px; padding-left: 30px;">
          <img src="https://produtos-digitais.usereserva.com/imagens_simples/titulo-cash.png" />
        </div>
      </div>
    
      <div style="margin-top: 10px; margin-bottom: 10px;"></div>
    
      <div class="info-completa">
        <div class="py-20px" style="padding-left: 30px">
          <p class="semibold" style="font-size: 16px; font-weight: 600;">Ol?? Rodrigo!</p>
          <p style="font-size: 14px;"> 
            Caiu <span style="font-weight: 600;">R$ 24,99</span> na sua conta! &#x1F973;
          </p>
          <p style="font-size: 14px;">
            Este cr??dito ?? parte do seu cashback por ser um assinante Simples&reg;.
          </p>
          <p style="font-size: 14px;">
            Ele ir?? aparecer na etapa ???Pagamento??? ou ser?? adicionado automaticamente no fechamento da compra, sendo v??lido em Reserva ou Reserva Mini em compras acima de R$ 85.
          </p>
          <p style="font-size: 14px;">
            Mas aten????o: o cr??dito n??o acumula e ir?? expirar daqui a 30 dias. Ou seja, corra para us??-lo antes que voc?? se esque??a. &#x1F609;
          </p>
        </div>
    
        <div class="item-sugestao" 
          style="
            display: grid;
            max-width: 208px;
            height: fit-content !important;
            margin-left: 185px;
          "
        >
          <a class="semibold" 
          style="
            height:  40px !important;;
            background-color: #333333;
            border-radius: 4px;
            width: 195px;
            font-weight: bold;
            text-decoration: none;
            color: black;
          "
            href="https://status.ondeestameupedido.com/tracking/11011/E1592355">
    
            <table style="margin: 0 auto; height: 40px;">
              <tbody>
                <td>
                  <p class="semibold" style="font-size: 12px !important; width: fit-content !important; margin: 0; color: #fff;">
                    USAR CASHBACK
                  </p>
                </td>
              </tbody>
            </table>'
          </a>
        </div>
    
        
        <div class="espacamento-maior"></div>
    
        <img src="http://app.usereserva.com/imagens/occ/ops1/divisor.png" alt="borda" width="100%" height="1px" />
    
      </div>
    
    
      <div class="espacamento-maior"></div>
      <div>
    
        <p style="text-align: center; font-size: 14px; margin-bottom: 20px;">
          Se quiser tirar alguma d??vida ou bater um papo, entre em contato conosco pelos canais abaixo:
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
            Seg a sex: 09h ??s 18h
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
            Seg a sex: 09h ??s 18h
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
            Hor??rios de atendimento:
          </p>
    
          <p style=" text-align: center; margin-bottom: 2px; color: #8A8C8E;"> 
            Seg a sex: 10h ??s 21h
          </p>
    
          <p style=" text-align: center; margin: 0 auto 12px; "> 
            <a href="https://whts.co/reserva" style="text-decoration: none; color: #13294B; font-weight: 500 !important;">
              <span style="text-decoration: underline; font-weight: 500 !important;">
                Loja mais pr??xima
              </span>
            </a>
          </p>
    
          <p style=" text-align: center; margin-bottom: 2px; color: #8A8C8E;"> 
            Seg a sex: 09h ??s 20h
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
    
        <div style="margin-top: 10px; margin-bottom: 10px;"></div>
    
        <p style="font-size: 14px !important; font-weight: 700 !important; text-align: center; margin: 25px auto;">Tudo de bom para voc??! Um abra??o.</p>
    
      </div>
    </body>
    
    <div style="min-width: 575px; height: 117px; background-color: #edebe8; left: 0; width: 100%; max-width: 580px !important;">
      
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
    
    </html>`
}

const guiaPosAssinaturaSimples = {
  to: ['bruno.yuri.alves@gmail.com'],
    from: 'gruporeserva@usereserva.com',
    subject: '${<primeiro nome>}, agora voc?? ?? assinante Simples',
    text: 'E tem acesso a diversos benef??cios. Confira!',
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
    
          /* Dispositivos m??dios */
          @media (max-width: 991.98px) {}
    
          /* Dispositivos grandes */
          @media (max-width: 1199.98px) {}
    
          /* SE????O 2 */
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
      <!-- SE????O 1 -->
      <div style="height: fit-content !important; min-width: 580px; height: 100px; border-radius: 10px !important; padding-bottom: 10px; background: url('https://produtos-digitais.usereserva.com/imagens_simples/background.png') no-repeat !important">
        <div style="display: flex;">
          <div style="padding-left: 30px; margin-top: 30px;">
            <img src="https://produtos-digitais.usereserva.com/imagens_simples/logo-simples.png" />
          </div>
        </div>
    
        <div style="margin-top: 10px; margin-bottom: 10px;"></div>
    
        <img src="http://app.usereserva.com/imagens/occ/ops1/divisor-branco.png" alt="borda" width="100%" height="1px" />
    
        <div style="margin-top: 10px; margin-bottom: 10px;"></div>
    
        <div style="margin-top: 20px; padding-left: 30px;">
          <img src="https://produtos-digitais.usereserva.com/bem-vindo_new_images/boas-vindas3.png" width="520" height="178" />
        </div>
    
        <div style="margin-top: 30px; margin-bottom: 30px;"></div>
    
      </div>
    
      <div style="margin-top: 10px; margin-bottom: 10px;"></div>
    
      <div class="info-completa">
        <div class="py-20px" style="padding-left: 30px">
          <p class="semibold" style="font-size: 16px; font-weight: 600;">Ol?? Pedro!</p>
          <p style="font-size: 14px;"> 
            Como assinante Simples&reg;, voc?? tem acesso a uma s??rie de benef??cios exclusivos. Confira todos e as regras para us??-los:
          </p>
        </div>
      </div>  
      <img src="http://app.usereserva.com/imagens/occ/ops1/divisor.png" alt="borda" width="100%" height="1px" />
      <div style="margin-top: 30px; margin-bottom: 30px;"></div>
      <!-- Infos -->
      <div style="background: #FCFCFC;">
        <div>
          <table style="margin: 0 auto; width: 100%; height: 60px;" >
            <tbody>
              <tr>
    
                <td>
                  <div style="margin-left: 30px; width: 240px; font-size: 10px;">
                    <img src="https://produtos-digitais.usereserva.com/bem-vindo-guia-2/info01.png">
                    <p>
                      Voc?? j?? pode usar seu desconto de 20% nas compras acima de R$ 399 (exceto nas pe??as em promo????o). 
                    </p>
                    <p>
                      Ele ?? v??lido enquanto voc?? for assinante Simples, por at?? 1 ano. Para us??-lo, basta usar o e-mail cadastrado em sua conta.
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
                <div style="margin-left: 20px; width: 200px; font-size: 10px;">
                  <img src="https://produtos-digitais.usereserva.com/bem-vindo-guia-2/info02.png" width="200">
                  <p style=" text-align: right;">
                    O valor da sua assinatura volta pra voc??! Todo dia 1??, voc?? receber?? R$ 24,99 em cr??ditos na sua conta da Reserva. 
                  </p>
                  <p style=" text-align: right;">
                    Eles n??o s??o cumulativos e expiram a cada 30 dias. Voc?? poder?? usar seus cr??ditos em toda compra acima de R$ 85.
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
                <div style="margin-left: 10px; width: 250px; font-size: 10px;">
                  <img src="https://produtos-digitais.usereserva.com/bem-vindo-guia-2/info03.png" width="200">
                  <p style="margin-top: 8px;">
                    Ao final da sua anuidade, voc?? receber?? mais R$ 75 em cr??ditos, caso devolva as suas 3 pe??as Simples&reg;. 
                  </p>
                  <p style="margin-top: 8px;">
                    S??o R$ 25 por pe??a devolvida e voc?? pode devolver s?? uma, duas ou todas, diretamente a uma loja Reserva. Seus cr??ditos estar??o dispon??veis em at?? 7 dias depois da devolu????o.
                  </p>
                  <p style="color: #7E7E7E; font-size: 9px; margin-bottom: 0;">
                    Mas aten????o: voc?? ter?? at?? 30 dias depois do fim da sua assinatura para devolver suas pe??as.
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
                <div style="margin-left: 10px; width: 230px; font-size: 10px;">
                  <img src="https://produtos-digitais.usereserva.com/bem-vindo-guia-2/info04.png" width="200">
                  <p style="margin-top: 8px; text-align: right;">
                    As pe??as devolvidas ser??o desfibradas, recicladas e transformadas em novas pe??as. Ou seja, elas n??o ir??o poluir o meio ambiente. Ficar com a consci??ncia tranquila ?? Simples&reg;
                  </p>
                </div>
              </td>
    
            </tr>
          </tbody>
        </table>
    
      </div>
      
      <img src="http://app.usereserva.com/imagens/occ/ops1/divisor.png" alt="borda" width="100%" height="1px" />
      <div style="margin-top: 30px; margin-bottom: 30px;"></div>
    
      <div style="width: 544px; margin-left: 27px;">
        <img src="https://produtos-digitais.usereserva.com/imagens_simples/logo_simples2.png" style="margin-left: 208px;">
        <p style="font-size: 15px; text-align: center;">
          Vamos sempre entrar em contato com voc??, seja para avisar sobre a defini????o das suas pr??ximas pe??as ou sobre seus benef??cios. Por isso, lembre-se de manter seu 
           <br> <span style="text-decoration: underline; font-size: 15px;">cadastro atualizado</span>.
        </p>
      </div>
    
      <div style="margin-top: 30px; margin-bottom: 30px;"></div>
      <img src="http://app.usereserva.com/imagens/occ/ops1/divisor.png" alt="borda" width="100%" height="1px" />
    
      <div style="margin-top: 30px; margin-bottom: 30px;"></div>
    
      <div>
    
        <p style="text-align: center; font-size: 14px; margin-bottom: 20px;">
          Se quiser tirar alguma d??vida ou bater um papo, entre em contato conosco pelos canais abaixo:
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
            Seg a sex: 09h ??s 18h
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
            Seg a sex: 09h ??s 18h
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
            Hor??rios de atendimento:
          </p>
    
          <p style=" text-align: center; margin-bottom: 2px; color: #8A8C8E;"> 
            Seg a sex: 10h ??s 21h
          </p>
    
          <p style=" text-align: center; margin: 0 auto 12px; "> 
            <a href="https://whts.co/reserva" style="text-decoration: none; color: #13294B; font-weight: 500 !important;">
              <span style="text-decoration: underline; font-weight: 500 !important;">
                Loja mais pr??xima
              </span>
            </a>
          </p>
    
          <p style=" text-align: center; margin-bottom: 2px; color: #8A8C8E;"> 
            Seg a sex: 09h ??s 20h
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
    
        <div style="margin-top: 10px; margin-bottom: 10px;"></div>
    
        <p style="font-size: 14px !important; font-weight: 700 !important; text-align: center; margin: 25px auto;">Tudo de bom para voc??! Um abra??o.</p>
    
      </div>
    </body>
    
    <div style="min-width: 575px; height: 117px; background-color: #edebe8; left: 0; width: 100%; max-width: 580px !important;">
      
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
    
    </html>`
}

sgMail
    .send(//bemVindoApSimples,
       //bemVindoGuia2Simples, 
       //cashbackSimples, 
       //guiaPosAssinaturaSimples
       )
    .then((response) => console.log('Email sent...'))
    .catch((error) => console.log(error.message));