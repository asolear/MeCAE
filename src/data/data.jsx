const data =[
    {
       FICHA:"AGR010: Pantallas térmicas en invernaderos",
       CODIGO:"AGR010",
       VERSION:"V1.0",
       SECTOR:"Agrario",
       PAGI:9,
       PAGF:19,
       FORMULARIO:"CAEs/BOE-A-2024-14816.pdf",
       CARPETA:"CAES"
    },
    {
       FICHA:"AGR020: Recuperación del calor del proceso de preenfriamiento de la leche para usos térmicos en la explotación ganadera",
       CODIGO:"AGR020",
       VERSION:"V1.1",
       SECTOR:"Agrario",
       PAGI:19,
       PAGF:25,
       FORMULARIO:"CAEs/BOE-A-2024-14816.pdf",
       CARPETA:"CAES"
    },
    {
       FICHA:"IND010: Mejora del aislamiento de tuberías y superficies planas de instalaciones y equipos utilizados en procesos industriales para temperaturas de más de 60°",
       CODIGO:"IND010",
       VERSION:"V1.1",
       SECTOR:"Industrial",
       PAGI:25,
       PAGF:43,
       FORMULARIO:"CAEs/BOE-A-2024-14816.pdf",
       CARPETA:"CAES"
    },
    {
       FICHA:"IND020: Sustitución del refrigerante de una instalación Frigorífica",
       CODIGO:"IND020",
       VERSION:"V1.1",
       SECTOR:"Industrial",
       PAGI:43,
       PAGF:53,
       FORMULARIO:"CAEs/BOE-A-2024-14816.pdf",
       CARPETA:"CAES"
    },
    {
       FICHA:"IND030: Sustitución de compresor para instalación Frigorífica",
       CODIGO:"IND030",
       VERSION:"V1.1",
       SECTOR:"Industrial",
       PAGI:53,
       PAGF:63,
       FORMULARIO:"CAEs/BOE-A-2024-14816.pdf",
       CARPETA:"CAES"
    },
    {
       FICHA:"IND040: Sustitución de caldera de combustión existente por bomba de calor",
       CODIGO:"IND040",
       VERSION:"V1.1",
       SECTOR:"Industrial",
       PAGI:63,
       PAGF:83,
       FORMULARIO:"CAEs/BOE-A-2024-14816.pdf",
       CARPETA:"CAES"
    },
    {
       FICHA:"IND050: Sustitución del sistema de iluminación por sistema con fuentes luminosas y/o luminarias tipo LED",
       CODIGO:"IND050",
       VERSION:"V1.1",
       SECTOR:"Industrial",
       PAGI:84,
       PAGF:91,
       FORMULARIO:"CAEs/BOE-A-2024-14816.pdf",
       CARPETA:"CAES"
    },
    {
       FICHA:"IND060: Sustitución de generador para climatización por bomba de calor de accionamiento eléctrico",
       CODIGO:"IND060",
       VERSION:"V1.1",
       SECTOR:"Industrial",
       PAGI:91,
       PAGF:106,
       FORMULARIO:"CAEs/BOE-A-2024-14816.pdf",
       CARPETA:"CAES"
    },
    {
       FICHA:"IND070: Sustitución de bomba de alta presión por una bomba de pistones axiales",
       CODIGO:"IND070",
       VERSION:"V1.1",
       SECTOR:"Industrial",
       PAGI:106,
       PAGF:112,
       FORMULARIO:"CAEs/BOE-A-2024-14816.pdf",
       CARPETA:"CAES"
    },
    {
       FICHA:"IND080: Instalación de una cámara isobárica o intercambiador de presión (CIP)",
       CODIGO:"IND080",
       VERSION:"V1.1",
       SECTOR:"Industrial",
       PAGI:112,
       PAGF:120,
       FORMULARIO:"CAEs/BOE-A-2024-14816.pdf",
       CARPETA:"CAES"
    },
    {
       FICHA:"IND081: Sustitución del recuperador, cámara isobárica o intercambiador de presión (CIP)",
       CODIGO:"IND081",
       VERSION:"V1.1",
       SECTOR:"Industrial",
       PAGI:120,
       PAGF:127,
       FORMULARIO:"CAEs/BOE-A-2024-14816.pdf",
       CARPETA:"CAES"
    },
    {
       FICHA:"IND090: Sustitución o reemplazo de compresor de aire por uno más eficiente",
       CODIGO:"IND090",
       VERSION:"V1.1",
       SECTOR:"Industrial",
       PAGI:127,
       PAGF:136,
       FORMULARIO:"CAEs/BOE-A-2024-14816.pdf",
       CARPETA:"CAES"
    },
    {
       FICHA:"IND110: Recuperación de calor de un compresor para uso de calefacción",
       CODIGO:"IND110",
       VERSION:"V1.1",
       SECTOR:"Industrial",
       PAGI:136,
       PAGF:144,
       FORMULARIO:"CAEs/BOE-A-2024-14816.pdf",
       CARPETA:"CAES"
    },
    {
       FICHA:"IND120: Sustitución de quemador modulante de caldera de combustión de gas",
       CODIGO:"IND120",
       VERSION:"V1.1",
       SECTOR:"Industrial",
       PAGI:144,
       PAGF:151,
       FORMULARIO:"CAEs/BOE-A-2024-14816.pdf",
       CARPETA:"CAES"
    },
    {
       FICHA:"IND140: Reforma, sustitución o nueva instalación de planta enfriadora de procesos de alta eficiencia",
       CODIGO:"IND140",
       VERSION:"V1.1",
       SECTOR:"Industrial",
       PAGI:151,
       PAGF:161,
       FORMULARIO:"CAEs/BOE-A-2024-14816.pdf",
       CARPETA:"CAES"
    },
    {
       FICHA:"IND150: Central frigorífica de alta eficiencia con sistemas de refrigeración directa",
       CODIGO:"IND150",
       VERSION:"V1.1",
       SECTOR:"Industrial",
       PAGI:161,
       PAGF:171,
       FORMULARIO:"CAEs/BOE-A-2024-14816.pdf",
       CARPETA:"CAES"
    },
    {
       FICHA:"IND160: Unidad condensadora de alta eficiencia",
       CODIGO:"IND160",
       VERSION:"V1.1",
       SECTOR:"Industrial",
       PAGI:171,
       PAGF:181,
       FORMULARIO:"CAEs/BOE-A-2024-14816.pdf",
       CARPETA:"CAES"
    },
    {
       FICHA:"IND170: Sustitución de motores eléctricos de inducción",
       CODIGO:"IND170",
       VERSION:"V1.1",
       SECTOR:"Industrial",
       PAGI:181,
       PAGF:188,
       FORMULARIO:"CAEs/BOE-A-2024-14816.pdf",
       CARPETA:"CAES"
    },
    {
       FICHA:"IND180: Sustitución de intercambiador/es de calor para la reducción de la resistividad térmica en sistemas industriales",
       CODIGO:"IND180",
       VERSION:"V1.1",
       SECTOR:"Industrial",
       PAGI:188,
       PAGF:195,
       FORMULARIO:"CAEs/BOE-A-2024-14816.pdf",
       CARPETA:"CAES"
    },
    {
       FICHA:"IND190: División de líneas de evaporación en instalación frigorífica centralizada",
       CODIGO:"IND190",
       VERSION:"V1.1",
       SECTOR:"Industrial",
       PAGI:195,
       PAGF:206,
       FORMULARIO:"CAEs/BOE-A-2024-14816.pdf",
       CARPETA:"CAES"
    },
    {
       FICHA:"IND200: Implantación de sistemas economizadores o multietapa, en instalación frigorífica centralizada o compacta.",
       CODIGO:"IND200",
       VERSION:"V1.1",
       SECTOR:"Industrial",
       PAGI:206,
       PAGF:226,
       FORMULARIO:"CAEs/BOE-A-2024-14816.pdf",
       CARPETA:"CAES"
    },
    {
       FICHA:"IND220: Aumento de la presión de evaporación por cambio a tecnología más eficiente en una instalación frigorífica centralizada o compacta.",
       CODIGO:"IND220",
       VERSION:"V1.1",
       SECTOR:"Industrial",
       PAGI:226,
       PAGF:237,
       FORMULARIO:"CAEs/BOE-A-2024-14816.pdf",
       CARPETA:"CAES"
    },
    {
       FICHA:"IND230: Recuperación de calor desde procesos exotérmicos a otros procesos endotérmicos de la misma planta",
       CODIGO:"IND230",
       VERSION:"V1.1",
       SECTOR:"Industrial",
       PAGI:237,
       PAGF:245,
       FORMULARIO:"CAEs/BOE-A-2024-14816.pdf",
       CARPETA:"CAES"
    },
    {
       FICHA:"IND240: Implantación de variador de velocidad",
       CODIGO:"IND240",
       VERSION:"V1.1",
       SECTOR:"Industrial",
       PAGI:245,
       PAGF:252,
       FORMULARIO:"CAEs/BOE-A-2024-14816.pdf",
       CARPETA:"CAES"
    },
    {
       FICHA:"IND250: Sustitución total o parcial de la instalación térmica por tecnología solar térmica",
       CODIGO:"IND250",
       VERSION:"V1.1",
       SECTOR:"Industrial",
       PAGI:252,
       PAGF:258,
       FORMULARIO:"CAEs/BOE-A-2024-14816.pdf",
       CARPETA:"CAES"
    },
    {
       FICHA:"IND260: Sustitución de un Sistema de Alimentación Ininterrumpida (SAI)",
       CODIGO:"IND260",
       VERSION:"V1.1",
       SECTOR:"Industrial",
       PAGI:258,
       PAGF:267,
       FORMULARIO:"CAEs/BOE-A-2024-14816.pdf",
       CARPETA:"CAES"
    },
    {
       FICHA:"IND270: Sustitución de transporte neumático de sólidos por sistema de transporte mecánico",
       CODIGO:"IND270",
       VERSION:"V1.1",
       SECTOR:"Industrial",
       PAGI:267,
       PAGF:274,
       FORMULARIO:"CAEs/BOE-A-2024-14816.pdf",
       CARPETA:"CAES"
    },
    {
       FICHA:"IND280: Sustitución de bomba por otra más eficiente",
       CODIGO:"IND280",
       VERSION:"V1.1",
       SECTOR:"Industrial",
       PAGI:274,
       PAGF:283,
       FORMULARIO:"CAEs/BOE-A-2024-14816.pdf",
       CARPETA:"CAES"
    },
    {
       FICHA:"IND290: Recuperación de calor en circuito frigorífico",
       CODIGO:"IND290",
       VERSION:"V1.1",
       SECTOR:"Industrial",
       PAGI:283,
       PAGF:290,
       FORMULARIO:"CAEs/BOE-A-2024-14816.pdf",
       CARPETA:"CAES"
    },
    {
       FICHA:"TER010: Rehabilitación de la envolvente térmica de edificios terciarios existentes con superficie afectada mayor del 25%",
       CODIGO:"TER010",
       VERSION:"V1.1",
       SECTOR:"Terciario",
       PAGI:290,
       PAGF:298,
       FORMULARIO:"CAEs/BOE-A-2024-14816.pdf",
       CARPETA:"CAES"
    },
    {
       FICHA:"TER011: Rehabilitación de la envolvente térmica de TER011: Rehabilitación de la envolvente térmica de mayor del 25% (Canarias)",
       CODIGO:"TER011",
       VERSION:"V1.1",
       SECTOR:"Terciario",
       PAGI:298,
       PAGF:306,
       FORMULARIO:"CAEs/BOE-A-2024-14816.pdf",
       CARPETA:"CAES"
    },
    {
       FICHA:"TER020: Rehabilitación de la parte opaca de la envolvente térmica de edificios terciarios con superficie afectada inferior o igual del 25 % de la envolvente térmica final",
       CODIGO:"TER020",
       VERSION:"V1.1",
       SECTOR:"Terciario",
       PAGI:306,
       PAGF:314,
       FORMULARIO:"CAEs/BOE-A-2024-14816.pdf",
       CARPETA:"CAES"
    },
    {
       FICHA:"TER021: Rehabilitación de la parte opaca de la envolvente térmica de edificios terciarios con superficie afectada inferior o igual del 25 % de la envolvente térmica final (Canarias)",
       CODIGO:"TER021",
       VERSION:"V1.1",
       SECTOR:"Terciario",
       PAGI:314,
       PAGF:322,
       FORMULARIO:"CAEs/BOE-A-2024-14816.pdf",
       CARPETA:"CAES"
    },
    {
       FICHA:"TER030: Sustitución del sistema de iluminación por sistema con fuentes luminosas y/o luminarias tipo LED",
       CODIGO:"TER030",
       VERSION:"V1.1",
       SECTOR:"Terciario",
       PAGI:322,
       PAGF:330,
       FORMULARIO:"CAEs/BOE-A-2024-14816.pdf",
       CARPETA:"CAES"
    },
    {
       FICHA:"TER040: Sustitución de generador de climatización por bomba de calor de accionamiento eléctrico.",
       CODIGO:"TER040",
       VERSION:"V1.1",
       SECTOR:"Terciario",
       PAGI:330,
       PAGF:360,
       FORMULARIO:"CAEs/BOE-A-2024-14816.pdf",
       CARPETA:"CAES"
    },
    {
       FICHA:"TER050: Sistema de automatización y control para edificios del sector terciario (BACS1)",
       CODIGO:"TER050",
       VERSION:"V1.1",
       SECTOR:"Terciario",
       PAGI:360,
       PAGF:375,
       FORMULARIO:"CAEs/BOE-A-2024-14816.pdf",
       CARPETA:"CAES"
    },
    {
       FICHA:"TER060: Renovación o sustitución de ventanas en edificios terciarios existentes",
       CODIGO:"TER060",
       VERSION:"V1.1",
       SECTOR:"Terciario",
       PAGI:375,
       PAGF:383,
       FORMULARIO:"CAEs/BOE-A-2024-14816.pdf",
       CARPETA:"CAES"
    },
    {
       FICHA:"TER061: Renovación o sustitución de ventanas en edificios existentes (Canarias)",
       CODIGO:"TER061",
       VERSION:"V1.1",
       SECTOR:"Terciario",
       PAGI:383,
       PAGF:391,
       FORMULARIO:"CAEs/BOE-A-2024-14816.pdf",
       CARPETA:"CAES"
    },
    {
       FICHA:"TER070: Nueva implantación, sustitución o ampliación de instalación térmica en un edificio y piscina con tecnología solar térmica",
       CODIGO:"TER070",
       VERSION:"V1.1",
       SECTOR:"Terciario",
       PAGI:391,
       PAGF:398,
       FORMULARIO:"CAEs/BOE-A-2024-14816.pdf",
       CARPETA:"CAES"
    },
    {
       FICHA:"TER080: Rehabilitación profunda de un edificio terciario existente",
       CODIGO:"TER080",
       VERSION:"V1.1",
       SECTOR:"Terciario",
       PAGI:398,
       PAGF:405,
       FORMULARIO:"CAEs/BOE-A-2024-14816.pdf",
       CARPETA:"CAES"
    },
    {
       FICHA:"TER090: Sustitución del refrigerante de una instalación frigorífica",
       CODIGO:"TER090",
       VERSION:"V1.1",
       SECTOR:"Terciario",
       PAGI:405,
       PAGF:415,
       FORMULARIO:"CAEs/BOE-A-2024-14816.pdf",
       CARPETA:"CAES"
    },
    {
       FICHA:"TER100: Sustitución de caldera de combustión existente",
       CODIGO:"TER100",
       VERSION:"V1.1",
       SECTOR:"Terciario",
       PAGI:415,
       PAGF:439,
       FORMULARIO:"CAEs/BOE-A-2024-14816.pdf",
       CARPETA:"CAES"
    },
    {
       FICHA:"TER110: Sustitución de compresor para instalación frigorífica o de climatización",
       CODIGO:"TER110",
       VERSION:"V1.1",
       SECTOR:"Terciario",
       PAGI:439,
       PAGF:449,
       FORMULARIO:"CAEs/BOE-A-2024-14816.pdf",
       CARPETA:"CAES"
    },
    {
       FICHA:"TER120: Sustitución de quemador modulante de caldera de combustión de gas",
       CODIGO:"TER120",
       VERSION:"V1.1",
       SECTOR:"Terciario",
       PAGI:449,
       PAGF:456,
       FORMULARIO:"CAEs/BOE-A-2024-14816.pdf",
       CARPETA:"CAES"
    },
    {
       FICHA:"TER140: Reforma, sustitución o nueva instalación de planta enfriadora de procesos de alta eficiencia",
       CODIGO:"TER140",
       VERSION:"V1.1",
       SECTOR:"Terciario",
       PAGI:456,
       PAGF:467,
       FORMULARIO:"CAEs/BOE-A-2024-14816.pdf",
       CARPETA:"CAES"
    },
    {
       FICHA:"TER150: Reforma, sustitución o nueva instalación de central frigorífica de alta eficiencia con sistemas de refrigeración directa",
       CODIGO:"TER150",
       VERSION:"V1.1",
       SECTOR:"Terciario",
       PAGI:467,
       PAGF:478,
       FORMULARIO:"CAEs/BOE-A-2024-14816.pdf",
       CARPETA:"CAES"
    },
    {
       FICHA:"TER160: Sustitución, reforma o nueva instalación de una unidad condensadora de alta eficiencia",
       CODIGO:"TER160",
       VERSION:"V1.1",
       SECTOR:"Terciario",
       PAGI:478,
       PAGF:489,
       FORMULARIO:"CAEs/BOE-A-2024-14816.pdf",
       CARPETA:"CAES"
    },
    {
       FICHA:"TER170: Hibridación en modo paralelo de caldera/s de combustión con bomba de calor de accionamiento eléctrico en edificios no residenciales ubicados en la zona climática A3 o A4",
       CODIGO:"TER170",
       VERSION:"V1.1",
       SECTOR:"Terciario",
       PAGI:489,
       PAGF:506,
       FORMULARIO:"CAEs/BOE-A-2024-14816.pdf",
       CARPETA:"CAES"
    },
    {
       FICHA:"TER171: Hibridación en modo paralelo de caldera/s de combustión con bomba de calor de accionamiento eléctrico en edificios no residenciales ubicados en la zona climática B3 o B4",
       CODIGO:"TER171",
       VERSION:"V1.1",
       SECTOR:"Terciario",
       PAGI:506,
       PAGF:523,
       FORMULARIO:"CAEs/BOE-A-2024-14816.pdf",
       CARPETA:"CAES"
    },
    {
       FICHA:"TER172: Hibridación en modo paralelo de caldera/s de combustión con bomba de calor de accionamiento eléctrico en edificios no residenciales ubicados en la zona climática C1, C2, C3 o C4",
       CODIGO:"TER172",
       VERSION:"V1.1",
       SECTOR:"Terciario",
       PAGI:523,
       PAGF:540,
       FORMULARIO:"CAEs/BOE-A-2024-14816.pdf",
       CARPETA:"CAES"
    },
    {
       FICHA:"TER173: Hibridación en modo paralelo de caldera/s de combustión con bomba de calor de accionamiento eléctrico en edificios no residenciales ubicados en la zona climática D1, D2 o D3",
       CODIGO:"TER173",
       VERSION:"V1.1",
       SECTOR:"Terciario",
       PAGI:540,
       PAGF:557,
       FORMULARIO:"CAEs/BOE-A-2024-14816.pdf",
       CARPETA:"CAES"
    },
    {
       FICHA:"TER174: Hibridación en modo paralelo de caldera/s de combustión con bomba de calor de accionamiento eléctrico en edificios no residenciales ubicados en la zona climática E1",
       CODIGO:"TER174",
       VERSION:"V1.1",
       SECTOR:"Terciario",
       PAGI:557,
       PAGF:574,
       FORMULARIO:"CAEs/BOE-A-2024-14816.pdf",
       CARPETA:"CAES"
    },
    {
       FICHA:"TER175: Hibridación en modo alternativo de caldera de combustión con bomba de calor de accionamiento eléctrico en edificios no residenciales ubicados en la zona climática A3 o A4",
       CODIGO:"TER175",
       VERSION:"V1.1",
       SECTOR:"Terciario",
       PAGI:574,
       PAGF:591,
       FORMULARIO:"CAEs/BOE-A-2024-14816.pdf",
       CARPETA:"CAES"
    },
    {
       FICHA:"TER176: Hibridación en modo alternativo de caldera/s de combustión con bomba de calor de accionamiento eléctrico en edificios no residenciales ubicados en la zona climática B3 o B4",
       CODIGO:"TER176",
       VERSION:"V1.1",
       SECTOR:"Terciario",
       PAGI:591,
       PAGF:608,
       FORMULARIO:"CAEs/BOE-A-2024-14816.pdf",
       CARPETA:"CAES"
    },
    {
       FICHA:"TER177: Hibridación en modo alternativo de caldera/s de combustión con bomba de calor de accionamiento eléctrico en edificios no residenciales ubicados en la zona climática C1, C2, C3 o C4",
       CODIGO:"TER177",
       VERSION:"V1.1",
       SECTOR:"Terciario",
       PAGI:608,
       PAGF:625,
       FORMULARIO:"CAEs/BOE-A-2024-14816.pdf",
       CARPETA:"CAES"
    },
    {
       FICHA:"TER178: Hibridación en modo alternativo de caldera/s de combustión con bomba de calor de accionamiento eléctrico en edificios no residenciales ubicados en la zona climática D1, D2 o D3",
       CODIGO:"TER178",
       VERSION:"V1.1",
       SECTOR:"Terciario",
       PAGI:625,
       PAGF:642,
       FORMULARIO:"CAEs/BOE-A-2024-14816.pdf",
       CARPETA:"CAES"
    },
    {
       FICHA:"TER179: Hibridación en modo alternativo de caldera/s de combustión con bomba de calor de accionamiento eléctrico en edificios no residenciales ubicados en la zona climática E1",
       CODIGO:"TER179",
       VERSION:"V1.1",
       SECTOR:"Terciario",
       PAGI:642,
       PAGF:659,
       FORMULARIO:"CAEs/BOE-A-2024-14816.pdf",
       CARPETA:"CAES"
    },
    {
       FICHA:"TER180: Sustitución del sistema de iluminación vial ambiental",
       CODIGO:"TER180",
       VERSION:"V1.1",
       SECTOR:"Terciario",
       PAGI:659,
       PAGF:666,
       FORMULARIO:"CAEs/BOE-A-2024-14816.pdf",
       CARPETA:"CAES"
    },
    {
       FICHA:"TER190: Reformado de aparatos de refrigeración para alimentos y bebidas de venta directa",
       CODIGO:"TER190",
       VERSION:"V1.1",
       SECTOR:"Terciario",
       PAGI:666,
       PAGF:674,
       FORMULARIO:"CAEs/BOE-A-2024-14816.pdf",
       CARPETA:"CAES"
    },
    {
       FICHA:"TER200: Sustitución de aparato de refrigeración con función de venta directa",
       CODIGO:"TER200",
       VERSION:"V1.1",
       SECTOR:"Terciario",
       PAGI:674,
       PAGF:707,
       FORMULARIO:"CAEs/BOE-A-2024-14816.pdf",
       CARPETA:"CAES"
    },
    {
       FICHA:"TER240: Implantación de variador de velocidad",
       CODIGO:"TER240",
       VERSION:"V1.1",
       SECTOR:"Terciario",
       PAGI:707,
       PAGF:714,
       FORMULARIO:"CAEs/BOE-A-2024-14816.pdf",
       CARPETA:"CAES"
    },
    {
       FICHA:"TER260: Sustitución de un Sistema de Alimentación Ininterrumpida (SAI)",
       CODIGO:"TER260",
       VERSION:"V1.1",
       SECTOR:"Terciario",
       PAGI:714,
       PAGF:723,
       FORMULARIO:"CAEs/BOE-A-2024-14816.pdf",
       CARPETA:"CAES"
    },
    {
       FICHA:"TER280: Sustitución de bomba por otra más eficiente",
       CODIGO:"TER280",
       VERSION:"V1.1",
       SECTOR:"Terciario",
       PAGI:723,
       PAGF:731,
       FORMULARIO:"CAEs/BOE-A-2024-14816.pdf",
       CARPETA:"CAES"
    },
    {
       FICHA:"RES010: Rehabilitación de la envolvente térmica de edificios de viviendas con superficie afectada mayor del 25 %",
       CODIGO:"RES010",
       VERSION:"V1.1",
       SECTOR:"Residencial",
       PAGI:731,
       PAGF:739,
       FORMULARIO:"CAEs/BOE-A-2024-14816.pdf",
       CARPETA:"CAES"
    },
    {
       FICHA:"RES011: Rehabilitación de la envolvente térmica de edificios de viviendas con superficie afectada mayor del  25 % (Canarias)",
       CODIGO:"RES011",
       VERSION:"V1.1",
       SECTOR:"Residencial",
       PAGI:739,
       PAGF:747,
       FORMULARIO:"CAEs/BOE-A-2024-14816.pdf",
       CARPETA:"CAES"
    },
    {
       FICHA:"RES020: Rehabilitación de la parte opaca de la envolvente térmica de edificios de viviendas con superficie afectada inferior o igual al 25 % de la envolvente térmica final",
       CODIGO:"RES020",
       VERSION:"V1.1",
       SECTOR:"Residencial",
       PAGI:747,
       PAGF:763,
       FORMULARIO:"CAEs/BOE-A-2024-14816.pdf",
       CARPETA:"CAES"
    },
    {
       FICHA:"RES030: Nueva implantación, sustitución o ampliación de instalación térmica en un edificio y piscina con tecnología solar térmica",
       CODIGO:"RES030",
       VERSION:"V1.1",
       SECTOR:"Residencial",
       PAGI:763,
       PAGF:770,
       FORMULARIO:"CAEs/BOE-A-2024-14816.pdf",
       CARPETA:"CAES"
    },
    {
       FICHA:"RES040: Sistema de automatización y control para viviendas y edificios (BACS1)",
       CODIGO:"RES040",
       VERSION:"V1.1",
       SECTOR:"Residencial",
       PAGI:770,
       PAGF:782,
       FORMULARIO:"CAEs/BOE-A-2024-14816.pdf",
       CARPETA:"CAES"
    },
    {
       FICHA:"RES050: Adquisición de frigoríficos de alta eficiencia",
       CODIGO:"RES050",
       VERSION:"V1.1",
       SECTOR:"Residencial",
       PAGI:782,
       PAGF:790,
       FORMULARIO:"CAEs/BOE-A-2024-14816.pdf",
       CARPETA:"CAES"
    },
    {
       FICHA:"RES051: Adquisición de frigorífico-congelador de alta eficiencia",
       CODIGO:"RES051",
       VERSION:"V1.1",
       SECTOR:"Residencial",
       PAGI:790,
       PAGF:798,
       FORMULARIO:"CAEs/BOE-A-2024-14816.pdf",
       CARPETA:"CAES"
    },
    {
       FICHA:"RES052: Adquisición de congelador de alta eficiencia",
       CODIGO:"RES052",
       VERSION:"V1.1",
       SECTOR:"Residencial",
       PAGI:798,
       PAGF:806,
       FORMULARIO:"CAEs/BOE-A-2024-14816.pdf",
       CARPETA:"CAES"
    },
    {
       FICHA:"RES053: Adquisición de lavadoras de alta eficiencia",
       CODIGO:"RES053",
       VERSION:"V1.1",
       SECTOR:"Residencial",
       PAGI:806,
       PAGF:814,
       FORMULARIO:"CAEs/BOE-A-2024-14816.pdf",
       CARPETA:"CAES"
    },
    {
       FICHA:"RES054: Adquisición de lavavajillas de alta eficiencia",
       CODIGO:"RES054",
       VERSION:"V1.1",
       SECTOR:"Residencial",
       PAGI:814,
       PAGF:822,
       FORMULARIO:"CAEs/BOE-A-2024-14816.pdf",
       CARPETA:"CAES"
    },
    {
       FICHA:"RES060: Sustitución de caldera de combustión por una bomba de calor de accionamiento eléctrico.",
       CODIGO:"RES060",
       VERSION:"V1.1",
       SECTOR:"Residencial",
       PAGI:822,
       PAGF:839,
       FORMULARIO:"CAEs/BOE-A-2024-14816.pdf",
       CARPETA:"CAES"
    },
    {
       FICHA:"RES070: Renovación o sustitución de ventanas en edificios de viviendas",
       CODIGO:"RES070",
       VERSION:"V1.1",
       SECTOR:"Residencial",
       PAGI:839,
       PAGF:847,
       FORMULARIO:"CAEs/BOE-A-2024-14816.pdf",
       CARPETA:"CAES"
    },
    {
       FICHA:"RES071: Renovación o sustitución de ventanas en edificios de viviendas (Canarias)",
       CODIGO:"RES071",
       VERSION:"V1.1",
       SECTOR:"Residencial",
       PAGI:847,
       PAGF:855,
       FORMULARIO:"CAEs/BOE-A-2024-14816.pdf",
       CARPETA:"CAES"
    },
    {
       FICHA:"RES080: Rehabilitación profunda de edificios de viviendas",
       CODIGO:"RES080",
       VERSION:"V1.1",
       SECTOR:"Residencial",
       PAGI:855,
       PAGF:861,
       FORMULARIO:"CAEs/BOE-A-2024-14816.pdf",
       CARPETA:"CAES"
    },
    {
       FICHA:"RES090: Hibridación en modo paralelo de caldera/s de combustión con bomba de calor de accionamiento eléctrico en edificios residenciales ubicados en la zona climática A3 o A4",
       CODIGO:"RES090",
       VERSION:"V1.1",
       SECTOR:"Residencial",
       PAGI:861,
       PAGF:874,
       FORMULARIO:"CAEs/BOE-A-2024-14816.pdf",
       CARPETA:"CAES"
    },
    {
       FICHA:"RES091: Hibridación en modo paralelo de caldera/s de combustión con bomba de calor de accionamiento eléctrico en edificios residenciales ubicados en la zona climática B3 o B4",
       CODIGO:"RES091",
       VERSION:"V1.1",
       SECTOR:"Residencial",
       PAGI:874,
       PAGF:886,
       FORMULARIO:"CAEs/BOE-A-2024-14816.pdf",
       CARPETA:"CAES"
    },
    {
       FICHA:"RES092: Hibridación en modo paralelo de caldera/s de combustión con bomba de calor de accionamiento eléctrico en edificios residenciales ubicados en la zona climática C1, C2, C3 o C4",
       CODIGO:"RES092",
       VERSION:"V1.1",
       SECTOR:"Residencial",
       PAGI:886,
       PAGF:898,
       FORMULARIO:"CAEs/BOE-A-2024-14816.pdf",
       CARPETA:"CAES"
    },
    {
       FICHA:"RES093: Hibridación en modo paralelo de caldera/s de combustión con bomba de calor de accionamiento eléctrico en edificios residenciales ubicados en la zona climática D1, D2 o D3",
       CODIGO:"RES093",
       VERSION:"V1.1",
       SECTOR:"Residencial",
       PAGI:898,
       PAGF:910,
       FORMULARIO:"CAEs/BOE-A-2024-14816.pdf",
       CARPETA:"CAES"
    },
    {
       FICHA:"RES094: Hibridación en modo paralelo de caldera/s de combustión con bomba de calor de accionamiento eléctrico en edificios residenciales ubicados en la zona climática E1",
       CODIGO:"RES094",
       VERSION:"V1.1",
       SECTOR:"Residencial",
       PAGI:910,
       PAGF:922,
       FORMULARIO:"CAEs/BOE-A-2024-14816.pdf",
       CARPETA:"CAES"
    },
    {
       FICHA:"RES095: Hibridación en modo paralelo de caldera/s de combustión con bomba de calor de accionamiento eléctrico en edificios residenciales ubicados en la zona climática A3 o A4",
       CODIGO:"RES095",
       VERSION:"V1.1",
       SECTOR:"Residencial",
       PAGI:922,
       PAGF:934,
       FORMULARIO:"CAEs/BOE-A-2024-14816.pdf",
       CARPETA:"CAES"
    },
    {
       FICHA:"RES096: Hibridación en modo paralelo de caldera/s de combustión con bomba de calor de accionamiento eléctrico en edificios residenciales ubicados en la zona climática B3 o B4",
       CODIGO:"RES096",
       VERSION:"V1.1",
       SECTOR:"Residencial",
       PAGI:934,
       PAGF:946,
       FORMULARIO:"CAEs/BOE-A-2024-14816.pdf",
       CARPETA:"CAES"
    },
    {
       FICHA:"RES097: Hibridación en modo paralelo de caldera/s de combustión con bomba de calor de accionamiento eléctrico en edificios residenciales ubicados en la zona climática C1, C2, C3 o C4",
       CODIGO:"RES097",
       VERSION:"V1.1",
       SECTOR:"Residencial",
       PAGI:946,
       PAGF:958,
       FORMULARIO:"CAEs/BOE-A-2024-14816.pdf",
       CARPETA:"CAES"
    },
    {
       FICHA:"RES098: Hibridación en modo paralelo de caldera/s de combustión con bomba de calor de accionamiento eléctrico en edificios residenciales ubicados en la zona climática D1, D2 o D3",
       CODIGO:"RES098",
       VERSION:"V1.1",
       SECTOR:"Residencial",
       PAGI:958,
       PAGF:970,
       FORMULARIO:"CAEs/BOE-A-2024-14816.pdf",
       CARPETA:"CAES"
    },
    {
       FICHA:"RES099: Hibridación en modo paralelo de caldera/s de combustión con bomba de calor de accionamiento eléctrico en edificios residenciales ubicados en la zona climática E1",
       CODIGO:"RES099",
       VERSION:"V1.1",
       SECTOR:"Residencial",
       PAGI:970,
       PAGF:982,
       FORMULARIO:"CAEs/BOE-A-2024-14816.pdf",
       CARPETA:"CAES"
    },
    {
       FICHA:"RES210: Sustitución de calderas individuales/colectiva en edificio residencial por conexión a una red de calor",
       CODIGO:"RES210",
       VERSION:"V1.1",
       SECTOR:"Residencial",
       PAGI:982,
       PAGF:990,
       FORMULARIO:"CAEs/BOE-A-2024-14816.pdf",
       CARPETA:"CAES"
    },
    {
       FICHA:"RES220: Sustitución de un sistema de ventilación existente (natural o mecánica) por un sistema de ventilación mecánica controlada de doble flujo con recuperación de calor",
       CODIGO:"RES220",
       VERSION:"V1.1",
       SECTOR:"Residencial",
       PAGI:990,
       PAGF:1002,
       FORMULARIO:"CAEs/BOE-A-2024-14816.pdf",
       CARPETA:"CAES"
    },
    {
       FICHA:"RES230: Sustitución de sistema de ventilación existente (natural o mecánica) por un sistema de ventilación mecánica controlada de simple flujo higrorregulable",
       CODIGO:"RES230",
       VERSION:"V1.1",
       SECTOR:"Residencial",
       PAGI:1002,
       PAGF:1012,
       FORMULARIO:"CAEs/BOE-A-2024-14816.pdf",
       CARPETA:"CAES"
    },
    {
       FICHA:"RES010S: Rehabilitación de la envolvente térmica de edificios de viviendas con superficie afectada mayor del 25%, para la lucha contra la pobreza energética",
       CODIGO:"RES010S",
       VERSION:"V1.1",
       SECTOR:"Residencial",
       PAGI:1012,
       PAGF:1018,
       FORMULARIO:"CAEs/BOE-A-2024-14816.pdf",
       CARPETA:"CAES"
    },
    {
       FICHA:"RES011S: Rehabilitación de la envolvente térmica de edificios de vivienda con superficie afectada mayor del 25 % (Canarias), para la lucha contra la pobreza energética",
       CODIGO:"RES011S",
       VERSION:"V1.1",
       SECTOR:"Residencial",
       PAGI:1018,
       PAGF:1024,
       FORMULARIO:"CAEs/BOE-A-2024-14816.pdf",
       CARPETA:"CAES"
    },
    {
       FICHA:"RES020S: Rehabilitación de la parte opaca de la envolvente térmica de edificios de viviendas con superficie afectada inferior o igual al 25 % de la envolvente térmica final, para la lucha contra la pobreza energética",
       CODIGO:"RES020S",
       VERSION:"V1.1",
       SECTOR:"Residencial",
       PAGI:1024,
       PAGF:1030,
       FORMULARIO:"CAEs/BOE-A-2024-14816.pdf",
       CARPETA:"CAES"
    },
    {
       FICHA:"RES021S: Rehabilitación de la parte opaca de la envolvente térmica de edificios de viviendas con superficie afectada inferior o igual al 25 % de la envolvente térmica final (Canarias), para la lucha contra la pobreza energética",
       CODIGO:"RES021S",
       VERSION:"V1.1",
       SECTOR:"Residencial",
       PAGI:1030,
       PAGF:1036,
       FORMULARIO:"CAEs/BOE-A-2024-14816.pdf",
       CARPETA:"CAES"
    },
    {
       FICHA:"RES030S: Nueva implantación, sustitución o ampliación de instalación térmica en un edificio y piscina con tecnología solar térmica, para la lucha contra la pobreza energética",
       CODIGO:"RES030S",
       VERSION:"V1.1",
       SECTOR:"Residencial",
       PAGI:1036,
       PAGF:1042,
       FORMULARIO:"CAEs/BOE-A-2024-14816.pdf",
       CARPETA:"CAES"
    },
    {
       FICHA:"RES040S: Sistema de automatización y control para viviendas y edificios (BACS1), para la lucha contra la pobreza energética",
       CODIGO:"RES040S",
       VERSION:"V1.1",
       SECTOR:"Residencial",
       PAGI:1042,
       PAGF:1048,
       FORMULARIO:"CAEs/BOE-A-2024-14816.pdf",
       CARPETA:"CAES"
    },
    {
       FICHA:"RES050S: Adquisición de frigoríficos de alta eficiencia, para la lucha contra la pobreza energética",
       CODIGO:"RES050S",
       VERSION:"V1.1",
       SECTOR:"Residencial",
       PAGI:1048,
       PAGF:1054,
       FORMULARIO:"CAEs/BOE-A-2024-14816.pdf",
       CARPETA:"CAES"
    },
    {
       FICHA:"RES051S: Adquisición de frigorífico-congelador de alta eficiencia, para la lucha contra la pobreza energética",
       CODIGO:"RES051S",
       VERSION:"V1.1",
       SECTOR:"Residencial",
       PAGI:1054,
       PAGF:1060,
       FORMULARIO:"CAEs/BOE-A-2024-14816.pdf",
       CARPETA:"CAES"
    },
    {
       FICHA:"RES052S: Adquisición de congelador de alta eficiencia, para la lucha contra la pobreza energética",
       CODIGO:"RES052S",
       VERSION:"V1.1",
       SECTOR:"Residencial",
       PAGI:1060,
       PAGF:1066,
       FORMULARIO:"CAEs/BOE-A-2024-14816.pdf",
       CARPETA:"CAES"
    },
    {
       FICHA:"RES053S: Adquisición de lavadoras de alta eficiencia, para la lucha contra la pobreza energética",
       CODIGO:"RES053S",
       VERSION:"V1.1",
       SECTOR:"Residencial",
       PAGI:1066,
       PAGF:1072,
       FORMULARIO:"CAEs/BOE-A-2024-14816.pdf",
       CARPETA:"CAES"
    },
    {
       FICHA:"RES054S: Adquisición de lavavajillas de alta eficiencia, para la lucha contra la pobreza energética",
       CODIGO:"RES054S",
       VERSION:"V1.1",
       SECTOR:"Residencial",
       PAGI:1072,
       PAGF:1078,
       FORMULARIO:"CAEs/BOE-A-2024-14816.pdf",
       CARPETA:"CAES"
    },
    {
       FICHA:"RES060S: Sustitución de caldera combustible fósil por una bomba de calor tipo aire-aire o aire-agua, para la lucha contra la pobreza energética",
       CODIGO:"RES060S",
       VERSION:"V1.1",
       SECTOR:"Residencial",
       PAGI:1078,
       PAGF:1084,
       FORMULARIO:"CAEs/BOE-A-2024-14816.pdf",
       CARPETA:"CAES"
    },
    {
       FICHA:"RES070S: Renovación o sustitución de ventanas en edificios de viviendas, para la lucha contra la pobreza energética",
       CODIGO:"RES070S",
       VERSION:"V1.1",
       SECTOR:"Residencial",
       PAGI:1084,
       PAGF:1090,
       FORMULARIO:"CAEs/BOE-A-2024-14816.pdf",
       CARPETA:"CAES"
    },
    {
       FICHA:"RES071S: Renovación o sustitución de ventanas en edificios de viviendas (Canarias), para la lucha contra la pobreza energética",
       CODIGO:"RES071S",
       VERSION:"V1.1",
       SECTOR:"Residencial",
       PAGI:1090,
       PAGF:1096,
       FORMULARIO:"CAEs/BOE-A-2024-14816.pdf",
       CARPETA:"CAES"
    },
    {
       FICHA:"RES080S: Rehabilitación profunda de un edificio de viviendas, para la lucha contra la pobreza energética",
       CODIGO:"RES080S",
       VERSION:"V1.1",
       SECTOR:"Residencial",
       PAGI:1096,
       PAGF:1102,
       FORMULARIO:"CAEs/BOE-A-2024-14816.pdf",
       CARPETA:"CAES"
    },
    {
       FICHA:"TRA010: Sustitución en vehículos a motor de sus neumáticos por otros de mayor eficiencia energética",
       CODIGO:"TRA010",
       VERSION:"V1.1",
       SECTOR:"Transporte",
       PAGI:1102,
       PAGF:1111,
       FORMULARIO:"CAEs/BOE-A-2024-14816.pdf",
       CARPETA:"CAES"
    },
    {
       FICHA:"TRA020: Sistema de telemetría y geoposicionamiento en flota de transporte",
       CODIGO:"TRA020",
       VERSION:"V1.1",
       SECTOR:"Transporte",
       PAGI:1111,
       PAGF:1122,
       FORMULARIO:"CAEs/BOE-A-2024-14816.pdf",
       CARPETA:"CAES"
    },
    {
       FICHA:"TRA030: Vehículo compartido en trayectos de largo recorrido",
       CODIGO:"TRA030",
       VERSION:"V1.1",
       SECTOR:"Transporte",
       PAGI:1122,
       PAGF:1132,
       FORMULARIO:"CAEs/BOE-A-2024-14816.pdf",
       CARPETA:"CAES"
    },
    {
       FICHA:"TRA040: Movilidad colaborativa urbana y metropolitana",
       CODIGO:"TRA040",
       VERSION:"V1.1",
       SECTOR:"Transporte",
       PAGI:1132,
       PAGF:1142,
       FORMULARIO:"CAEs/BOE-A-2024-14816.pdf",
       CARPETA:"CAES"
    },
    {
       FICHA:"TRA050: Sustitución de vehículo de combustión por un vehículo eléctrico puro",
       CODIGO:"TRA050",
       VERSION:"V1.1",
       SECTOR:"Transporte",
       PAGI:1142,
       PAGF:1146,
       FORMULARIO:"CAEs/BOE-A-2024-14816.pdf",
       CARPETA:"CAES"
    },
    {
       FICHA:"AGR000: SINGULAR",
       CODIGO:"SOL070",
       VERSION:null,
       SECTOR:"Agrario",
       PAGI:8,
       PAGF:9,
       FORMULARIO:"Modelos de informe Real Decreto 477|2021/2022_02_08-Informe_80__Consumo_RD477.pdf",
       CARPETA:"FV"
    },
    {
       FICHA:"IND000: SINGULAR",
       CODIGO:"SOL070",
       VERSION:null,
       SECTOR:"Industrial",
       PAGI:8,
       PAGF:9,
       FORMULARIO:"Modelos de informe Real Decreto 477|2021/2022_02_08-Informe_80__Consumo_RD477.pdf",
       CARPETA:"FV"
    },
    {
       FICHA:"RES000: SINGULAR",
       CODIGO:"SOL070",
       VERSION:null,
       SECTOR:"Residencial",
       PAGI:8,
       PAGF:9,
       FORMULARIO:"Modelos de informe Real Decreto 477|2021/2022_02_08-Informe_80__Consumo_RD477.pdf",
       CARPETA:"FV"
    },
    {
       FICHA:"TER000: SINGULAR",
       CODIGO:"SOL070",
       VERSION:null,
       SECTOR:"Terciario",
       PAGI:8,
       PAGF:9,
       FORMULARIO:"Modelos de informe Real Decreto 477|2021/2022_02_08-Informe_80__Consumo_RD477.pdf",
       CARPETA:"FV"
    },
    {
       FICHA:"TRA000: SINGULAR",
       CODIGO:"SOL070",
       VERSION:null,
       SECTOR:"Transporte",
       PAGI:8,
       PAGF:9,
       FORMULARIO:"Modelos de informe Real Decreto 477|2021/2022_02_08-Informe_80__Consumo_RD477.pdf",
       CARPETA:"FV"
    }
];

export default data;