/* ============================================================
   CONFIG
   ============================================================ */
const CLINIC = {
  name: "Primecare Chiropractic",
  address: "600 Main Street",
  cityStateZip: "Malden, MA 02148",
  phone: "(857) 410-1800",
  email: "info@primecaremalden.com",
  submitTo: "frontdesk@primecare.clinic"
};
const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbx_KqBcnLDBMZZ0oaLl-cOcaK3CsIIp7QVho-zEtbY-lUCb9gAtyb2eDzc2rLooallUhg/exec";

/* ============================================================
   LANGUAGE
   ============================================================ */
const LI = { en: 0, pt: 1, es: 2 };
let LANG = "en";
function L(){ return LI[LANG]; }
// STR[key] = [English, Português (Brasil), Español]
const STR = {
  headerSub: ["New Patient / MVA Intake","Novo Paciente / Avaliação de Acidente","Paciente Nuevo / Evaluación de Accidente"],
  introTitle: ["Welcome","Bem-vindo(a)","Bienvenido(a)"],
  introBody: [
    "Please complete this intake before your first visit. It covers your accident details, medical history, and current symptoms. It takes about 10–15 minutes. Your information stays on this device until you submit.",
    "Por favor, preencha este formulário antes da sua primeira consulta. Ele abrange os detalhes do acidente, histórico médico e sintomas atuais. Leva cerca de 10 a 15 minutos. Suas informações ficam neste dispositivo até você enviar.",
    "Por favor complete este formulario antes de su primera visita. Cubre los detalles del accidente, historial médico y síntomas actuales. Toma entre 10 y 15 minutos. Su información permanece en este dispositivo hasta que la envíe."
  ],
  start: ["Start Intake","Iniciar Formulário","Iniciar Formulario"],
  back: ["Back","Voltar","Atrás"],
  next: ["Next","Próximo","Siguiente"],
  submit: ["Submit Intake","Enviar Formulário","Enviar Formulario"],
  submitting: ["Submitting…","Enviando…","Enviando…"],
  stepOf: ["Step {n} of 8","Etapa {n} de 8","Paso {n} de 8"],

  // Step 1
  s1_title: ["Your Information","Suas Informações","Su Información"],
  s1_sub: ["Basic contact and registration details.","Dados básicos de contato e cadastro.","Datos básicos de contacto y registro."],
  title_lbl: ["Title *","Tratamento *","Tratamiento *"],
  title_mr: ["Mr.","Sr.","Sr."],
  title_mrs: ["Mrs.","Sra.","Sra."],
  title_ms: ["Ms.","Sra./Srta.","Srta."],
  firstName: ["First Name *","Primeiro Nome *","Primer Nombre *"],
  lastName: ["Last Name *","Sobrenome *","Apellido *"],
  dob: ["Date of Birth *","Data de Nascimento *","Fecha de Nacimiento *"],
  todayDate: ["Today's Date","Data de Hoje","Fecha de Hoy"],
  address: ["Address *","Endereço *","Dirección *"],
  apt: ["Apt #","Apto #","Apto #"],
  city: ["City *","Cidade *","Ciudad *"],
  state: ["State","Estado","Estado"],
  zip: ["Zip","CEP","Código Postal"],
  cell: ["Cell Phone *","Celular *","Celular *"],
  email: ["Email *","E-mail *","Correo Electrónico *"],
  language: ["Preferred Language","Idioma Preferido","Idioma Preferido"],
  interpreterNeed: ["Need an Interpreter?","Precisa de Intérprete?","¿Necesita Intérprete?"],
  yes: ["Yes","Sim","Sí"],
  no: ["No","Não","No"],
  consentContactBox: [
    "I authorize Primecare Chiropractic to contact me through email, text message, WhatsApp, or other electronic media.",
    "Autorizo a Primecare Chiropractic a entrar em contato comigo por e-mail, mensagem de texto, WhatsApp ou outra mídia eletrônica.",
    "Autorizo a Primecare Chiropractic a contactarme por correo electrónico, mensaje de texto, WhatsApp u otro medio electrónico."
  ],
  consentContactCheck: [
    "I agree to be contacted electronically as described above. *",
    "Concordo em ser contatado(a) eletronicamente conforme descrito acima. *",
    "Acepto ser contactado(a) electrónicamente como se describe arriba. *"
  ],
  sigTitle: ["Your Signature *","Sua Assinatura *","Su Firma *"],
  sigHint: ["Sign with your finger below. This signature will appear on every page of your intake.","Assine com o dedo abaixo. Esta assinatura aparecerá em todas as páginas do seu formulário.","Firme con su dedo abajo. Esta firma aparecerá en cada página de su formulario."],
  sigPlaceholder: ["Sign here","Assine aqui","Firme aquí"],
  sigClear: ["Clear","Limpar","Borrar"],
  sigMissing: ["Please sign above before continuing.","Assine acima antes de continuar.","Firme arriba antes de continuar."],
  signedBy: ["Signed by","Assinado por","Firmado por"],

  // Step 2
  s2_title: ["Accident Details","Detalhes do Acidente","Detalles del Accidente"],
  s2_sub: ["Tell us about the motor vehicle accident.","Conte-nos sobre o acidente de carro.","Cuéntenos sobre el accidente automovilístico."],
  accidentDate: ["Date of Accident *","Data do Acidente *","Fecha del Accidente *"],
  accidentTime: ["Time of Accident","Hora do Acidente","Hora del Accidente"],
  accidentStreet: ["Street Where Accident Occurred","Rua onde Ocorreu o Acidente","Calle donde Ocurrió el Accidente"],
  accidentCity: ["City of Accident","Cidade do Acidente","Ciudad del Accidente"],
  licensePlate: ["License Plate (vehicle you were in)","Placa (do veículo em que você estava)","Placa (del vehículo en que usted iba)"],
  autoInsurance: ["Auto Insurance (vehicle you were in)","Seguro do Veículo (em que você estava)","Seguro del Vehículo (en que usted iba)"],
  injuriesDescribe: ["Describe Your Injuries","Descreva suas Lesões","Describa sus Lesiones"],
  ynQs: ["Yes/No Questions","Perguntas Sim/Não","Preguntas Sí/No"],
  q_ambulance: ["Ambulance called?","Ambulância foi chamada?","¿Se llamó una ambulancia?"],
  q_erHospital: ["Went to ER/Hospital?","Foi ao Pronto-Socorro/Hospital?","¿Fue a la Sala de Emergencias/Hospital?"],
  q_masshealth: ["Do you have MassHealth?","Você tem MassHealth?","¿Tiene MassHealth?"],
  q_masshealthCard: ["Do you have MassHealth Card?","Você tem o Cartão do MassHealth?","¿Tiene la Tarjeta de MassHealth?"],
  masshealthId: ["MassHealth ID Number (if applicable)","Número de ID do MassHealth (se aplicável)","Número de ID de MassHealth (si aplica)"],
  q_privateInsurance: ["Do you have Private Health Insurance?","Você tem Seguro de Saúde Particular?","¿Tiene Seguro Médico Privado?"],
  q_healthInsCard: ["Do you have your Health Insurance Card?","Você tem seu Cartão do Seguro de Saúde?","¿Tiene su Tarjeta de Seguro Médico?"],
  q_policeReport: ["Was a Police Report filed?","Foi feito um Boletim de Ocorrência?","¿Se presentó un Informe Policial?"],
  bodyshopWhich: ["Is your car in a bodyshop? Which one?","Seu carro está em uma oficina? Qual?","¿Su auto está en un taller? ¿Cuál?"],
  rideshareWhich: ["Rideshare app (Uber/Lyft/Instacart)? Which?","Aplicativo de transporte (Uber/Lyft)? Qual?","¿Aplicación de transporte (Uber/Lyft)? ¿Cuál?"],
  carDamageTitle: ["Where was your vehicle damaged?","Onde seu veículo foi danificado?","¿Dónde fue dañado su vehículo?"],
  carDamageHint: ["Tap on the picture of the car everywhere it was hit.","Toque na imagem do carro em todos os pontos que foram atingidos.","Toque en la imagen del auto en todos los puntos que fueron golpeados."],
  clearMarks: ["Clear marks","Limpar marcas","Borrar marcas"],
  undoMark: ["Undo last","Desfazer último","Deshacer último"],
  accidentDescription: ["Accident Description","Descrição do Acidente","Descripción del Accidente"],
  accidentDescriptionPh: ["Briefly describe what happened","Descreva brevemente o que aconteceu","Describa brevemente lo que sucedió"],
  insuranceInfo: ["Insurance / Claim Info","Informações do Seguro / Sinistro","Información del Seguro / Reclamo"],
  insuranceHint: ["If known — front desk can help complete this","Se souber — a recepção pode ajudar a preencher","Si lo sabe — la recepción puede ayudar a completarlo"],
  pipClaimNumber: ["PIP Claim Number","Número do Sinistro PIP","Número de Reclamo PIP"],
  policyNumber: ["Policy Number","Número da Apólice","Número de Póliza"],
  policyHolderName: ["Policy Holder Name","Nome do Titular da Apólice","Nombre del Titular de la Póliza"],
  policyHolderDob: ["Policy Holder Birth Date","Data de Nascimento do Titular","Fecha de Nacimiento del Titular"],

  // Step 3
  s3_title: ["Where Does It Hurt?","Onde Dói?","¿Dónde le Duele?"],
  s3_sub: ["Tap the diagram everywhere you currently feel pain.","Toque no diagrama em todos os locais onde sente dor atualmente.","Toque el diagrama en todos los lugares donde sienta dolor actualmente."],
  painAreasTitle: ["Areas of Pain","Áreas de Dor","Áreas de Dolor"],
  painIntensityTitle: ["Overall Pain Intensity","Intensidade Geral da Dor","Intensidad General del Dolor"],
  painIntensityHint: ["0 = No pain, 10 = Worst pain possible","0 = Sem dor, 10 = Pior dor possível","0 = Sin dolor, 10 = Peor dolor posible"],
  noPain: ["No pain","Sem dor","Sin dolor"],
  worstPain: ["Worst possible","Pior possível","Peor posible"],

  // Step 4
  s4_title: ["Medical History","Histórico Médico","Historial Médico"],
  s4_sub: ["This helps our providers treat you safely.","Isso ajuda nossos profissionais a tratá-lo(a) com segurança.","Esto ayuda a nuestros proveedores a tratarlo(a) de forma segura."],
  mh_q1: ["1. Have you had any surgery?","1. Você já fez alguma cirurgia?","1. ¿Ha tenido alguna cirugía?"],
  mh_q1_hint: ["e.g. C-section, knee, back","ex: cesárea, joelho, coluna","ej: cesárea, rodilla, espalda"],
  what: ["What?","O quê?","¿Qué?"],
  when: ["When?","Quando?","¿Cuándo?"],
  mh_q2: ["2. Do you take medication daily?","2. Você toma alguma medicação diariamente?","2. ¿Toma algún medicamento a diario?"],
  mh_q2_hint: ["e.g. blood pressure, diabetes, anxiety","ex: pressão alta, diabetes, ansiedade","ej: presión arterial, diabetes, ansiedad"],
  whoPrescribed: ["Who prescribed?","Quem prescreveu?","¿Quién lo recetó?"],
  mh_q3: ["3. Do you have any health problems?","3. Você tem algum problema de saúde?","3. ¿Tiene algún problema de salud?"],
  mh_q3_hint: ["e.g. heart, pain, anxiety, hospital visits","ex: coração, dor, ansiedade, idas ao hospital","ej: corazón, dolor, ansiedad, visitas al hospital"],
  sinceWhen: ["Since when?","Desde quando?","¿Desde cuándo?"],
  mh_q4: ["4. Any previous accident?","4. Algum acidente anterior?","4. ¿Algún accidente anterior?"],
  mh_q4_hint: ["e.g. car, fall, work","ex: carro, queda, trabalho","ej: auto, caída, trabajo"],
  treatment: ["Treatment?","Tratamento?","¿Tratamiento?"],
  mh_q5: ["5. Medical history (you or family)","5. Histórico médico (seu ou da família)","5. Historial médico (suyo o familiar)"],
  mh_q5_hint: ["Select all that apply","Selecione todos que se aplicam","Seleccione todos los que correspondan"],
  mh_q6: ["6. VERY IMPORTANT — check any that apply to you","6. MUITO IMPORTANTE — marque o que se aplica a você","6. MUY IMPORTANTE — marque lo que le corresponda"],

  // Step 5
  s5_title: ["MVA Chief Complaints","Queixas Principais do Acidente","Quejas Principales del Accidente"],
  s5_sub: ["Details about how the accident happened.","Detalhes sobre como o acidente aconteceu.","Detalles sobre cómo ocurrió el accidente."],
  q1_cause: ["1. What was the cause of your injury?","1. Qual foi a causa da sua lesão?","1. ¿Cuál fue la causa de su lesión?"],
  q2_dateInjury: ["2. Date of Injury","2. Data da Lesão","2. Fecha de la Lesión"],
  q3_position: ["3. Position in vehicle?","3. Posição no veículo?","3. ¿Posición en el vehículo?"],
  q4_restrained: ["4. Restrained (seatbelt)?","4. Usava cinto de segurança?","4. ¿Usaba cinturón de seguridad?"],
  q5_airbag: ["5. Airbag deploy?","5. O airbag foi acionado?","5. ¿Se activó la bolsa de aire?"],
  q6_headrest: ["6. Head hit head rest?","6. A cabeça bateu no encosto de cabeça?","6. ¿La cabeza golpeó el apoyacabezas?"],
  q7_headImpact: ["7. Patient's head position during impact?","7. Posição da cabeça do paciente durante o impacto?","7. ¿Posición de la cabeza del paciente durante el impacto?"],
  q8_contactInterior: ["8. Did you contact the interior of the vehicle?","8. Você bateu em alguma parte interna do veículo?","8. ¿Golpeó alguna parte interior del vehículo?"],
  q9_bodyPart: ["9. What part of your body?","9. Qual parte do corpo?","9. ¿Qué parte del cuerpo?"],
  q10_vehiclePart: ["10. What part of the vehicle?","10. Qual parte do veículo?","10. ¿Qué parte del vehículo?"],
  q11_headInjury: ["11. Received head injury? (bruise, concussion)","11. Sofreu lesão na cabeça? (hematoma, concussão)","11. ¿Sufrió una lesión en la cabeza? (moretón, conmoción)"],
  q12_loc: ["12. Lose consciousness?","12. Perdeu a consciência?","12. ¿Perdió el conocimiento?"],
  q13_police: ["13. Police at the scene?","13. Polícia esteve no local?","13. ¿La policía estuvo en el lugar?"],
  q14_report: ["14. Accident report?","14. Boletim de ocorrência?","14. ¿Informe del accidente?"],
  q15_ems: ["15. EMS at the scene?","15. Socorro médico (SAMU) esteve no local?","15. ¿Los paramédicos estuvieron en el lugar?"],
  q16_transportER: ["16. Transport to ER?","16. Transporte ao Pronto-Socorro?","16. ¿Transporte a la Sala de Emergencias?"],
  q17_imaging: ["17. Any imaging done?","17. Algum exame de imagem foi feito?","17. ¿Se realizó algún estudio de imagen?"],
  selectAll: ["Select all that apply","Selecione todos que se aplicam","Seleccione todos los que correspondan"],
  q18_imagingResult: ["18. If so, what was the result?","18. Se sim, qual foi o resultado?","18. Si es así, ¿cuál fue el resultado?"],

  // Step 6
  s6_title: ["Your Symptoms","Seus Sintomas","Sus Síntomas"],
  s6_sub: ["Describe your main complaint(s) in detail.","Descreva sua(s) principal(is) queixa(s) em detalhes.","Describa su(s) queja(s) principal(es) en detalle."],
  complaintN: ["Complaint #{n}","Queixa nº {n}","Queja n.º {n}"],
  remove: ["Remove","Remover","Eliminar"],
  complaintLocation: ["Where is this pain located?","Onde essa dor está localizada?","¿Dónde se localiza este dolor?"],
  complaintLocationPh: ["e.g. neck, left shoulder, low back","ex: pescoço, ombro esquerdo, lombar","ej: cuello, hombro izquierdo, espalda baja"],
  describeIt: ["How would you describe it?","Como você descreveria?","¿Cómo lo describiría?"],
  frequency: ["Frequency","Frequência","Frecuencia"],
  painLevel: ["Pain level (0-10)","Nível de dor (0-10)","Nivel de dolor (0-10)"],
  doesRadiate: ["Does it radiate?","A dor se espalha (irradia)?","¿Se irradia?"],
  whenFeel: ["When do you feel it most?","Quando você mais sente?","¿Cuándo lo siente más?"],
  changedSince: ["Since the accident, has it changed?","Desde o acidente, isso mudou?","Desde el accidente, ¿ha cambiado?"],
  whatHelps: ["What helps?","O que ajuda?","¿Qué ayuda?"],
  whatWorsens: ["What makes it worse?","O que piora?","¿Qué lo empeora?"],
  relatedPrevious: ["Related to any previous episode?","Relacionado a algum episódio anterior?","¿Relacionado con algún episodio anterior?"],
  addComplaint: ["+ Add another complaint area","+ Adicionar outra queixa","+ Agregar otra queja"],
  sinceAccidentTitle: ["Since the Accident","Desde o Acidente","Desde el Accidente"],
  treatmentSinceTitle: ["Received any treatment since accident?","Recebeu algum tratamento desde o acidente?","¿Recibió algún tratamiento desde el accidente?"],
  workSituationTitle: ["Work situation?","Situação de trabalho?","¿Situación laboral?"],
  socialHabitsTitle: ["Social habits?","Hábitos sociais?","¿Hábitos sociales?"],
  exerciseChangeTitle: ["Changes in exercise habits?","Mudanças nos hábitos de exercício?","¿Cambios en los hábitos de ejercicio?"],
  dietChangeTitle: ["Changes in diet/nutrition?","Mudanças na dieta/alimentação?","¿Cambios en la dieta/alimentación?"],

  // Step 7
  s7_title: ["Review of Systems","Revisão de Sistemas","Revisión de Sistemas"],
  s7_sub: ["For each item, mark Yes or No, and whether it started/changed after the accident.","Para cada item, marque Sim ou Não, e se começou/mudou após o acidente.","Para cada elemento, marque Sí o No, y si comenzó/cambió después del accidente."],
  afterAccident: ["After accident?","Após o acidente?","¿Después del accidente?"],

  // Step 8
  s8_title: ["Review & Sign","Revisar e Assinar","Revisar y Firmar"],
  s8_sub: ["Please review your answers below before submitting.","Revise suas respostas abaixo antes de enviar.","Revise sus respuestas a continuación antes de enviar."],
  finalConsentBox: [
    "I certify that the information provided in this intake is accurate and complete to the best of my knowledge, and I authorize Primecare Chiropractic to use it for my evaluation and treatment.",
    "Certifico que as informações fornecidas neste formulário são precisas e completas, e autorizo a Primecare Chiropractic a usá-las para minha avaliação e tratamento.",
    "Certifico que la información proporcionada en este formulario es precisa y completa, y autorizo a Primecare Chiropractic a usarla para mi evaluación y tratamiento."
  ],
  finalConsentCheck: [
    "I confirm the information given is accurate and I want to submit this intake with my signature above. *",
    "Confirmo que as informações fornecidas são precisas e desejo enviar este formulário com minha assinatura acima. *",
    "Confirmo que la información proporcionada es precisa y deseo enviar este formulario con mi firma de arriba. *"
  ],

  // done screen
  doneTitle: ["Thank You!","Obrigado(a)!","¡Gracias!"],
  doneBody: [
    "Your intake has been received. Two PDFs were generated: your completed intake form, and a starter clinical note for your provider.",
    "Seu formulário foi recebido. Dois PDFs foram gerados: seu formulário completo e uma nota clínica inicial para seu profissional de saúde.",
    "Se recibió su formulario. Se generaron dos PDF: su formulario completo y una nota clínica inicial para su proveedor."
  ],
  sendingStatus: ["Sending to the front desk…","Enviando para a recepção…","Enviando a la recepción…"],
  sentOk: ["Sent to the front desk successfully.","Enviado com sucesso para a recepção.","Enviado con éxito a la recepción."],
  sentFail: ["We couldn't confirm delivery — please also use the download buttons below as a backup.","Não foi possível confirmar o envio — use também os botões de download abaixo.","No pudimos confirmar el envío — use también los botones de descarga abajo."],
  dlIntake: ["Download Intake PDF","Baixar PDF do Formulário","Descargar PDF del Formulario"],
  dlNote: ["Download Doctor's Note PDF","Baixar PDF da Nota Médica","Descargar PDF de la Nota Médica"],

  errSignAndCheck: [
    "Please sign at the top of this page and check the confirmation box.",
    "Assine no topo desta página e marque a caixa de confirmação.",
    "Firme en la parte superior de esta página y marque la casilla de confirmación."
  ]
};
function tr(key){ const row = STR[key]; return row ? row[L()] : key; }
function trFmt(key, vars){
  let s = tr(key);
  Object.keys(vars||{}).forEach(k=>{ s = s.replace("{"+k+"}", vars[k]); });
  return s;
}

/* ============================================================
   TRANSLATED OPTION LISTS  (canonical English value stays index 0)
   ============================================================ */
function TRI(en,pt,es){ return {en,pt,es,val:en}; }
function opt(list){ return list.map(o=>TRI(o[0],o[1],o[2])); }

const YN_T = opt([["Yes","Sim","Sí"],["No","Não","No"]]);
const YNDNA_T = opt([["Yes","Sim","Sí"],["No","Não","No"],["Doesn't remember","Não lembra","No recuerda"],["N/A","N/A","N/A"]]);
const YNDN_T = opt([["Yes","Sim","Sí"],["No","Não","No"],["Doesn't remember","Não lembra","No recuerda"]]);

const VEHICLE_DAMAGE = ["Front","Front-Left","Left","Rear-Left","Rear","Rear-Right","Right","Front-Right","Roof","Undercarriage","None"];

const PAIN_AREAS_T = opt([
  ["Head","Cabeça","Cabeza"],["Neck","Pescoço","Cuello"],["Left Shoulder","Ombro Esquerdo","Hombro Izquierdo"],
  ["Right Shoulder","Ombro Direito","Hombro Derecho"],["Upper Back","Parte Superior das Costas","Espalda Alta"],
  ["Mid Back","Meio das Costas","Espalda Media"],["Low Back","Lombar","Espalda Baja"],
  ["Left Arm","Braço Esquerdo","Brazo Izquierdo"],["Right Arm","Braço Direito","Brazo Derecho"],
  ["Left Hand","Mão Esquerda","Mano Izquierda"],["Right Hand","Mão Direita","Mano Derecha"],
  ["Chest","Peito","Pecho"],["Abdomen","Abdômen","Abdomen"],["Buttocks","Nádegas","Glúteos"],
  ["Left Hip","Quadril Esquerdo","Cadera Izquierda"],["Right Hip","Quadril Direito","Cadera Derecha"],
  ["Left Leg","Perna Esquerda","Pierna Izquierda"],["Right Leg","Perna Direita","Pierna Derecha"],
  ["Left Knee","Joelho Esquerdo","Rodilla Izquierda"],["Right Knee","Joelho Direito","Rodilla Derecha"],
  ["Left Foot","Pé Esquerdo","Pie Izquierdo"],["Right Foot","Pé Direito","Pie Derecho"]
]);

const MH_FAMILY_T = opt([["Diabetes","Diabetes","Diabetes"],["High blood pressure","Pressão alta","Presión alta"],["Heart problems","Problemas cardíacos","Problemas cardíacos"],["Stroke","AVC (derrame)","Derrame cerebral"],["Cancer","Câncer","Cáncer"]]);
const MH_CRITICAL_T = opt([["Pacemaker","Marca-passo","Marcapasos"],["Pregnant","Grávida","Embarazada"],["Metal implants","Implantes de metal","Implantes de metal"],["Blood clots","Coágulos sanguíneos","Coágulos de sangre"],["Cancer/tumor","Câncer/tumor","Cáncer/tumor"],["Loss of sensation","Perda de sensibilidade","Pérdida de sensibilidad"]]);

const CAUSE_OF_INJURY_T = opt([
  ["Vehicle vs Vehicle","Veículo x Veículo","Vehículo contra Vehículo"],
  ["Motorcycle vs Vehicle","Moto x Veículo","Motocicleta contra Vehículo"],
  ["Pedestrian vs Vehicle","Pedestre x Veículo","Peatón contra Vehículo"],
  ["Vehicle vs Object","Veículo x Objeto","Vehículo contra Objeto"],
  ["Motorcycle vs Object","Moto x Objeto","Motocicleta contra Objeto"],
  ["Pedestrian vs Object (slip, trip)","Pedestre x Objeto (escorregão, tropeço)","Peatón contra Objeto (resbalón, tropiezo)"],
  ["Bicycle","Bicicleta","Bicicleta"],["Fall","Queda","Caída"]
]);
const POSITION_IN_VEHICLE_T = opt([["Driver","Motorista","Conductor"],["Front passenger","Passageiro da Frente","Pasajero Delantero"],["Back seat passenger","Passageiro do Banco de Trás","Pasajero Trasero"],["Pedestrian","Pedestre","Peatón"],["Bicycle","Ciclista","Ciclista"],["Motorcycle","Motociclista","Motociclista"]]);
const HEAD_DURING_IMPACT_T = opt([["Straight","Reto/Olhando à frente","Recto/Mirando al frente"],["Down","Para baixo","Hacia abajo"],["Over left shoulder","Sobre o ombro esquerdo","Sobre el hombro izquierdo"],["Over right shoulder","Sobre o ombro direito","Sobre el hombro derecho"],["To the left","Para a esquerda","Hacia la izquierda"],["To the right","Para a direita","Hacia la derecha"],["Doesn't remember","Não lembra","No recuerda"]]);
const BODY_PART_CONTACT_T = opt([
  ["Any body part (none)","Nenhuma parte do corpo","Ninguna parte del cuerpo"],["Back of head/neck","Parte de trás da cabeça/pescoço","Parte trasera de cabeza/cuello"],
  ["Front of head","Frente da cabeça","Frente de la cabeza"],["Left side of head","Lado esquerdo da cabeça","Lado izquierdo de la cabeza"],
  ["Right side of head","Lado direito da cabeça","Lado derecho de la cabeza"],["Left chest","Peito esquerdo","Pecho izquierdo"],
  ["Right chest","Peito direito","Pecho derecho"],["Left shoulder","Ombro esquerdo","Hombro izquierdo"],
  ["Right shoulder","Ombro direito","Hombro derecho"],["Left arm","Braço esquerdo","Brazo izquierdo"],
  ["Right arm","Braço direito","Brazo derecho"],["Left leg","Perna esquerda","Pierna izquierda"],
  ["Right leg","Perna direita","Pierna derecha"],["Left foot","Pé esquerdo","Pie izquierdo"],
  ["Right foot","Pé direito","Pie derecho"],["Left knee","Joelho esquerdo","Rodilla izquierda"],
  ["Right knee","Joelho direito","Rodilla derecha"],["Stomach","Estômago","Estómago"],["Doesn't remember","Não lembra","No recuerda"]
]);
const VEHICLE_PART_CONTACT_T = opt([["None","Nenhuma","Ninguna"],["Airbag","Airbag","Bolsa de aire"],["Armrest","Apoio de braço","Apoyabrazos"],["Dashboard","Painel","Tablero"],["Door","Porta","Puerta"],["Steering wheel","Volante","Volante"],["Window","Janela","Ventana"],["N/A","N/A","N/A"],["Doesn't remember","Não lembra","No recuerda"]]);
const TRANSPORT_ER_T = opt([["Went to ER - Ambulance","Foi ao PS de ambulância","Fue a Emergencias en ambulancia"],["Went to ER - other transport","Foi ao PS por outro meio","Fue a Emergencias en otro transporte"],["Denied ER transport","Recusou transporte ao PS","Rechazó el transporte a Emergencias"]]);
const IMAGING_DONE_T = opt([["No","Não","No"],["X-Ray","Raio-X","Radiografía"],["MRI","Ressonância Magnética","Resonancia Magnética"],["CT Scan","Tomografia","Tomografía"],["Nerve Conduction Test","Exame de Condução Nervosa","Estudio de Conducción Nerviosa"],["Other","Outro","Otro"]]);
const IMAGING_RESULT_KEYS = [["xray","X-Ray","Raio-X","Radiografía"],["mri","MRI","Ressonância","Resonancia"],["ct","CT Scan","Tomografia","Tomografía"],["nerve","Nerve Conduction Test","Condução Nervosa","Conducción Nerviosa"]];
const RESULT_OPTS_T = opt([["Normal","Normal","Normal"],["Abnormal","Anormal","Anormal"],["N/A","N/A","N/A"]]);

const DESCRIPTORS_T = opt([["Dull","Incômoda","Sordo"],["Sharp","Aguda","Agudo"],["Aching","Latejante","Punzante"],["Burning","Queimação","Ardor"],["Deep","Profunda","Profundo"],["Tight","Aperto","Opresivo"],["Stiff","Rigidez","Rigidez"],["Numbness","Dormência","Adormecimiento"],["Tingling","Formigamento","Hormigueo"]]);
const FREQUENCY_OPTS_T = opt([["Constant","Constante","Constante"],["Frequent","Frequente","Frecuente"],["Intermittent","Intermitente","Intermitente"],["Occasional","Ocasional","Ocasional"]]);
const RADIATION_OPTS_T = opt([
  ["Non-radiating","Não irradia","No se irradia"],["Down left arm","Para o braço esquerdo","Hacia el brazo izquierdo"],
  ["Down right arm","Para o braço direito","Hacia el brazo derecho"],["Down left leg","Para a perna esquerda","Hacia la pierna izquierda"],
  ["Down right leg","Para a perna direita","Hacia la pierna derecha"],["Up left side of neck","Para o lado esquerdo do pescoço","Hacia el lado izquierdo del cuello"],
  ["Up right side of neck","Para o lado direito do pescoço","Hacia el lado derecho del cuello"],["Around the chest","Ao redor do peito","Alrededor del pecho"],["Back","Costas","Espalda"]
]);
const RADIATION_TIMING_T = opt([["Waking up in the morning","Ao acordar de manhã","Al despertar por la mañana"],["Sleeping","Dormindo","Durmiendo"],["Arm overhead","Braço acima da cabeça","Brazo sobre la cabeza"],["Driving","Dirigindo","Manejando"],["Other","Outro","Otro"],["Unsure","Não tenho certeza","No estoy seguro"]]);
const CHANGE_OPTS_T = opt([["Worsened","Piorou","Empeoró"],["Stayed the same","Permaneceu igual","Se mantuvo igual"],["Improved","Melhorou","Mejoró"]]);
const HELPS_OPTS_T = opt([["Nothing helps","Nada ajuda","Nada ayuda"],["Over the counter","Medicamento sem receita","Medicamento de venta libre"],["Prescribed medication","Medicamento prescrito","Medicamento recetado"],["Ice","Gelo","Hielo"],["Heat","Calor","Calor"],["Massage","Massagem","Masaje"],["Rest","Repouso","Descanso"]]);
const WORSENS_OPTS_T = opt([
  ["Most movements","A maioria dos movimentos","La mayoría de los movimientos"],["Lifting","Levantar peso","Levantar peso"],
  ["Caring for family","Cuidar da família","Cuidar de la familia"],["Household chores","Tarefas domésticas","Quehaceres del hogar"],
  ["Going up/down stairs","Subir/descer escadas","Subir/bajar escaleras"],["Bending","Curvar-se","Agacharse"],
  ["Driving","Dirigir","Manejar"],["Sleeping","Dormir","Dormir"],["Sitting","Sentar","Sentarse"],["Standing","Ficar em pé","Estar de pie"],
  ["Stress","Estresse","Estrés"],["Walking","Caminhar","Caminar"],["Working","Trabalhar","Trabajar"],["Specific movement","Movimento específico","Movimiento específico"]
]);
const TREATMENT_SINCE_T = opt([["None","Nenhum","Ninguno"],["Following up with PCP","Acompanhamento com médico de família","Seguimiento con médico de cabecera"],["Chiropractor","Quiroprático","Quiropráctico"],["Physical therapy","Fisioterapia","Fisioterapia"],["Acupuncture","Acupuntura","Acupuntura"],["Over the counter","Medicamento sem receita","Medicamento de venta libre"],["Prescribed medication","Medicamento prescrito","Medicamento recetado"],["Neurologist","Neurologista","Neurólogo"],["Other","Outro","Otro"]]);
const WORK_SITUATION_T = opt([["Full-time","Tempo integral","Tiempo completo"],["Part-time","Meio período","Medio tiempo"],["Not working","Não está trabalhando","No está trabajando"]]);
const WORK_NOT_WORKING_REASON_T = opt([["No car due to MVA","Sem carro por causa do acidente","Sin auto debido al accidente"],["Due to the pain","Por causa da dor","Debido al dolor"]]);
const SOCIAL_HABITS_T = opt([["Drinking","Bebida alcoólica","Bebida alcohólica"],["Smoking","Fumo","Fumar"],["Recreational drugs","Drogas recreativas","Drogas recreativas"],["None","Nenhum","Ninguno"]]);
const EXERCISE_CHANGE_T = opt([["No change since MVA","Sem mudança desde o acidente","Sin cambio desde el accidente"],["Unable to exercise due to MVA","Incapaz de se exercitar por causa do acidente","Incapaz de hacer ejercicio debido al accidente"]]);
const DIET_CHANGE_T = opt([["No change since MVA","Sem mudança desde o acidente","Sin cambio desde el accidente"],["Loss of appetite","Perda de apetite","Pérdida de apetito"],["Compulsive eating","Compulsão alimentar","Comer compulsivamente"],["Other","Outro","Otro"]]);

// Review of systems: [system EN/PT/ES, [ [item EN, item PT, item ES], ... ] ]
const ROS = [
  [["Constitutional","Constitucional","Constitucional"],[["Weight Loss","Perda de peso","Pérdida de peso"],["Fatigue","Fadiga","Fatiga"],["Fever","Febre","Fiebre"]]],
  [["Eyes","Olhos","Ojos"],[["Glasses","Óculos","Anteojos"],["Contacts","Lente de Contato","Lentes de Contacto"],["Eye Pain","Dor nos olhos","Dolor en los ojos"],["Double Vision","Visão Dupla","Visión Doble"],["Cataracts","Catarata","Cataratas"]]],
  [["Cardiovascular","Cardiovascular","Cardiovascular"],[["Murmur","Murmúrio","Soplo"],["Chest Pain","Dor no Peito","Dolor en el Pecho"],["Palpitations","Palpitações","Palpitaciones"],["Fainting Spells","Tontura/Desmaio","Desmayos"],["Short of Breath","Falta de ar","Falta de aire"],["Difficulty Lying Flat","Dif. deitar de costas","Dificultad para acostarse"],["Swelling in Ankles","Tornozelos inchados","Hinchazón en tobillos"]]],
  [["Endocrine","Endócrino","Endocrino"],[["Loss of Hair","Queda de cabelo","Caída de cabello"],["Heat Intolerance","Intolerância ao Calor","Intolerancia al Calor"],["Cold Intolerance","Intolerância ao Frio","Intolerancia al Frío"]]],
  [["Psychiatric","Psiquiátrico","Psiquiátrico"],[["Anxiety","Ansiedade","Ansiedad"],["Depression","Depressão","Depresión"],["Mood Swing","Mudança de humor","Cambios de humor"],["Difficulty Sleeping","Dificuldade de dormir","Dificultad para dormir"]]],
  [["Gastrointestinal","Gastrointestinal","Gastrointestinal"],[["Heartburn/Reflux","Azia/Refluxo","Acidez/Reflujo"],["Nausea/Vomiting","Náusea/Vômito","Náusea/Vómito"],["Constipation","Prisão de ventre","Estreñimiento"],["Change in Bowel Movements","Alterar movimentos intestinais","Cambio en evacuaciones"],["Diarrhea","Diarréia","Diarrea"],["Jaundice","Icterícia","Ictericia"],["Abdominal Pain","Dor abdominal","Dolor abdominal"],["Bloody Bowel","Intestino Sangrento","Sangre en las heces"]]],
  [["Genitourinary","Genitourinário","Genitourinario"],[["Blood in Urine","Sangue na urina","Sangre en la orina"],["Bladder Leakage","Difícil de segurar urina","Pérdida de orina"]]],
  [["Respiratory","Respiratório","Respiratorio"],[["Cough","Tosse","Tos"],["Cough Blood","Tosse com Sangue","Tos con sangre"],["Wheezing","Chiado/Asma","Silbido/Asma"],["Chills","Arrepios","Escalofríos"]]],
  [["Allergic","Alérgico","Alérgico"],[["Hives/Eczema","Alergia na pele","Alergia en la piel"],["Hay Fever","Alergia ao pólen","Alergia al polen"]]],
  [["Hematology/Lymph","Hematologia","Hematología"],[["Bruise Easily","Facilidade com hematomas","Se magulla fácilmente"],["Gums Bleed Easily","Gengivas sangram fácil","Encías sangran fácilmente"],["Enlarged Glands","Glândulas ampliadas","Glándulas inflamadas"]]],
  [["Muscle/Bone","Músculo/Osso","Músculo/Hueso"],[["Joint Pain/Swelling","Dor/Inchaço nas juntas","Dolor/Hinchazón en articulaciones"],["Stiffness","Rigidez","Rigidez"],["Muscle Pain","Dor Muscular","Dolor Muscular"],["Bone Pain","Dor no osso/fratura","Dolor en el hueso/fractura"]]],
  [["Skin","Pele","Piel"],[["Rashes/Sores","Assaduras/ferida aberta","Erupciones/heridas abiertas"],["Lesions","Lesões, cortes","Lesiones, cortes"],["Itching/Burning","Coceira/Queimação","Picazón/Ardor"]]],
  [["Neurological","Neurológico","Neurológico"],[["Loss of Strength","Perda de Força","Pérdida de fuerza"],["Numbness","Dormência","Adormecimiento"],["Headaches","Dores de cabeça","Dolores de cabeza"],["Tremors","Tremores","Temblores"],["Memory Loss","Perda de Memória","Pérdida de memoria"]]]
];

/* ============================================================
   STATE
   ============================================================ */
let currentStep = 1;
const TOTAL_STEPS = 8;
let complaintCount = 0;
const marks = { car: [], body: [] };
let sigDataUrl = null;

/* ============================================================
   HELPERS: choice grid rendering (bilingual-safe)
   ============================================================ */
function choiceHTML(group, tri, checkbox){
  const type = checkbox ? "checkbox" : "radio";
  const label = tri.en ? tri[LANG] : tri; // tri object {en,pt,es,val} or plain string
  const value = tri.val !== undefined ? tri.val : tri;
  return `<label class="choice" data-group="${group}" data-value="${escAttr(value)}">
    <input type="${type}" name="${group}${checkbox?'[]':''}" value="${escAttr(value)}"><span>${escHtmlText(label)}</span></label>`;
}
function escAttr(s){ return String(s).replace(/"/g,'&quot;'); }
function escHtmlText(s){ return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }
function fillGrid(elId, group, options, checkbox){
  const el = document.getElementById(elId);
  if(!el) return;
  el.innerHTML = options.map(o=>choiceHTML(group,o,checkbox)).join("");
}

document.addEventListener("click", function(e){
  const label = e.target.closest(".choice");
  if(!label) return;
  const input = label.querySelector("input");
  // NOTE: the label itself also carries data-group, so a plain
  // closest("[data-group]") would match the label instead of its
  // container. Walk to the actual container class instead.
  const grid = label.closest(".choice-grid, .pain-scale");
  if(input.type === "checkbox"){
    input.checked = !input.checked;
    label.classList.toggle("selected", input.checked);
  } else {
    grid.querySelectorAll(".choice").forEach(c=>c.classList.remove("selected"));
    input.checked = true;
    label.classList.add("selected");
  }
  refreshConditionals();
});

function refreshConditionals(){
  document.querySelectorAll(".conditional[data-show-for]").forEach(cond=>{
    const group = cond.dataset.showFor;
    const val = cond.dataset.showVal;
    const checked = document.querySelector(`input[name="${group}"]:checked`);
    cond.classList.toggle("show", !!checked && checked.value === val);
  });
  const imgChecks = document.querySelectorAll('input[name="imagingDone[]"]:checked');
  const showImg = Array.from(imgChecks).some(i=>i.value!=="No");
  const imgBlock = document.getElementById("imagingResultsBlock");
  if(imgBlock) imgBlock.classList.toggle("show", showImg);
}

/* ============================================================
   MARKABLE DIAGRAM (car damage / body pain)
   Tap to place a red circle+X mark. Tap near an existing mark removes it.
   ============================================================ */
// Resize functions for each built diagram, re-run whenever a step becomes visible
// (canvases built while their .step is display:none get 0x0 dimensions otherwise).
let diagramResizers = [];
function buildDiagram(containerEl, imgSrc, marksArrKey, toolsLabels){
  containerEl.innerHTML = `
    <div class="diagram-wrap" id="${marksArrKey}_wrap">
      <img id="${marksArrKey}_img" src="${imgSrc}" draggable="false">
      <canvas id="${marksArrKey}_canvas"></canvas>
    </div>
    <div class="diagram-tools">
      <button type="button" class="primary" id="${marksArrKey}_undo">${tr('undoMark')}</button>
      <button type="button" id="${marksArrKey}_clear">${tr('clearMarks')}</button>
    </div>
  `;
  const wrap = document.getElementById(marksArrKey+"_wrap");
  const img = document.getElementById(marksArrKey+"_img");
  const canvas = document.getElementById(marksArrKey+"_canvas");
  const ctx = canvas.getContext("2d");

  function resize(){
    const r = wrap.getBoundingClientRect();
    canvas.width = r.width; canvas.height = r.height;
    redraw();
  }
  function redraw(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    marks[marksArrKey].forEach(m=>{
      const x = m.xFrac*canvas.width, y = m.yFrac*canvas.height;
      const r = Math.max(10, canvas.width*0.022);
      ctx.strokeStyle = "#c0392b"; ctx.lineWidth = Math.max(2, canvas.width*0.004);
      ctx.beginPath(); ctx.arc(x,y,r,0,Math.PI*2); ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(x-r*0.6,y-r*0.6); ctx.lineTo(x+r*0.6,y+r*0.6);
      ctx.moveTo(x+r*0.6,y-r*0.6); ctx.lineTo(x-r*0.6,y+r*0.6);
      ctx.stroke();
    });
  }
  function pointFromEvent(evt){
    const r = canvas.getBoundingClientRect();
    const clientX = evt.touches ? evt.touches[0].clientX : evt.clientX;
    const clientY = evt.touches ? evt.touches[0].clientY : evt.clientY;
    return { x: clientX - r.left, y: clientY - r.top };
  }
  canvas.addEventListener("pointerdown", function(evt){
    evt.preventDefault();
    const p = pointFromEvent(evt);
    const xFrac = p.x/canvas.width, yFrac = p.y/canvas.height;
    // if tapping near an existing mark, remove it instead of adding
    const thresh = 0.035;
    const idx = marks[marksArrKey].findIndex(m=>Math.hypot(m.xFrac-xFrac,m.yFrac-yFrac) < thresh);
    if(idx>=0){ marks[marksArrKey].splice(idx,1); }
    else { marks[marksArrKey].push({xFrac,yFrac}); }
    redraw();
  });
  document.getElementById(marksArrKey+"_clear").addEventListener("click", ()=>{ marks[marksArrKey]=[]; redraw(); });
  document.getElementById(marksArrKey+"_undo").addEventListener("click", ()=>{ marks[marksArrKey].pop(); redraw(); });

  if(img.complete) resize(); else img.addEventListener("load", resize);
  window.addEventListener("resize", resize);
  diagramResizers.push(resize);
  redraw();
}

// Renders a diagram + its marks onto an offscreen canvas and returns a dataURL (for embedding in PDF)
function snapshotDiagram(imgEl, marksArr){
  return new Promise((resolve)=>{
    const off = document.createElement("canvas");
    const naturalW = imgEl.naturalWidth || 900, naturalH = imgEl.naturalHeight || 600;
    off.width = naturalW; off.height = naturalH;
    const ctx = off.getContext("2d");
    const draw = ()=>{
      ctx.drawImage(imgEl,0,0,naturalW,naturalH);
      marksArr.forEach(m=>{
        const x = m.xFrac*naturalW, y = m.yFrac*naturalH;
        const r = Math.max(naturalW*0.018, 10);
        ctx.strokeStyle = "#c0392b"; ctx.lineWidth = Math.max(3, naturalW*0.005);
        ctx.beginPath(); ctx.arc(x,y,r,0,Math.PI*2); ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(x-r*0.6,y-r*0.6); ctx.lineTo(x+r*0.6,y+r*0.6);
        ctx.moveTo(x+r*0.6,y-r*0.6); ctx.lineTo(x-r*0.6,y+r*0.6);
        ctx.stroke();
      });
      resolve(off.toDataURL("image/png"));
    };
    if(imgEl.complete && imgEl.naturalWidth) draw();
    else imgEl.addEventListener("load", draw, {once:true});
  });
}

/* ============================================================
   SIGNATURE PAD (touch/mouse, single capture reused everywhere)
   ============================================================ */
let sigCanvas, sigCtx, sigDrawing=false, sigHasStroke=false;
function buildSignaturePad(containerEl){
  containerEl.innerHTML = `
    <label class="field"><span class="lbl">${tr('sigTitle')}</span></label>
    <p style="font-size:12.5px;color:#778;margin:-8px 0 8px;">${tr('sigHint')}</p>
    <div class="sig-wrap" id="sigPadWrap">
      <canvas id="sigPad"></canvas>
      <div class="sig-placeholder" id="sigPlaceholder">${tr('sigPlaceholder')}</div>
    </div>
    <div class="sig-tools">
      <button type="button" id="sigClearBtn">${tr('sigClear')}</button>
    </div>
    <div class="sig-missing" id="sigMissingMsg" style="display:none;">${tr('sigMissing')}</div>
  `;
  sigCanvas = document.getElementById("sigPad");
  sigCtx = sigCanvas.getContext("2d");
  const wrap = document.getElementById("sigPadWrap");

  function resize(){
    const r = wrap.getBoundingClientRect();
    const prevData = sigHasStroke ? sigCanvas.toDataURL() : null;
    sigCanvas.width = r.width; sigCanvas.height = 150;
    sigCtx.lineWidth = 2.4; sigCtx.lineCap = "round"; sigCtx.strokeStyle = "#233238";
    if(prevData){
      const im = new Image();
      im.onload = ()=> sigCtx.drawImage(im,0,0,sigCanvas.width,sigCanvas.height);
      im.src = prevData;
    }
  }
  resize();
  window.addEventListener("resize", resize);

  function pos(evt){
    const r = sigCanvas.getBoundingClientRect();
    const clientX = evt.touches ? evt.touches[0].clientX : evt.clientX;
    const clientY = evt.touches ? evt.touches[0].clientY : evt.clientY;
    return {x: clientX-r.left, y: clientY-r.top};
  }
  function start(evt){
    evt.preventDefault();
    sigDrawing = true;
    const p = pos(evt);
    sigCtx.beginPath(); sigCtx.moveTo(p.x,p.y);
    document.getElementById("sigPlaceholder").style.display="none";
  }
  function move(evt){
    if(!sigDrawing) return;
    evt.preventDefault();
    const p = pos(evt);
    sigCtx.lineTo(p.x,p.y); sigCtx.stroke();
    sigHasStroke = true;
  }
  function end(){ sigDrawing=false; if(sigHasStroke) sigDataUrl = sigCanvas.toDataURL("image/png"); }

  sigCanvas.addEventListener("pointerdown", start);
  sigCanvas.addEventListener("pointermove", move);
  window.addEventListener("pointerup", end);

  document.getElementById("sigClearBtn").addEventListener("click", ()=>{
    sigCtx.clearRect(0,0,sigCanvas.width,sigCanvas.height);
    sigHasStroke = false; sigDataUrl = null;
    document.getElementById("sigPlaceholder").style.display="flex";
  });

  if(sigDataUrl){
    const im = new Image();
    im.onload = ()=>{ sigCtx.drawImage(im,0,0,sigCanvas.width,sigCanvas.height); sigHasStroke = true; document.getElementById("sigPlaceholder").style.display="none"; };
    im.src = sigDataUrl;
  }
}

function renderSigStamp(elId){
  const el = document.getElementById(elId);
  if(!el) return;
  if(sigDataUrl){
    el.innerHTML = `<div class="sig-stamp"><img src="${sigDataUrl}"><div class="txt">${tr('signedBy')}: ${getFullFormalName()||""}</div></div>`;
  } else {
    el.innerHTML = "";
  }
}

function getVal(name){ const el = document.querySelector(`[name="${name}"]`); return el ? el.value : ""; }
function getFullFormalName(){
  const title = document.querySelector('[name="title"]:checked');
  const first = getVal("firstName"), last = getVal("lastName");
  if(!first && !last) return "";
  return [title?title.value:"", first, last].filter(Boolean).join(" ");
}

/* ============================================================
   STEP RENDERERS
   ============================================================ */
function renderStep1(){
  const el = document.getElementById("step1card");
  el.innerHTML = `
    <h2>${tr('s1_title')}</h2><p class="sub">${tr('s1_sub')}</p>
    <fieldset><legend>${tr('title_lbl')}</legend>
      <div class="choice-grid" data-group="title" id="titleGrid"></div>
    </fieldset>
    <div class="row2">
      <label class="field"><span class="lbl">${tr('firstName')}</span><input type="text" name="firstName" required></label>
      <label class="field"><span class="lbl">${tr('lastName')}</span><input type="text" name="lastName" required></label>
    </div>
    <div class="row2">
      <label class="field"><span class="lbl">${tr('dob')}</span><input type="date" name="birthDate" required></label>
      <label class="field"><span class="lbl">${tr('todayDate')}</span><input type="date" name="regDate"></label>
    </div>
    <label class="field"><span class="lbl">${tr('address')}</span><input type="text" name="address" required></label>
    <div class="row2">
      <label class="field"><span class="lbl">${tr('apt')}</span><input type="text" name="apt"></label>
      <label class="field"><span class="lbl">${tr('city')}</span><input type="text" name="city" required></label>
    </div>
    <div class="row2">
      <label class="field"><span class="lbl">${tr('state')}</span><input type="text" name="state" value="MA"></label>
      <label class="field"><span class="lbl">${tr('zip')}</span><input type="text" name="zip"></label>
    </div>
    <div class="row2">
      <label class="field"><span class="lbl">${tr('cell')}</span><input type="tel" name="cell" required></label>
      <label class="field"><span class="lbl">${tr('email')}</span><input type="email" name="email" required></label>
    </div>
    <div class="row2">
      <label class="field"><span class="lbl">${tr('language')}</span><input type="text" name="language" value="${LANG==='pt'?'Português':(LANG==='es'?'Español':'English')}"></label>
      <div>
        <span class="lbl" style="display:block;font-size:14.5px;font-weight:600;margin-bottom:6px;">${tr('interpreterNeed')}</span>
        <div class="choice-grid two" data-group="interpreterNeed" id="interpGrid"></div>
      </div>
    </div>
    <div class="consent-box">${tr('consentContactBox')}</div>
    <div class="checkline"><input type="checkbox" name="consentContact" id="consentContact"><span>${tr('consentContactCheck')}</span></div>
    <div id="sigContainer"></div>
  `;
  // Title options need canonical English values regardless of language for data model:
  const titleOptions = [
    {en:"Mr.", pt:tr('title_mr'), es:tr('title_mr'), val:"Mr."},
    {en:"Mrs.", pt:tr('title_mrs'), es:tr('title_mrs'), val:"Mrs."},
    {en:"Ms.", pt:tr('title_ms'), es:tr('title_ms'), val:"Ms."}
  ];
  document.getElementById("titleGrid").innerHTML = titleOptions.map(o=>{
    const label = LANG==='en'? o.en : (LANG==='pt'? o.pt : o.es);
    return `<label class="choice" data-group="title" data-value="${o.val}"><input type="radio" name="title" value="${o.val}"><span>${label}</span></label>`;
  }).join("");
  fillGrid("interpGrid","interpreterNeed",YN_T,false);
  buildSignaturePad(document.getElementById("sigContainer"));
}

function renderStep2(){
  const el = document.getElementById("step2card");
  el.innerHTML = `
    <h2>${tr('s2_title')}</h2><p class="sub">${tr('s2_sub')}</p>
    <div class="row2">
      <label class="field"><span class="lbl">${tr('accidentDate')}</span><input type="date" name="accidentDate" required></label>
      <label class="field"><span class="lbl">${tr('accidentTime')}</span><input type="time" name="accidentTime"></label>
    </div>
    <label class="field"><span class="lbl">${tr('accidentStreet')}</span><input type="text" name="accidentStreet"></label>
    <div class="row2">
      <label class="field"><span class="lbl">${tr('accidentCity')}</span><input type="text" name="accidentCity"></label>
      <label class="field"><span class="lbl">${tr('licensePlate')}</span><input type="text" name="licensePlate"></label>
    </div>
    <label class="field"><span class="lbl">${tr('autoInsurance')}</span><input type="text" name="autoInsurance"></label>
    <label class="field"><span class="lbl">${tr('injuriesDescribe')}</span><textarea name="injuriesDescribe"></textarea></label>
    <fieldset><legend>${tr('ynQs')}</legend><div id="yn-basic"></div></fieldset>
    <div class="row2">
      <label class="field"><span class="lbl">${tr('bodyshopWhich')}</span><input type="text" name="bodyshopWhich"></label>
      <label class="field"><span class="lbl">${tr('rideshareWhich')}</span><input type="text" name="rideshareWhich"></label>
    </div>
    <fieldset>
      <legend>${tr('carDamageTitle')}</legend>
      <p class="diagram-hint">${tr('carDamageHint')}</p>
      <div id="carDiagramContainer"></div>
    </fieldset>
    <label class="field"><span class="lbl">${tr('accidentDescription')}</span><textarea name="accidentDescription" placeholder="${tr('accidentDescriptionPh')}"></textarea></label>
    <fieldset>
      <legend>${tr('insuranceInfo')} <span class="hint">${tr('insuranceHint')}</span></legend>
      <label class="field"><span class="lbl">${tr('pipClaimNumber')}</span><input type="text" name="pipClaimNumber"></label>
      <label class="field"><span class="lbl">${tr('policyNumber')}</span><input type="text" name="policyNumber"></label>
      <label class="field"><span class="lbl">${tr('policyHolderName')}</span><input type="text" name="policyHolderName"></label>
      <label class="field"><span class="lbl">${tr('policyHolderDob')}</span><input type="date" name="policyHolderDob"></label>
    </fieldset>
    <div id="sigStamp2"></div>
  `;
  const items = [
    ["ambulance","q_ambulance"],["erHospital","q_erHospital"],["masshealth","q_masshealth"],
    ["masshealthCard","q_masshealthCard"],["privateInsurance","q_privateInsurance"],
    ["healthInsCard","q_healthInsCard"],["policeReport","q_policeReport"]
  ];
  document.getElementById("yn-basic").innerHTML = items.map(([name,labelKey])=>`
    <div style="margin-bottom:12px;">
      <div style="font-size:14px;margin-bottom:6px;">${tr(labelKey)}</div>
      <div class="choice-grid two" data-group="${name}" id="grid_${name}"></div>
    </div>`).join("") +
    `<label class="field"><span class="lbl">${tr('masshealthId')}</span><input type="text" name="masshealthId"></label>`;
  items.forEach(([name])=> fillGrid("grid_"+name, name, YN_T, false));
  buildDiagram(document.getElementById("carDiagramContainer"), CAR_DIAGRAM_IMG, "car");
  renderSigStamp("sigStamp2");
}

function renderStep3(){
  const el = document.getElementById("step3card");
  el.innerHTML = `
    <h2>${tr('s3_title')}</h2><p class="sub">${tr('s3_sub')}</p>
    <fieldset>
      <legend>${tr('painAreasTitle')}</legend>
      <div id="bodyDiagramContainer"></div>
    </fieldset>
    <fieldset>
      <legend>${tr('painIntensityTitle')} <span class="hint">${tr('painIntensityHint')}</span></legend>
      <div class="pain-scale" id="painScaleGrid"></div>
      <div class="scale-labels"><span>${tr('noPain')}</span><span>${tr('worstPain')}</span></div>
    </fieldset>
    <div id="sigStamp3"></div>
  `;
  buildDiagram(document.getElementById("bodyDiagramContainer"), BODY_DIAGRAM_IMG, "body");
  document.getElementById("painScaleGrid").innerHTML = Array.from({length:11},(_,i)=>i)
    .map(n=>`<label class="choice" data-group="painIntensity" data-value="${n}"><input type="radio" name="painIntensity" value="${n}"><span>${n}</span></label>`).join("");
  renderSigStamp("sigStamp3");
}

function renderStep4(){
  const el = document.getElementById("step4card");
  el.innerHTML = `
    <h2>${tr('s4_title')}</h2><p class="sub">${tr('s4_sub')}</p>
    <fieldset>
      <legend>${tr('mh_q1')} <span class="hint">${tr('mh_q1_hint')}</span></legend>
      <div class="choice-grid two" data-group="mh_surgery" id="g_mh_surgery"></div>
      <div class="conditional" data-show-for="mh_surgery" data-show-val="Yes">
        <div class="row2">
          <label class="field"><span class="lbl">${tr('what')}</span><input type="text" name="mh_surgery_what"></label>
          <label class="field"><span class="lbl">${tr('when')}</span><input type="text" name="mh_surgery_when"></label>
        </div>
      </div>
    </fieldset>
    <fieldset>
      <legend>${tr('mh_q2')} <span class="hint">${tr('mh_q2_hint')}</span></legend>
      <div class="choice-grid two" data-group="mh_meds" id="g_mh_meds"></div>
      <div class="conditional" data-show-for="mh_meds" data-show-val="Yes">
        <div class="row2">
          <label class="field"><span class="lbl">${tr('what')}</span><input type="text" name="mh_meds_what"></label>
          <label class="field"><span class="lbl">${tr('whoPrescribed')}</span><input type="text" name="mh_meds_who"></label>
        </div>
      </div>
    </fieldset>
    <fieldset>
      <legend>${tr('mh_q3')} <span class="hint">${tr('mh_q3_hint')}</span></legend>
      <div class="choice-grid two" data-group="mh_health" id="g_mh_health"></div>
      <div class="conditional" data-show-for="mh_health" data-show-val="Yes">
        <div class="row2">
          <label class="field"><span class="lbl">${tr('what')}</span><input type="text" name="mh_health_what"></label>
          <label class="field"><span class="lbl">${tr('sinceWhen')}</span><input type="text" name="mh_health_since"></label>
        </div>
      </div>
    </fieldset>
    <fieldset>
      <legend>${tr('mh_q4')} <span class="hint">${tr('mh_q4_hint')}</span></legend>
      <div class="choice-grid two" data-group="mh_prev_accident" id="g_mh_prev_accident"></div>
      <div class="conditional" data-show-for="mh_prev_accident" data-show-val="Yes">
        <label class="field"><span class="lbl">${tr('what')}</span><input type="text" name="mh_prev_what"></label>
        <div class="row2">
          <label class="field"><span class="lbl">${tr('when')}</span><input type="text" name="mh_prev_when"></label>
          <label class="field"><span class="lbl">${tr('treatment')}</span><input type="text" name="mh_prev_treatment"></label>
        </div>
      </div>
    </fieldset>
    <fieldset><legend>${tr('mh_q5')} <span class="hint">${tr('mh_q5_hint')}</span></legend><div class="choice-grid" data-group="mh_family" id="mhFamilyGrid"></div></fieldset>
    <fieldset><legend>${tr('mh_q6')}</legend><div class="choice-grid" data-group="mh_critical" id="mhCriticalGrid"></div></fieldset>
    <div id="sigStamp4"></div>
  `;
  fillGrid("g_mh_surgery","mh_surgery",YN_T,false);
  fillGrid("g_mh_meds","mh_meds",YN_T,false);
  fillGrid("g_mh_health","mh_health",YN_T,false);
  fillGrid("g_mh_prev_accident","mh_prev_accident",YN_T,false);
  fillGrid("mhFamilyGrid","mh_family",MH_FAMILY_T,true);
  fillGrid("mhCriticalGrid","mh_critical",MH_CRITICAL_T,true);
  renderSigStamp("sigStamp4");
}

function renderStep5(){
  const el = document.getElementById("step5card");
  el.innerHTML = `
    <h2>${tr('s5_title')}</h2><p class="sub">${tr('s5_sub')}</p>
    <fieldset><legend>${tr('q1_cause')}</legend><div class="choice-grid block" data-group="causeOfInjury" id="causeGrid"></div></fieldset>
    <label class="field"><span class="lbl">${tr('q2_dateInjury')}</span><input type="date" name="dateOfInjury"></label>
    <fieldset><legend>${tr('q3_position')}</legend><div class="choice-grid block" data-group="positionInVehicle" id="positionGrid"></div></fieldset>
    <fieldset><legend>${tr('q4_restrained')}</legend><div class="choice-grid" data-group="restrained" id="restrainedGrid"></div></fieldset>
    <fieldset><legend>${tr('q5_airbag')}</legend><div class="choice-grid" data-group="airbagDeploy" id="airbagGrid"></div></fieldset>
    <fieldset><legend>${tr('q6_headrest')}</legend><div class="choice-grid" data-group="headHitHeadrest" id="headrestGrid"></div></fieldset>
    <fieldset><legend>${tr('q7_headImpact')}</legend><div class="choice-grid block" data-group="headDuringImpact" id="headImpactGrid"></div></fieldset>
    <fieldset><legend>${tr('q8_contactInterior')}</legend><div class="choice-grid" data-group="contactInterior" id="contactInteriorGrid"></div></fieldset>
    <div class="conditional" data-show-for="contactInterior" data-show-val="Yes">
      <fieldset><legend>${tr('q9_bodyPart')}</legend><div class="choice-grid" data-group="bodyPartContact" id="bodyPartGrid"></div></fieldset>
      <fieldset><legend>${tr('q10_vehiclePart')}</legend><div class="choice-grid" data-group="vehiclePartContact" id="vehiclePartGrid"></div></fieldset>
    </div>
    <fieldset><legend>${tr('q11_headInjury')}</legend><div class="choice-grid" data-group="headInjury" id="headInjuryGrid"></div></fieldset>
    <fieldset><legend>${tr('q12_loc')}</legend><div class="choice-grid" data-group="lossConsciousness" id="locGrid"></div></fieldset>
    <fieldset><legend>${tr('q13_police')}</legend><div class="choice-grid" data-group="policeAtScene" id="policeGrid"></div></fieldset>
    <fieldset><legend>${tr('q14_report')}</legend><div class="choice-grid" data-group="accidentReport" id="reportGrid"></div></fieldset>
    <fieldset><legend>${tr('q15_ems')}</legend><div class="choice-grid" data-group="emsAtScene" id="emsGrid"></div></fieldset>
    <fieldset><legend>${tr('q16_transportER')}</legend><div class="choice-grid block" data-group="transportER" id="transportERGrid"></div></fieldset>
    <fieldset><legend>${tr('q17_imaging')} <span class="hint">${tr('selectAll')}</span></legend><div class="choice-grid" data-group="imagingDone" id="imagingGrid"></div></fieldset>
    <div class="conditional" id="imagingResultsBlock">
      <fieldset><legend>${tr('q18_imagingResult')}</legend><div id="imagingResultsInner"></div></fieldset>
    </div>
    <div id="sigStamp5"></div>
  `;
  fillGrid("causeGrid","causeOfInjury",CAUSE_OF_INJURY_T,false);
  fillGrid("positionGrid","positionInVehicle",POSITION_IN_VEHICLE_T,false);
  fillGrid("restrainedGrid","restrained",YNDNA_T,false);
  fillGrid("airbagGrid","airbagDeploy",YNDNA_T,false);
  fillGrid("headrestGrid","headHitHeadrest",YNDNA_T,false);
  fillGrid("headImpactGrid","headDuringImpact",HEAD_DURING_IMPACT_T,false);
  fillGrid("contactInteriorGrid","contactInterior",YNDNA_T,false);
  fillGrid("bodyPartGrid","bodyPartContact",BODY_PART_CONTACT_T,true);
  fillGrid("vehiclePartGrid","vehiclePartContact",VEHICLE_PART_CONTACT_T,true);
  fillGrid("headInjuryGrid","headInjury",YNDN_T,false);
  fillGrid("locGrid","lossConsciousness",YNDN_T,false);
  fillGrid("policeGrid","policeAtScene",YNDN_T,false);
  fillGrid("reportGrid","accidentReport",YNDN_T,false);
  fillGrid("emsGrid","emsAtScene",YNDN_T,false);
  fillGrid("transportERGrid","transportER",TRANSPORT_ER_T,false);
  fillGrid("imagingGrid","imagingDone",IMAGING_DONE_T,true);
  document.getElementById("imagingResultsInner").innerHTML = IMAGING_RESULT_KEYS.map(([key,en,pt,es])=>`
    <div style="margin-bottom:10px;">
      <div style="font-size:13.5px;margin-bottom:6px;color:#556;">${LANG==='en'?en:(LANG==='pt'?pt:es)}</div>
      <div class="choice-grid" data-group="imgres_${key}" id="imgres_grid_${key}"></div>
    </div>`).join("");
  IMAGING_RESULT_KEYS.forEach(([key])=> fillGrid("imgres_grid_"+key, "imgres_"+key, RESULT_OPTS_T, false));
  renderSigStamp("sigStamp5");
}

function complaintBlockHTML(idx){
  return `
    <fieldset>
      <legend>${trFmt('complaintN',{n:idx})} ${idx>1?`<button type="button" class="remove-btn" data-remove="${idx}">${tr('remove')}</button>`:''}</legend>
      <label class="field"><span class="lbl">${tr('complaintLocation')}</span>
        <input type="text" name="c${idx}_location" placeholder="${tr('complaintLocationPh')}"></label>
      <legend style="margin-top:14px;">${tr('describeIt')} <span class="hint">${tr('selectAll')}</span></legend>
      <div class="choice-grid" data-group="c${idx}_descriptors" id="c${idx}_descriptors_grid"></div>
      <legend style="margin-top:14px;">${tr('frequency')}</legend>
      <div class="choice-grid" data-group="c${idx}_frequency" id="c${idx}_frequency_grid"></div>
      <legend style="margin-top:14px;">${tr('painLevel')}</legend>
      <div class="pain-scale" data-group="c${idx}_severity" id="c${idx}_severity_grid"></div>
      <legend style="margin-top:14px;">${tr('doesRadiate')}</legend>
      <div class="choice-grid" data-group="c${idx}_radiation" id="c${idx}_radiation_grid"></div>
      <legend style="margin-top:14px;">${tr('whenFeel')} <span class="hint">${tr('selectAll')}</span></legend>
      <div class="choice-grid" data-group="c${idx}_timing" id="c${idx}_timing_grid"></div>
      <legend style="margin-top:14px;">${tr('changedSince')}</legend>
      <div class="choice-grid" data-group="c${idx}_change" id="c${idx}_change_grid"></div>
      <legend style="margin-top:14px;">${tr('whatHelps')} <span class="hint">${tr('selectAll')}</span></legend>
      <div class="choice-grid" data-group="c${idx}_helps" id="c${idx}_helps_grid"></div>
      <legend style="margin-top:14px;">${tr('whatWorsens')} <span class="hint">${tr('selectAll')}</span></legend>
      <div class="choice-grid" data-group="c${idx}_worsens" id="c${idx}_worsens_grid"></div>
      <legend style="margin-top:14px;">${tr('relatedPrevious')}</legend>
      <div class="choice-grid two" data-group="c${idx}_relatedPrevious" id="c${idx}_relatedPrevious_grid"></div>
    </fieldset>
    <hr style="border:none;border-top:1px solid #eef2f2;margin:16px 0;">
  `;
}
function fillComplaintGrids(idx){
  fillGrid(`c${idx}_descriptors_grid`,`c${idx}_descriptors`,DESCRIPTORS_T,true);
  fillGrid(`c${idx}_frequency_grid`,`c${idx}_frequency`,FREQUENCY_OPTS_T,false);
  document.getElementById(`c${idx}_severity_grid`).innerHTML = Array.from({length:11},(_,i)=>i)
    .map(n=>`<label class="choice" data-group="c${idx}_severity" data-value="${n}"><input type="radio" name="c${idx}_severity" value="${n}"><span>${n}</span></label>`).join("");
  fillGrid(`c${idx}_radiation_grid`,`c${idx}_radiation`,RADIATION_OPTS_T,false);
  fillGrid(`c${idx}_timing_grid`,`c${idx}_timing`,RADIATION_TIMING_T,true);
  fillGrid(`c${idx}_change_grid`,`c${idx}_change`,CHANGE_OPTS_T,false);
  fillGrid(`c${idx}_helps_grid`,`c${idx}_helps`,HELPS_OPTS_T,true);
  fillGrid(`c${idx}_worsens_grid`,`c${idx}_worsens`,WORSENS_OPTS_T,true);
  fillGrid(`c${idx}_relatedPrevious_grid`,`c${idx}_relatedPrevious`,YN_T,false);
}
function addComplaint(){
  complaintCount++;
  const idx = complaintCount;
  const wrap = document.getElementById("complaintsWrap");
  const div = document.createElement("div");
  div.className = "complaint-block";
  div.dataset.idx = idx;
  div.innerHTML = complaintBlockHTML(idx);
  wrap.appendChild(div);
  fillComplaintGrids(idx);
}
document.addEventListener("click", function(e){
  if(e.target.id==="addComplaintBtn"){ addComplaint(); }
  if(e.target.dataset && e.target.dataset.remove){
    const idx = e.target.dataset.remove;
    const block = document.querySelector(`.complaint-block[data-idx="${idx}"]`);
    if(block) block.remove();
  }
});

function renderStep6(){
  const el = document.getElementById("step6card");
  el.innerHTML = `
    <h2>${tr('s6_title')}</h2><p class="sub">${tr('s6_sub')}</p>
    <div id="complaintsWrap"></div>
    <button type="button" class="add-btn" id="addComplaintBtn">${tr('addComplaint')}</button>
  `;
  const el2 = document.getElementById("step6card2");
  el2.innerHTML = `
    <h2>${tr('sinceAccidentTitle')}</h2>
    <fieldset><legend>${tr('treatmentSinceTitle')} <span class="hint">${tr('selectAll')}</span></legend><div class="choice-grid" data-group="treatmentSince" id="treatmentSinceGrid"></div></fieldset>
    <fieldset><legend>${tr('workSituationTitle')}</legend><div class="choice-grid block" data-group="workSituation" id="workSituationGrid"></div></fieldset>
    <div class="conditional" data-show-for="workSituation" data-show-val="Not working"><div class="choice-grid" data-group="workNotWorkingReason" id="workReasonGrid"></div></div>
    <fieldset><legend>${tr('socialHabitsTitle')} <span class="hint">${tr('selectAll')}</span></legend><div class="choice-grid" data-group="socialHabits" id="socialHabitsGrid"></div></fieldset>
    <fieldset><legend>${tr('exerciseChangeTitle')}</legend><div class="choice-grid block" data-group="exerciseChange" id="exerciseChangeGrid"></div></fieldset>
    <fieldset><legend>${tr('dietChangeTitle')} <span class="hint">${tr('selectAll')}</span></legend><div class="choice-grid" data-group="dietChange" id="dietChangeGrid"></div></fieldset>
    <div id="sigStamp6"></div>
  `;
  // reset complaints on (re)render of step 6 the first time only
  if(!document.querySelector(".complaint-block")){ complaintCount = 0; addComplaint(); }
  fillGrid("treatmentSinceGrid","treatmentSince",TREATMENT_SINCE_T,true);
  fillGrid("workSituationGrid","workSituation",WORK_SITUATION_T,false);
  fillGrid("workReasonGrid","workNotWorkingReason",WORK_NOT_WORKING_REASON_T,true);
  fillGrid("socialHabitsGrid","socialHabits",SOCIAL_HABITS_T,true);
  fillGrid("exerciseChangeGrid","exerciseChange",EXERCISE_CHANGE_T,false);
  fillGrid("dietChangeGrid","dietChange",DIET_CHANGE_T,true);
  renderSigStamp("sigStamp6");
}

function renderStep7(){
  const el = document.getElementById("step7card");
  let html = `<h2>${tr('s7_title')}</h2><p class="sub">${tr('s7_sub')}</p><div id="rosWrap"></div><div id="sigStamp7"></div>`;
  el.innerHTML = html;
  const wrap = el.querySelector("#rosWrap");
  let inner = "";
  ROS.forEach(([system,items])=>{
    const sysLabel = system[L()];
    inner += `<div class="ros-system-title">${sysLabel}</div>`;
    items.forEach(item=>{
      const itemEn = item[0];
      const itemLabel = item[L()];
      const key = "ros_"+itemEn.replace(/[^a-z]/gi,"");
      inner += `<div class="ros-row">
        <div class="ros-name">${itemLabel}</div>
        <div class="ros-controls">
          <div class="choice-grid" data-group="${key}">
            <label class="choice" data-group="${key}" data-value="Y"><input type="radio" name="${key}" value="Y"><span>${LANG==='en'?'Y':'S'}</span></label>
            <label class="choice" data-group="${key}" data-value="N"><input type="radio" name="${key}" value="N"><span>N</span></label>
          </div>
          <label class="after-check"><input type="checkbox" name="${key}_after" value="1"> ${tr('afterAccident')}</label>
        </div>
      </div>`;
    });
  });
  wrap.innerHTML = inner;
  renderSigStamp("sigStamp7");
}

function buildReviewSection(title, rows){
  let html = `<div class="review-section"><h3>${title}</h3>`;
  rows.forEach(([k,v])=>{ html += `<div class="review-item"><div class="k">${k}</div><div class="v">${labelVal(v)}</div></div>`; });
  html += `</div>`;
  return html;
}
function labelVal(v){ return Array.isArray(v) ? (v.length? v.join(", "):"—") : (v || "—"); }

function renderStep8(){
  const el = document.getElementById("step8card");
  el.innerHTML = `<h2>${tr('s8_title')}</h2><p class="sub">${tr('s8_sub')}</p><div id="reviewWrap"></div>`;
  const el2 = document.getElementById("step8card2");
  el2.innerHTML = `
    <div class="consent-box">${tr('finalConsentBox')}</div>
    <div class="checkline"><input type="checkbox" name="finalConsent" id="finalConsent"><span>${tr('finalConsentCheck')}</span></div>
    <div id="sigStamp8"></div>
    <div id="submitError" class="error-banner" style="display:none;"></div>
  `;
  buildReview();
  renderSigStamp("sigStamp8");
}

function buildReview(){
  const data = collectFormData();
  const wrap = document.getElementById("reviewWrap");
  if(!wrap) return;
  let html = "";
  html += buildReviewSection(tr('s1_title'),[
    ["Name", getFullFormalName()],["DOB",data.birthDate],
    ["Address",[data.address,data.apt,data.city,data.state,data.zip].filter(Boolean).join(", ")],
    ["Cell",data.cell],["Email",data.email]
  ]);
  html += buildReviewSection(tr('s2_title'),[
    ["Date/Time",[data.accidentDate,data.accidentTime].filter(Boolean).join(" ")],
    ["Location",[data.accidentStreet,data.accidentCity].filter(Boolean).join(", ")],
    ["Injuries",data.injuriesDescribe],
    ["Vehicle damage marks", marks.car.length]
  ]);
  html += buildReviewSection(tr('s3_title'),[["Pain marks", marks.body.length],["Intensity",data.painIntensity]]);
  data._complaints.forEach(c=>{
    html += buildReviewSection(trFmt('complaintN',{n:c.idx}), [
      ["Location",c.location],["Severity",c.severity]
    ]);
  });
  wrap.innerHTML = html;
}

/* ============================================================
   STATIC TEXT REFRESH (header, intro, done, nav)
   ============================================================ */
function refreshStaticText(){
  document.getElementById("hdrSub").textContent = tr('headerSub');
  document.getElementById("introTitle").textContent = tr('introTitle');
  document.getElementById("introBody").textContent = tr('introBody');
  document.getElementById("btnStart").textContent = tr('start');
  document.getElementById("btnBack").textContent = tr('back');
  document.getElementById("btnNext").textContent = tr('next');
  document.getElementById("btnSubmit").textContent = tr('submit');
  document.getElementById("doneTitle").textContent = tr('doneTitle');
  document.getElementById("doneBody").textContent = tr('doneBody');
  document.getElementById("dlIntake").textContent = tr('dlIntake');
  document.getElementById("dlNote").textContent = tr('dlNote');
  document.getElementById("progressLabel").textContent = trFmt('stepOf',{n:currentStep});
}

function renderAllSteps(){
  renderStep1(); renderStep2(); renderStep3(); renderStep4();
  renderStep5(); renderStep6(); renderStep7(); renderStep8();
  refreshConditionals();
}

/* ============================================================
   WIZARD NAVIGATION
   ============================================================ */
const TOTAL = TOTAL_STEPS;
function showStep(n){
  document.querySelectorAll(".step").forEach(s=>{ s.classList.toggle("active", parseInt(s.dataset.step)===n); });
  document.getElementById("progressFill").style.width = Math.round((n-1)/(TOTAL-1)*100)+"%";
  document.getElementById("progressLabel").textContent = trFmt('stepOf',{n:n});
  document.getElementById("btnBack").style.visibility = n===1 ? "hidden":"visible";
  document.getElementById("btnNext").style.display = n===TOTAL ? "none":"block";
  document.getElementById("btnSubmit").style.display = n===TOTAL ? "block":"none";
  if(n===TOTAL) buildReview();
  // keep signature stamps in sync as user moves forward (in case they signed after initial render)
  for(let i=2;i<=8;i++) renderSigStamp("sigStamp"+i);
  // diagram canvases (car/body) are built while their step is display:none, so their
  // canvas dimensions are 0x0 until we resize them once the step is actually visible
  diagramResizers.forEach(fn=>fn());
  window.scrollTo(0,0);
}

function validateStep(n){
  const stepEl = document.querySelector(`.step[data-step="${n}"]`);
  const required = stepEl.querySelectorAll("[required]");
  for(const r of required){ if(!r.value){ r.focus(); return false; } }
  if(n===1){
    if(!sigHasStroke || !sigDataUrl){
      document.getElementById("sigMissingMsg").style.display = "block";
      document.getElementById("sigPadWrap").scrollIntoView({behavior:"smooth", block:"center"});
      return false;
    }
    if(!document.getElementById("consentContact").checked){
      alert(tr('consentContactCheck'));
      return false;
    }
    if(!document.querySelector('input[name="title"]:checked')){
      alert(tr('title_lbl'));
      return false;
    }
  }
  return true;
}

document.getElementById("btnNext").addEventListener("click", ()=>{
  if(!validateStep(currentStep)) return;
  if(currentStep < TOTAL){ currentStep++; showStep(currentStep); }
});
document.getElementById("btnBack").addEventListener("click", ()=>{
  if(currentStep>1){ currentStep--; showStep(currentStep); }
});
document.getElementById("btnStart").addEventListener("click", ()=>{
  document.getElementById("screenIntro").style.display="none";
  document.getElementById("wizardWrap").classList.add("active");
  const today = new Date().toISOString().slice(0,10);
  const regDateInput = document.querySelector('[name="regDate"]');
  if(regDateInput) regDateInput.value = today;
});

function selectLanguage(lang){
  LANG = lang;
  document.getElementById("langOverlay").style.display = "none";
  refreshStaticText();
  renderAllSteps();
}
document.querySelectorAll(".lang-btn").forEach(btn=>{
  btn.addEventListener("click", ()=> selectLanguage(btn.dataset.lang));
});
document.getElementById("btnLangSwap").addEventListener("click", ()=>{
  document.getElementById("langOverlay").style.display = "flex";
});

/* ============================================================
   DATA COLLECTION
   ============================================================ */
function collectFormData(){
  const form = document.getElementById("intakeForm");
  const fd = new FormData(form);
  const data = {};
  for(const [key,val] of fd.entries()){
    if(key.endsWith("[]")){
      const k = key.slice(0,-2);
      if(!data[k]) data[k]=[];
      data[k].push(val);
    } else {
      data[key]=val;
    }
  }
  data.fullName = getFullFormalName();
  data.formalName = [data.title, data.lastName].filter(Boolean).join(" ");

  const complaints = [];
  document.querySelectorAll(".complaint-block").forEach(block=>{
    const idx = block.dataset.idx;
    complaints.push({
      idx,
      location: data["c"+idx+"_location"] || "",
      descriptors: data["c"+idx+"_descriptors"] || [],
      frequency: data["c"+idx+"_frequency"] || "",
      severity: data["c"+idx+"_severity"] || "",
      radiation: data["c"+idx+"_radiation"] || "",
      timing: data["c"+idx+"_timing"] || [],
      change: data["c"+idx+"_change"] || "",
      helps: data["c"+idx+"_helps"] || [],
      worsens: data["c"+idx+"_worsens"] || [],
      relatedPrevious: data["c"+idx+"_relatedPrevious"] || ""
    });
  });
  data._complaints = complaints;

  const ros = [];
  ROS.forEach(([system,items])=>{
    items.forEach(item=>{
      const itemEn = item[0];
      const key = "ros_"+itemEn.replace(/[^a-z]/gi,"");
      ros.push({system:system[0], item:itemEn, value: data[key]||"", after: !!data[key+"_after"]});
    });
  });
  data._ros = ros;
  data._carMarks = marks.car.length;
  data._bodyMarks = marks.body.length;
  return data;
}

/* ============================================================
   PDF GENERATION
   ============================================================ */
function fmtDate(d){
  if(!d) return "____/____/______";
  const parts = d.split("-");
  if(parts.length===3) return `${parts[1]}/${parts[2]}/${parts[0]}`;
  return d;
}
function label(v){ return Array.isArray(v) ? (v.length? v.join(", "):"—") : (v || "—"); }
function newDoc(){ const { jsPDF } = window.jspdf; return new jsPDF({unit:"pt",format:"letter"}); }

function drawLetterhead(doc,title){
  doc.setFillColor(77,127,133);
  doc.rect(0,0,612,64,"F");
  doc.setTextColor(255,255,255);
  doc.setFont("helvetica","bold"); doc.setFontSize(16);
  doc.text(CLINIC.name,40,28);
  doc.setFont("helvetica","normal"); doc.setFontSize(9.5);
  doc.text(`${CLINIC.address}, ${CLINIC.cityStateZip}  |  ${CLINIC.phone}`,40,44);
  doc.setFontSize(13); doc.setFont("helvetica","bold");
  doc.text(title,40,58);
  doc.setTextColor(35,50,56);
}
function pdfCursor(){ return {y:84,pageH:715,x:40,w:532}; }
function ensureSpace(doc,cur,needed){ if(cur.y+needed>cur.pageH){ doc.addPage(); cur.y=50; } }
function h2(doc,cur,text){
  ensureSpace(doc,cur,26);
  doc.setFillColor(232,241,242); doc.rect(cur.x,cur.y-12,cur.w,20,"F");
  doc.setFont("helvetica","bold"); doc.setFontSize(11.5); doc.setTextColor(58,97,103);
  doc.text(text,cur.x+6,cur.y+2);
  doc.setTextColor(35,50,56);
  cur.y += 22;
}
function h3(doc,cur,text){
  ensureSpace(doc,cur,16);
  doc.setFont("helvetica","bolditalic"); doc.setFontSize(10);
  doc.text(text,cur.x,cur.y);
  cur.y += 14;
}
function kv(doc,cur,k,v){
  const val = label(v);
  doc.setFont("helvetica","bold"); doc.setFontSize(9.5);
  const kw = 155;
  const lines = doc.splitTextToSize(val, cur.w-kw);
  ensureSpace(doc,cur, 14*Math.max(lines.length,1)+4);
  doc.text(k,cur.x,cur.y);
  doc.setFont("helvetica","normal");
  doc.text(lines,cur.x+kw,cur.y);
  cur.y += 14*Math.max(lines.length,1)+4;
}
function para(doc,cur,text){
  doc.setFont("helvetica","normal"); doc.setFontSize(9.8);
  const lines = doc.splitTextToSize(text, cur.w);
  ensureSpace(doc,cur,14*lines.length+6);
  doc.text(lines,cur.x,cur.y);
  cur.y += 14*lines.length+8;
}
function blankNote(doc,cur,text){
  doc.setFont("helvetica","italic"); doc.setFontSize(9);
  doc.setTextColor(120,130,135);
  const lines = doc.splitTextToSize(text, cur.w);
  ensureSpace(doc,cur,13*lines.length+6);
  doc.text(lines,cur.x,cur.y);
  cur.y += 13*lines.length+6;
  doc.setTextColor(35,50,56);
}
const PROVIDER_TODO = "[ To be completed by provider following in-person examination. ]";

function addFooterAndSignature(doc, sigImg, signerName, includeSignature){
  const pageCount = doc.internal.getNumberOfPages();
  for(let i=1;i<=pageCount;i++){
    doc.setPage(i);
    doc.setFont("helvetica","normal"); doc.setFontSize(8);
    doc.setTextColor(140,150,155);
    doc.text(`${CLINIC.name}  |  Page ${i} of ${pageCount}`,40,772);
    doc.setTextColor(35,50,56);
    if(includeSignature && sigImg){
      try{
        doc.addImage(sigImg,"PNG",420,742,110,32);
        doc.setFont("helvetica","normal"); doc.setFontSize(7.5); doc.setTextColor(120,130,135);
        doc.text((signerName||""), 420, 748+30);
        doc.setTextColor(35,50,56);
      }catch(e){ /* signature optional */ }
    }
  }
}

function addDiagramImage(doc, cur, dataUrl, caption, maxH){
  if(!dataUrl) return;
  const img = new Image(); // already loaded synchronously via dataURL string sizing below
  // jsPDF can accept a data URL directly with explicit width/height ratio unknown here,
  // so we embed at a fixed width and proportional height using a temp Image to read natural size.
  const w = cur.w * 0.62;
  ensureSpace(doc,cur, (maxH||170)+18);
  doc.addImage(dataUrl,"PNG",cur.x,cur.y,w, maxH||170);
  doc.setFont("helvetica","italic"); doc.setFontSize(8.5); doc.setTextColor(120,130,135);
  doc.text(caption, cur.x, cur.y+(maxH||170)+12);
  doc.setTextColor(35,50,56);
  cur.y += (maxH||170)+26;
}

async function generateIntakePDF(data, carSnap, bodySnap){
  const doc = newDoc();
  drawLetterhead(doc,"Patient Intake Summary");
  const cur = pdfCursor();

  h2(doc,cur,"Patient Information");
  kv(doc,cur,"Full Name",data.fullName);
  kv(doc,cur,"Date of Birth",data.birthDate);
  kv(doc,cur,"Address",[data.address,data.apt,data.city,data.state,data.zip].filter(Boolean).join(", "));
  kv(doc,cur,"Cell Phone",data.cell);
  kv(doc,cur,"Email",data.email);
  kv(doc,cur,"Language / Interpreter",[data.language, data.interpreterNeed?("Interpreter needed: "+data.interpreterNeed):""].filter(Boolean).join(" — "));
  kv(doc,cur,"Consent to electronic contact",data.consentContact?"Yes":"No");

  h2(doc,cur,"Accident Details");
  kv(doc,cur,"Date / Time of Accident",[data.accidentDate,data.accidentTime].filter(Boolean).join(" "));
  kv(doc,cur,"Location",[data.accidentStreet,data.accidentCity].filter(Boolean).join(", "));
  kv(doc,cur,"License Plate",data.licensePlate);
  kv(doc,cur,"Auto Insurance",data.autoInsurance);
  kv(doc,cur,"Injuries",data.injuriesDescribe);
  kv(doc,cur,"Ambulance called",data.ambulance);
  kv(doc,cur,"ER / Hospital",data.erHospital);
  kv(doc,cur,"MassHealth",data.masshealth);
  kv(doc,cur,"MassHealth Card",data.masshealthCard);
  kv(doc,cur,"MassHealth ID",data.masshealthId);
  kv(doc,cur,"Private Health Insurance",data.privateInsurance);
  kv(doc,cur,"Health Insurance Card",data.healthInsCard);
  kv(doc,cur,"Bodyshop",data.bodyshopWhich);
  kv(doc,cur,"Rideshare",data.rideshareWhich);
  kv(doc,cur,"Police Report",data.policeReport);
  kv(doc,cur,"Accident Description",data.accidentDescription);
  kv(doc,cur,"PIP Claim #",data.pipClaimNumber);
  kv(doc,cur,"Policy #",data.policyNumber);
  kv(doc,cur,"Policy Holder",data.policyHolderName);
  kv(doc,cur,"Policy Holder DOB",data.policyHolderDob);
  if(carSnap) addDiagramImage(doc,cur,carSnap,"Patient-marked vehicle damage diagram",150);

  h2(doc,cur,"Pain Diagram");
  kv(doc,cur,"Pain Intensity (0-10)",data.painIntensity);
  if(bodySnap) addDiagramImage(doc,cur,bodySnap,"Patient-marked pain diagram",230);

  h2(doc,cur,"Medical History");
  kv(doc,cur,"Surgery",data.mh_surgery==="Yes" ? `Yes — ${data.mh_surgery_what||""} (${data.mh_surgery_when||""})` : data.mh_surgery);
  kv(doc,cur,"Daily medication",data.mh_meds==="Yes" ? `Yes — ${data.mh_meds_what||""}, prescribed by ${data.mh_meds_who||""}` : data.mh_meds);
  kv(doc,cur,"Health problems",data.mh_health==="Yes" ? `Yes — ${data.mh_health_what||""} since ${data.mh_health_since||""}` : data.mh_health);
  kv(doc,cur,"Previous accident",data.mh_prev_accident==="Yes" ? `Yes — ${data.mh_prev_what||""} (${data.mh_prev_when||""}), treatment: ${data.mh_prev_treatment||""}` : data.mh_prev_accident);
  kv(doc,cur,"Family history",data.mh_family);
  kv(doc,cur,"Critical conditions",data.mh_critical);

  h2(doc,cur,"MVA Chief Complaints");
  kv(doc,cur,"Cause of injury",data.causeOfInjury);
  kv(doc,cur,"Date of injury",data.dateOfInjury);
  kv(doc,cur,"Position in vehicle",data.positionInVehicle);
  kv(doc,cur,"Restrained",data.restrained);
  kv(doc,cur,"Airbag deployed",data.airbagDeploy);
  kv(doc,cur,"Head hit head rest",data.headHitHeadrest);
  kv(doc,cur,"Head position during impact",data.headDuringImpact);
  kv(doc,cur,"Contact w/ vehicle interior",data.contactInterior);
  kv(doc,cur,"Body part contacted",data.bodyPartContact);
  kv(doc,cur,"Vehicle part contacted",data.vehiclePartContact);
  kv(doc,cur,"Head injury",data.headInjury);
  kv(doc,cur,"Loss of consciousness",data.lossConsciousness);
  kv(doc,cur,"Police at scene",data.policeAtScene);
  kv(doc,cur,"Accident report filed",data.accidentReport);
  kv(doc,cur,"EMS at scene",data.emsAtScene);
  kv(doc,cur,"Transport to ER",data.transportER);
  kv(doc,cur,"Imaging done",data.imagingDone);
  IMAGING_RESULT_KEYS.forEach(([key,en])=>{ if(data["imgres_"+key]) kv(doc,cur,en+" result",data["imgres_"+key]); });

  h2(doc,cur,"Complaint Details");
  data._complaints.forEach(c=>{
    doc.setFont("helvetica","bold"); doc.setFontSize(10);
    ensureSpace(doc,cur,16);
    doc.text(`Complaint #${c.idx}: ${c.location||"(location not specified)"}`,cur.x,cur.y);
    cur.y+=14;
    kv(doc,cur,"Quality",c.descriptors);
    kv(doc,cur,"Frequency",c.frequency);
    kv(doc,cur,"Severity (0-10)",c.severity);
    kv(doc,cur,"Radiation",c.radiation);
    kv(doc,cur,"When felt",c.timing);
    kv(doc,cur,"Change since accident",c.change);
    kv(doc,cur,"What helps",c.helps);
    kv(doc,cur,"What worsens",c.worsens);
    kv(doc,cur,"Related to previous episode",c.relatedPrevious);
    cur.y += 6;
  });

  h2(doc,cur,"Since the Accident");
  kv(doc,cur,"Treatment received",data.treatmentSince);
  kv(doc,cur,"Work situation",[data.workSituation,data.workNotWorkingReason].flat().filter(Boolean).join(" — "));
  kv(doc,cur,"Social habits",data.socialHabits);
  kv(doc,cur,"Exercise change",data.exerciseChange);
  kv(doc,cur,"Diet change",data.dietChange);

  h2(doc,cur,"Review of Systems");
  const posROS = data._ros.filter(r=>r.value==="Y");
  kv(doc,cur,"Positive findings", posROS.length ? posROS.map(r=>`${r.item}${r.after?" (after accident)":""}`).join("; ") : "None reported");

  h2(doc,cur,"Signature");
  kv(doc,cur,"Patient Signature",data.fullName);
  kv(doc,cur,"Date",data.regDate);

  addFooterAndSignature(doc, sigDataUrl, data.fullName, true);
  return doc;
}

/* ---- Doctor's Note: mirrors the clinic's SOAP note example exactly in
   structure/section order. Subjective + history sections are auto-filled
   from the patient's own answers, using formal address (Title LastName).
   Objective / Assessment / Diagnosis / Plan are intentionally left blank —
   they require the treating provider's in-person examination. ---- */
function composeMechanismParagraph(data){
  const formal = data.formalName || data.fullName || "The patient";
  const cause = (data.causeOfInjury||"a motor vehicle").toLowerCase();
  const dateAcc = fmtDate(data.accidentDate);
  let s = `${formal} presents to office today for complaint(s) resulting from a ${cause} incident on ${dateAcc}. `;
  if(data.positionInVehicle) s += `${formal} was positioned as the ${data.positionInVehicle.toLowerCase()}, and when questioned about restraint use, reported: ${data.restrained||"not reported"}. `;
  if(data.airbagDeploy) s += `The air bag deployment status was: ${data.airbagDeploy}. `;
  if(data.headHitHeadrest) s += `${formal} recalled the following regarding head contact with the head restraint: ${data.headHitHeadrest}. `;
  if(data.headDuringImpact) s += `${formal} reported that ${(formal.split(' ').pop())} was looking ${data.headDuringImpact.toLowerCase()} at the time of impact. `;
  if(data.contactInterior){
    s += `Patient contact with the vehicle interior: ${data.contactInterior}`;
    if(data.contactInterior==="Yes" && data.bodyPartContact && data.bodyPartContact.length) s += ` (${data.bodyPartContact.join(", ")}, contacting the ${(data.vehiclePartContact||[]).join(", ")||"vehicle interior"})`;
    s += ". ";
  }
  s += `Patient related he/she ${data.headInjury==="Yes"?"did":"did not"} receive a head injury and ${data.lossConsciousness==="Yes"?"did":"did not"} lose consciousness. `;
  s += `Police ${data.policeAtScene==="Yes"?"did arrive":"did not arrive"} at the scene`;
  s += data.accidentReport==="Yes" ? " and an accident report was completed. " : ". ";
  s += `EMS ${data.emsAtScene==="Yes"?"was":"was not"} at the scene. `;
  s += `${formal} ${data.transportER==="Denied ER transport"?"denied":"accepted"} ER transport from the scene`;
  if(data.treatmentSince && data.treatmentSince.length) s += ` and the following has occurred since: ${data.treatmentSince.join(", ").toLowerCase()}.`;
  else s += ".";
  return s;
}
function composeComplaintBlock(doc,cur,c,idx){
  h3(doc,cur, idx>1 ? `Complaint #${idx}:` : "Current history:");
  if(idx===1){
    kv(doc,cur,"Chief complaint","Reports an acute complaint in the "+(c.location||"region(s) as noted")+".");
    kv(doc,cur,"Frequency/quality", [c.frequency, (c.descriptors||[]).join(", ")].filter(Boolean).join(" — described as ") || "Not specified");
    kv(doc,cur,"Change in complaint", c.change ? `Complaint has ${c.change.toLowerCase()} since onset${c.severity!==""?`, pain scale presently rated ${c.severity}/10 (10 being most severe) using the Visual Analog Scale`:""}.` : "Not specified");
    kv(doc,cur,"Radiation of symptoms", c.radiation || "Not specified");
    kv(doc,cur,"Modifying factors", [c.helps&&c.helps.length?("Relieved by: "+c.helps.join(", ").toLowerCase()):"", c.worsens&&c.worsens.length?("Aggravated by: "+c.worsens.join(", ").toLowerCase()):""].filter(Boolean).join("; ") || "Not specified");
    kv(doc,cur,"ADL deficits", c.worsens&&c.worsens.length ? `Explains ${c.worsens.join(", ").toLowerCase()} has become difficult.` : "Not specified");
    kv(doc,cur,"Previous episodes", c.relatedPrevious==="Yes" ? "Reports past episodes" : (c.relatedPrevious==="No" ? "Denies past episodes" : "Not specified"));
    kv(doc,cur,"Previous care", "See treatment received since accident, below.");
    kv(doc,cur,"Recent diagnostic tests", "See imaging section, above.");
  } else {
    para(doc,cur, `Discomfort in the following region(s): ${c.location||"not specified"}${c.descriptors&&c.descriptors.length?` described as ${c.descriptors.join(" and ").toLowerCase()}`:""}. This complaint has ${c.change?c.change.toLowerCase():"not changed"} since onset. Frequency: ${c.frequency||"not specified"}. Severity presently rated ${c.severity!==""?c.severity+"/10":"not rated"} using Verbal Analog Scale.`);
  }
}

function generateDoctorsNotePDF(data){
  const doc = newDoc();
  drawLetterhead(doc,"Initial Exam — Clinical Note (Draft)");
  const cur = pdfCursor();
  const formal = data.formalName || data.fullName;

  blankNote(doc,cur,"This draft is auto-generated from the patient's self-reported intake, following the format of the clinic's reference SOAP note. Objective examination, Assessment, Diagnosis, and Plan must be completed by the treating provider after an in-person exam and are NOT pre-filled.");

  h2(doc,cur,"Patient / Visit Information");
  kv(doc,cur,"Patient", (data.lastName? (data.lastName+", "+(data.firstName||"")) : data.fullName));
  kv(doc,cur,"MRN","[to be assigned]");
  kv(doc,cur,"DOB",data.birthDate);
  kv(doc,cur,"Payer","[front desk to complete]");
  kv(doc,cur,"Insured Id",data.pipClaimNumber || "[front desk to complete]");
  kv(doc,cur,"Date of Service",new Date().toLocaleDateString("en-US"));
  kv(doc,cur,"Case","MVA (1) - "+fmtDate(data.accidentDate));
  kv(doc,cur,"Provider","[to be assigned]");
  kv(doc,cur,"Appointment Type","MVA - Initial Exam");

  h2(doc,cur,"Subjective:");
  h3(doc,cur,"Mechanism of injury:");
  para(doc,cur,composeMechanismParagraph(data));

  data._complaints.forEach((c,i)=> composeComplaintBlock(doc,cur,c,i+1));
  para(doc,cur, data.interpreterNeed==="Yes" ? "Interpreter was available for the visit." : "Interpreter was not requested for this visit.");

  h2(doc,cur,"Review of systems:");
  const bySystem = {};
  data._ros.forEach(r=>{ (bySystem[r.system]=bySystem[r.system]||[]).push(r); });
  Object.keys(bySystem).forEach(sys=>{
    const items = bySystem[sys];
    const positives = items.filter(r=>r.value==="Y");
    const line = positives.length ? `Reports ${positives.map(r=>r.item.toLowerCase()).join(" and ")}` : `Reports no history of ${sys.toLowerCase()} complaints`;
    kv(doc,cur, sys+":", line);
  });

  h2(doc,cur,"Past, family and social history:");
  kv(doc,cur,"Surgery",data.mh_surgery==="Yes" ? `${data.mh_surgery_what||""} (${data.mh_surgery_when||""})` : "None reported");
  kv(doc,cur,"Medications",data.mh_meds==="Yes" ? `${data.mh_meds_what||""}` : "None reported");
  kv(doc,cur,"Illnesses",data.mh_health==="Yes" ? `${data.mh_health_what||""}` : "None reported");
  kv(doc,cur,"Accidents",data.mh_prev_accident==="Yes" ? `${data.mh_prev_what||""} (${data.mh_prev_when||""})` : "No previous trauma reported");
  kv(doc,cur,"Family history",data.mh_family && data.mh_family.length ? "Reports "+data.mh_family.join(", ") : "Denies Hx of diabetes, cancer, hypertension");
  kv(doc,cur,"Employment status",data.workSituation||"Not specified");
  kv(doc,cur,"Social habits",data.socialHabits && data.socialHabits.length && !(data.socialHabits.length===1 && data.socialHabits[0]==="None") ? data.socialHabits.join(", ") : "Denies smoking or recreational drug use");
  kv(doc,cur,"Exercise habits",data.exerciseChange||"Not specified");
  kv(doc,cur,"Diet and nutrition",data.dietChange||"Not specified");
  kv(doc,cur,"Sexual relations","Not addressed");
  kv(doc,cur,"Critical conditions flagged",data.mh_critical && data.mh_critical.length ? data.mh_critical : "None");

  h2(doc,cur,"Vital signs:");
  kv(doc,cur,"Temperature",PROVIDER_TODO);
  kv(doc,cur,"Pulse",PROVIDER_TODO);
  kv(doc,cur,"Blood pressure",PROVIDER_TODO);

  h2(doc,cur,"Objective:");
  h3(doc,cur,"Range of motion (cervical):");
  blankNote(doc,cur,"Flexion / Extension / Left & Right lateral flexion / Left & Right rotation — "+PROVIDER_TODO);
  h3(doc,cur,"Range of motion (thoraco-lumbar):");
  blankNote(doc,cur,"Flexion / Extension / Left & Right lateral flexion / Left & Right rotation — "+PROVIDER_TODO);
  h3(doc,cur,"Neurological assessment (cervical and lumbar):");
  blankNote(doc,cur,"Sensory / Deep tendon reflexes / Upper & lower extremity motor testing — "+PROVIDER_TODO);
  h3(doc,cur,"Orthopedic tests:");
  blankNote(doc,cur,"Cervical compression / Shoulder depression / Jackson foraminal compression / Distraction test / Kemp's test — "+PROVIDER_TODO);
  h3(doc,cur,"Inspection / Percussion / Palpation:");
  blankNote(doc,cur,PROVIDER_TODO);
  h3(doc,cur,"Postural Analysis:");
  blankNote(doc,cur,PROVIDER_TODO);
  h3(doc,cur,"Spinal Stability / Restriction(s) / Subluxation(s):");
  blankNote(doc,cur,PROVIDER_TODO);
  h3(doc,cur,"Extraspinal restrictions/subluxations:");
  blankNote(doc,cur,PROVIDER_TODO);
  h3(doc,cur,"Tissue Tone Changes:");
  blankNote(doc,cur,PROVIDER_TODO);

  h2(doc,cur,"Assessment:");
  blankNote(doc,cur,PROVIDER_TODO);

  h2(doc,cur,"Diagnosis:");
  blankNote(doc,cur,"[ ICD-10 code(s) to be determined by provider based on examination findings. ]");

  h2(doc,cur,"Physical examination clinical correlation:");
  blankNote(doc,cur,PROVIDER_TODO);

  h2(doc,cur,"Plan:");
  h3(doc,cur,"Encounter Charges:");
  blankNote(doc,cur,"[ CPT code(s), modifiers, and units to be determined by provider. ]");
  h3(doc,cur,"Treatment plan:");
  blankNote(doc,cur,"Frequency / ADL short-long term goals / Chiropractic Spinal Adjustment / Supportive therapies / Treatment effectiveness / Home-Self Care / Next visit — "+PROVIDER_TODO);
  h3(doc,cur,"Treatment today:");
  blankNote(doc,cur,PROVIDER_TODO);

  ensureSpace(doc,cur,50);
  cur.y += 8;
  doc.setFont("helvetica","normal"); doc.setFontSize(9.5);
  doc.text("Provider signature: ______________________________",cur.x,cur.y);
  cur.y += 20;
  doc.text("Date: ______________________",cur.x,cur.y);

  addFooterAndSignature(doc, null, "", false);
  return doc;
}

/* ============================================================
   SUBMIT FLOW
   ============================================================ */
function escapeHtml(s){ return String(s).replace(/[&<>"']/g, c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c])); }
async function blobToBase64(blob){
  return new Promise((resolve,reject)=>{
    const reader = new FileReader();
    reader.onloadend = ()=>resolve(reader.result.split(",")[1]);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}

let lastIntakeDoc = null, lastNoteDoc = null, lastFileBase = "patient";

document.getElementById("btnSubmit").addEventListener("click", async ()=>{
  const errEl = document.getElementById("submitError");
  errEl.style.display="none";
  const finalConsent = document.getElementById("finalConsent").checked;
  if(!sigDataUrl || !finalConsent){
    errEl.textContent = tr('errSignAndCheck');
    errEl.style.display="block";
    return;
  }
  document.getElementById("btnSubmit").disabled = true;
  document.getElementById("btnSubmit").textContent = tr('submitting');

  const data = collectFormData();
  lastFileBase = (data.fullName||"patient").replace(/[^a-z0-9]/gi,"_");

  const carImg = document.getElementById("car_img");
  const bodyImg = document.getElementById("body_img");
  const [carSnap, bodySnap] = await Promise.all([
    marks.car.length ? snapshotDiagram(carImg, marks.car) : Promise.resolve(null),
    marks.body.length ? snapshotDiagram(bodyImg, marks.body) : Promise.resolve(null)
  ]);

  const intakeDoc = await generateIntakePDF(data, carSnap, bodySnap);
  const noteDoc = generateDoctorsNotePDF(data);
  lastIntakeDoc = intakeDoc; lastNoteDoc = noteDoc;

  document.getElementById("wizardWrap").classList.remove("active");
  document.getElementById("wizardNav").style.display="none";
  document.getElementById("screenDone").classList.add("active");

  const statusEl = document.getElementById("sendStatus");
  statusEl.textContent = tr('sendingStatus');

  if(!APPS_SCRIPT_URL){
    statusEl.textContent = "Email delivery isn't configured — please use the download buttons below.";
  } else {
    try{
      const intakeB64 = await blobToBase64(intakeDoc.output("blob"));
      const noteB64 = await blobToBase64(noteDoc.output("blob"));
      const bodyHtml = `<p>A new MVA intake was submitted through the online form.</p>
        <p><b>Patient:</b> ${escapeHtml(data.fullName||"")}<br>
        <b>Date of Accident:</b> ${escapeHtml(data.accidentDate||"")}<br>
        <b>Language:</b> ${LANG}<br>
        <b>Submitted:</b> ${new Date().toLocaleString("en-US")}</p>
        <p>Both the completed intake form and a draft clinical note (formatted after the clinic's
        SOAP note example — Subjective/history auto-filled, Objective/Assessment/Diagnosis/Plan
        left for the provider) are attached as PDFs.</p>`;
      const payload = {
        subject: `MVA Intake — ${data.fullName||"New Patient"}`,
        bodyHtml: bodyHtml,
        attachments: [
          { filename: `Intake_${lastFileBase}.pdf`, mimeType: "application/pdf", base64: intakeB64 },
          { filename: `DoctorsNote_${lastFileBase}.pdf`, mimeType: "application/pdf", base64: noteB64 }
        ]
      };
      const resp = await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        headers: {"Content-Type":"text/plain;charset=utf-8"},
        body: JSON.stringify(payload)
      });
      let ok = resp.ok;
      try{ const j = await resp.json(); ok = ok && j.ok !== false; }catch(e){}
      statusEl.textContent = ok ? tr('sentOk') : tr('sentFail');
    } catch(err){
      statusEl.textContent = tr('sentFail');
    }
  }
});

document.getElementById("dlIntake").addEventListener("click", ()=>{ if(lastIntakeDoc) lastIntakeDoc.save(`Intake_${lastFileBase}.pdf`); });
document.getElementById("dlNote").addEventListener("click", ()=>{ if(lastNoteDoc) lastNoteDoc.save(`DoctorsNote_${lastFileBase}.pdf`); });

/* ============================================================
   INIT
   ============================================================ */
showStep(1);

