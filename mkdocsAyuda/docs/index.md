---
hide:
  - footer
---



# Certificado de Ahorro Energético (CAE)


=== "Qué es [^1]"
    Un Certificado de Ahorro Energético (CAE) es un documento electrónico que garantiza que, tras llevar a cabo una actuación de eficiencia energética, se ha conseguido un nuevo ahorro de energía final equivalente a 1 kWh. 
    
    De esta forma, si se acomete una actuación que implica un nuevo ahorro anual de 500 kWh, se podrán obtener 500 CAE.


    Este instrumento permite monetizar los ahorros energéticos, recuperando parte del coste de las inversiones en eficiencia energética 
    (cambio de iluminación, mejora del aislamiento térmico, renovación de equipos industriales o domésticos, etc.), ya que el 
    usuario final podrá recibir una contraprestación si vende los ahorros obtenidos para su posterior certificación mediante el Sistema de CAE.

=== "Claves"
    - Los sujetos obligados,comercializadoras y operadores en el ambito energetico, en funcion de su volumen de ventas, tienen que aportar {++anualmente  una contribucion++} al Fondo Nacional de Eficiencia Energética (FNEE)  o {++ 'alternativamente' ++},  presentar certificados de ahorro energético con una antiguedad maxima de 3 años.
    
    - En la [Orden TED/268/2024. Primero. Obligaciones de ahorro de energía final y equivalencia financiera en 2024.](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2024-5841) [^2] se establece la equivalencia financiera para el año 2024  en 182.373,17 euros por GWh ahorrado 
    

=== "mecAE ? "

    mecAE actua en el mercado primario facilitando el contacto entre los propietarios de los ahorros energéticos y los sujetos obligados o delegados.
        ```mermaid
        sequenceDiagram
            participant Oferta
            participant Ahorrro Energético
            participant Puja
            participant Demanda
            Oferta->>Ahorrro Energético: Ahorrro Energético
            Ahorrro Energético->>Demanda: Ahorrro Energético creado
            Demanda->>Puja: Puja
            Puja->>Oferta: Puja creada
            Oferta->>Puja: acepta Puja
            Puja->>Demanda: Puja aceptada
                Note left of Demanda: Datos Ofertante
        ```

=== " "

    :material-hospital-building:{ style="display: flex; justify-content: center;  font-size: 66px; color: green;" }
    :fontawesome-solid-tractor:{ style="display: flex; justify-content: center;  font-size: 66px; color: green;" }
    :material-train-car:{ style="display: flex; justify-content: center;  font-size: 66px; color: green;" }
    :material-factory:{ style="display: flex; justify-content: center;  font-size: 66px; color: green;" }
    :material-home-city:{ style="display: flex; justify-content: center;  font-size: 66px; color: green;" }

[^3]: [Presentación general sistema CAE.](https://www.miteco.gob.es/content/dam/miteco/es/energia/files-1/Eficiencia/CAE/Documents/20230807_Presentacion-Sistema-CAE-web.pdf)
[^4]: [Sede electrónica.](https://sede.miteco.gob.es/portal/site/seMITECO/BuscadorPortlet?texto_simple=Sistema+de+CAE)
[^1]:[Real Decreto 36/2023, de 24 de enero, por el que se establece un sistema de Certificados de Ahorro Energético.](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2023-2027)
[^2]: [Orden TED/268/2024, de 20 de marzo, por la que se establecen las obligaciones de ahorro energético, ...](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2024-5841)



