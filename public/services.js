const services = [
  {
    id: 1,
    name: "Cuando estés enojada",
    description:
      "Una carta para ti cuando estés enojada, recordándote nuestro amor y comprensión.",
    image: "love.png",
    carta:
      "Mi amor,\n\nSé que en este momento estás enojada y frustrada. Quiero que sepas que entiendo tus sentimientos y que valoro cada emoción que experimentas. Estoy aquí para escucharte, comprenderte y trabajar juntos en resolver cualquier conflicto que tengamos.\n\nNuestro amor es más fuerte que cualquier enojo momentáneo. Estamos juntos en esto, y juntos superaremos cualquier obstáculo que se interponga en nuestro camino. Recuerda, siempre estaré aquí para ti, enojada o feliz, en las buenas y en las malas.\n\nCon amor,\nMau",
  },

  {
    id: 2,
    name: "Cuando estés triste",
    description:
      "Una carta para ti cuando te sientas triste, trayendo consuelo y esperanza a tu corazón.",
    image: "love.png",
    carta:
      "Mi amor,\n\nSé que en estos momentos te sientes triste y abrumada. Quiero que sepas que no estás sola; siempre estoy aquí para ti, listo para brindarte todo el amor y apoyo que necesitas. Tus lágrimas son las mías, y tu tristeza me parte el corazón.\n\nJuntos superaremos esta tristeza. Siempre recuerda que eres fuerte, que eres hermosa y que tienes un corazón lleno de amor. Mejores momentos están por venir, y enfrentaremos el futuro juntos.\n\nCon amor y abrazos cálidos,\nMau",
  },

  {
    id: 3,
    name: "Cuando estés preocupada",
    description:
      "Una carta para ti en momentos de preocupación, recordándote que todo estará bien.",
    image: "love.png",
    carta:
      "Mi amor,\n\nEntiendo que te encuentras preocupada en este momento, pero quiero que sepas que no estás sola en esto. Estoy aquí para compartir tus preocupaciones y ayudarte a encontrar soluciones. Recuerda que juntos podemos superar cualquier desafío que la vida nos presente.\n\nNuestro amor y nuestra fortaleza como pareja nos guiarán a través de estos momentos difíciles. Siempre estaremos uno para el otro, para apoyarnos mutuamente en todo momento.\n\nCon amor y calma,\nMau",
  },

  {
    id: 4,
    name: "Cuando estés ansiosa",
    description:
      "Una carta para ti en momentos de ansiedad, recordándote respirar y encontrar calma.",
    image: "love.png",
    carta:
      "Mi amor,\n\nSé que la ansiedad puede ser abrumadora, pero quiero recordarte que eres fuerte y capaz de superar cualquier desafío que se presente. Estoy aquí para apoyarte y recordarte que todo estará bien. Respiremos juntos, encontraremos la calma en medio de la tormenta.\n\nEres valiente y hermosa, y juntos encontraremos formas de aliviar tu ansiedad. Nuestro amor y nuestra conexión son una fuente de paz y tranquilidad.\n\nCon amor y serenidad,\nMau",
  },

  {
    id: 5,
    name: "Cuando estés estresada",
    description:
      "Una carta para ti cuando estés estresada, ofreciendo consejos para encontrar tranquilidad.",
    image: "love.png",
    carta:
      "Mi amor,\n\nEntiendo que estás estresada en este momento, pero quiero recordarte que eres increíblemente fuerte y capaz. Estamos juntos en esto, y juntos podemos encontrar formas de aliviar tu estrés y encontrar un equilibrio en tu vida.\n\nSiempre estoy aquí para apoyarte y ayudarte a superar cualquier obstáculo. Confía en nuestro amor y en la fortaleza que encontramos el uno en el otro.\n\nCon amor y tranquilidad,\nMau",
  },

  {
    id: 6,
    name: "Cuando tengas insomnio",
    description:
      "Una carta para acompañarte en las noches de insomnio, brindándote paz y serenidad.",
    image: "love.png",
    carta:
      "Mi amor,\n\nSé que las noches de insomnio pueden ser agotadoras y desafiantes. Quiero que sepas que aunque no esté a tu lado físicamente, mi corazón está contigo. Te envío todo mi amor y energía para que puedas encontrar la paz y descansar.\n\nImagina que estoy abrazándote y acariciando tu cabello suavemente. En nuestros sueños nos encontraremos y juntos dormiremos plácidamente.\n\nCon amor y sueños dulces,\nMau",
  },

  {
    id: 7,
    name: "Cuando me extrañes",
    description:
      "Una carta para esos momentos en que me extrañes, recordándote que siempre estamos conectados.",
    image: "love.png",
    carta:
      "Mi amor,\n\nAunque estemos separados en este momento, quiero que sepas que siempre estás en mi corazón y pensamientos. La distancia no puede disminuir el amor que siento por ti. Cada momento lejos de ti me hace anhelarte más.\n\nEstamos conectados por un amor fuerte y especial que trasciende cualquier distancia física. Pronto nos reuniremos y esos momentos de añoranza serán solo un recuerdo.\n\nCon amor y paciencia,\nMau",
  },

  {
    id: 8,
    name: "Cuando te sientas insegura",
    description:
      "Una carta para ti cuando te sientas insegura, recordándote tu fuerza y ​​belleza.",
    image: "love.png",
    carta:
      "Mi amor,\n\nSé que a veces te sientes insegura, pero quiero recordarte lo increíble que eres. Eres hermosa, fuerte y valiosa de una manera única. Tienes la capacidad de enfrentar cualquier desafío que se cruce en tu camino.\n\nEstoy aquí para apoyarte, amarte y recordarte tu increíble valía. Eres mi inspiración y te amo tal como eres.\n\nCon amor y admiración,\nMau",
  },

  {
    id: 9,
    name: "Cuando estés decepcionada",
    description:
      "Una carta para ti cuando te sientas decepcionada, trayendo palabras de aliento y perspectiva.",
    image: "love.png",
    carta:
      "Mi amor,\n\nSé que en este momento te sientes decepcionada, pero quiero recordarte que las decepciones son solo obstáculos en el camino. Cada desilusión nos da la oportunidad de aprender y crecer.\n\nEstoy aquí para apoyarte, escucharte y ayudarte a encontrar la esperanza en medio de la desilusión. Nuestro amor es más grande que cualquier decepción.\n\nCon amor y optimismo,\nMau",
  },

  {
    id: 10,
    name: "Cuando estés confundida",
    description:
      "Una carta para guiarte y darte claridad en momentos de confusión.",
    image: "love.png",
    carta:
      "Mi amor,\n\nSé que te sientes confundida en este momento, pero quiero que sepas que estamos juntos en esto. Juntos encontraremos la claridad y el camino a seguir.\n\nNuestro amor es la guía que nos llevará a través de cualquier confusión. Siempre estaré aquí para ayudarte a entender y tomar decisiones.\n\nCon amor y entendimiento,\nMau",
  },

  {
    id: 11,
    name: "Cuando estés feliz",
    description: "Una carta para celebrar tu felicidad.",
    image: "love.png",
    carta:
      "Mi amor,\n\nEs un día maravilloso para celebrar tu felicidad. Tu alegría es mi alegría, y cada risa tuya ilumina mi mundo.\n\nEres la razón de mi felicidad, y estoy agradecido por cada momento que compartimos juntos. Que tu felicidad perdure para siempre.\n\nCon amor y gratitud,\nMau",
  },

  {
    id: 12,
    name: "Cuando te sientas sola",
    description:
      "Una carta para ti cuando te sientas sola, recordándote que siempre estoy aquí para ti.",
    image: "love.png",
    carta:
      "Mi amor,\n\nNunca estás sola, porque siempre estoy contigo en pensamiento y corazón. Aunque la distancia física pueda separarnos en ocasiones, nuestro amor nos mantiene unidos.\n\nSiempre estoy aquí para ti, en cada momento de soledad. Nuestro amor es más fuerte que cualquier distancia.\n\nCon amor y cercanía,\nMau",
  },
];

export default services;
