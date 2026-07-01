# Sistema Comercial B2B — Sansatel Asesoras

> Diseñado para: asesora independiente de telecom, energía, ciberseguridad e IA  
> Zona: provincia de Tarragona + Barcelona Sur  
> Perfil de cliente ideal: pymes 1–40 empleados, acceso directo al gerente  
> Herramientas disponibles: LinkedIn, n8n, CRM en construcción  
> Tiempo disponible: 2 horas/día para prospección  

---

## Diagnóstico inicial

**Problema central:** No hay un sistema que genere oportunidades nuevas de forma constante. La red de contactos se ha agotado parcialmente y sin prospección activa el pipeline se vacía.

**Tres puntos débiles identificados:**
1. Pocas oportunidades entrando al embudo
2. Dificultad para llegar al decisor (el gerente directamente)
3. Cierre débil: oportunidades que se enfrían sin seguimiento

**Consecuencia directa:** Ciclo de fiesta/hambre. Vendes bien hasta enero, luego 5 meses sin empresa grande.

---

## El sistema en una frase

> Encontrar cada semana 10 empresas que encajan con tu perfil ideal, contactarlas de forma personalizada sin llamadas en frío, y hacer seguimiento sistemático hasta cerrar o descartar.

---

## 1. Flujo de prospección semanal

### Distribución de las 10 horas semanales

| Día | Actividad | Tiempo |
|-----|-----------|--------|
| Lunes | Revisión pipeline + planificación semanal | 1h |
| Martes | Búsqueda y calificación de nuevas empresas | 2h |
| Miércoles | Contacto LinkedIn + emails personalizados | 2h |
| Jueves | Visitas agrupadas por zona (campo) | Variable |
| Viernes | Actualización CRM + KPIs semanales | 1h |
| Diario | Follow-ups activos (recordatorios automáticos n8n) | 30min |

### Objetivo semanal mínimo
- 10 empresas nuevas identificadas
- 5 contactadas (LinkedIn o email)
- 2 respuestas o conversaciones activas
- 1 reunión agendada

---

## 2. Dónde encontrar empresas con alta probabilidad de comprar

### Fuentes de prospección (gratuitas o bajo coste)

**Google Maps + Google My Business**
- Busca por sector + zona: "gestoría Tarragona", "taller mecánico Reus", "clínica dental Cambrils"
- Empresas con ficha incompleta, pocas reseñas o web obsoleta = señal de que no tienen apoyo tecnológico
- Herramienta: búsqueda manual o automatización con n8n + SerpAPI

**LinkedIn**
- Filtra por: ubicación (Tarragona, Baix Camp, Baix Llobregat), tamaño empresa (1–50 empleados), cargo (gerente, propietario, CEO, director)
- Fíjate en quién cambia de empresa, quién publica sobre crecimiento, quién menciona problemas de conectividad o costes

**BORME (Boletín Oficial del Registro Mercantil)**
- Empresas de nueva constitución en Tarragona = necesitan todo: telecom, energía, ciberseguridad
- Automatizable con n8n: scraping diario de nuevas sociedades en provincia Tarragona

**Cambra de Comerç Tarragona**
- Directorio de empresas asociadas, ferias y eventos locales
- Contacto cálido: "te vi en la feria de la Cambra"

**Infobel / Páginas Amarillas / Kompass**
- Búsqueda por sector + código postal
- Exportable a CSV para cargar en CRM

**Infojobs / LinkedIn ofertas de empleo**
- Empresa que contrata = empresa que crece = empresa que necesita más líneas, más ancho de banda, revisión de costes

---

## 3. Señales de compra: cuándo es el momento

| Señal | Qué significa | Acción |
|-------|---------------|--------|
| Empresa nueva (BORME) | Necesita contratar todo | Contacto inmediato |
| Contratando personal | Creciendo, necesitan más servicios | Propuesta de revisión telecom |
| Web obsoleta o sin móvil | Sin apoyo tecnológico, gerente accesible | Entrada por asesoramiento digital |
| Mudanza de local | Nuevo contrato de fibra, revisión energía | Contacto justo antes o durante |
| Cambio de gerente/propietario | Nuevo responsable quiere revisar costes | Primera impresión favorable |
| Reseñas negativas sobre atención | Problemas de servicio actuales | "Puedo mejorar vuestra conectividad" |
| Lleva +24 meses con mismo operador | Contrato probablemente fuera de precio | Auditoría gratuita como entrada |
| Publicaciones sobre "reducir costes" | Dolor explícito | Contacto directo con solución |

---

## 4. Herramientas de IA por fase

| Fase | Herramienta | Para qué |
|------|-------------|----------|
| Búsqueda | Perplexity / ChatGPT + búsqueda web | Investigar empresa antes de contactar |
| Calificación | ChatGPT con prompt estructurado | Puntuar leads según criterios |
| Redacción contacto | Claude / ChatGPT | Escribir mensajes personalizados en LinkedIn/email |
| Preparación llamada | Claude con ficha empresa | Briefing en 2 minutos antes de llamar |
| Seguimiento | n8n + LLM | Recordatorios y resúmenes automáticos |
| Cierre | Claude | Preparar propuesta y anticipar objeciones |

---

## 5. Automatización con n8n: los tres flujos que más valor aportan

### Flujo 1: Alerta BORME — Empresas nuevas en Tarragona
```
Trigger: Cron diario (8:00)
→ Scraping BORME provincia Tarragona
→ Filtro: sociedades limitadas y anónimas
→ Enriquecimiento: busca web + teléfono en Google
→ Si tiene web y teléfono → crea registro en CRM (estado: "nuevo")
→ Notificación en Telegram/email con listado del día
```

### Flujo 2: Briefing automático antes de llamar
```
Trigger: manual (das nombre y web de empresa)
→ Scraping web empresa
→ Búsqueda LinkedIn del gerente
→ Google: "nombre empresa" + noticias recientes
→ ChatGPT: resume en 5 puntos clave + posibles dolores
→ Te envía el briefing por Telegram antes de marcar
```

### Flujo 3: Seguimiento automático sin olvidar nadie
```
Trigger: Cron diario (9:00)
→ Consulta CRM: leads con "próxima acción" = hoy o pasado
→ Para cada uno: genera recordatorio con contexto (última conversación, qué prometiste)
→ Envía lista diaria de seguimientos pendientes por Telegram
```

---

## 6. Sistema de puntuación de leads (priorización)

Puntúa cada lead antes de invertir tiempo. De 0 a 10:

| Criterio | Puntos |
|----------|--------|
| Acceso directo al gerente (sin secretaria) | +3 |
| Empresa en zona de visita planificada | +2 |
| Señal de compra activa (nueva, creciendo, mudanza) | +2 |
| Web obsoleta o sin presencia digital | +1 |
| Lleva +24 meses con mismo operador | +1 |
| Sector donde ya tienes cliente (referencia posible) | +1 |

**Prioridad alta:** 7–10 puntos → contactar esta semana  
**Prioridad media:** 4–6 puntos → contactar próxima semana  
**Prioridad baja:** 0–3 puntos → archivar o descartar  

---

## 7. Protocolo de contacto (sin llamadas en frío)

### Secuencia recomendada

**Paso 1 — LinkedIn (día 1)**
Conecta con el gerente. Mensaje de conexión sin vender:
> "Hola [nombre], soy asesora de telecomunicaciones y tecnología para pymes en Tarragona. Te sigo porque trabajo con empresas del sector [sector]. Un placer conectar."

**Paso 2 — Mensaje valor (día 3, si acepta)**
> "Hola [nombre], trabajo con pymes de la zona ayudándoles a revisar sus contratos de telecom y reducir costes sin cambiar de servicio. En muchos casos encontramos entre 100 y 300€ mensuales de ahorro. ¿Te haría sentido hacer una revisión rápida sin compromiso?"

**Paso 3 — Email o llamada (día 7, si no responde)**
Solo si tienes el teléfono o email del gerente directamente. No a través de recepción.

**Paso 4 — Seguimiento (día 14)**
Comparte algo útil: artículo, dato de sector, caso de éxito anonimizado.

**Paso 5 — Cierre o descarte (día 30)**
Si no hay respuesta tras 4 contactos → archivar y revisar en 6 meses.

### Producto de entrada recomendado
**No uses energía como primer contacto.** Está saturado y genera rechazo inmediato.

Usa en su lugar:
> "Auditoría gratuita de tus contratos de telecom. Sin compromiso. Te digo en 15 minutos si estás pagando de más."

Es una propuesta de valor clara, sin riesgo para el cliente, y te mete dentro. La energía, ciberseguridad e IA vienen después.

---

## 8. Optimización de desplazamientos por zonas

### Zonas de visita

| Zona | Municipios | Día recomendado |
|------|-----------|-----------------|
| A | Tarragona capital | Cualquier día (base) |
| B | Reus, Cambrils, Salou, Vila-seca | Martes o miércoles |
| C | Valls, Alcover, El Vendrell, Torredembarra | Jueves |
| D | Tortosa, Amposta, l'Hospitalet de l'Infant | Viernes (combinar 3–4 visitas) |
| E | Baix Llobregat, Garraf (Vilafranca, Vilanova) | Solo si tienes 3+ visitas confirmadas |

### Regla de rentabilidad
No hagas un desplazamiento de más de 30 km para menos de 2 visitas confirmadas. Usa LinkedIn y videollamada para la primera reunión si la empresa está lejos.

### En n8n: agrupador de visitas
```
Cuando agendas una visita en CRM:
→ Consulta otras empresas en la misma zona con "próxima acción pendiente"
→ Sugiere contactarlas para agrupar el desplazamiento
```

---

## 9. CRM sencillo y eficaz

### Estructura mínima (Airtable recomendado, integra bien con n8n)

**Tabla: Empresas**
- Nombre empresa
- Sector
- Zona (A/B/C/D/E)
- Nº empleados estimado
- Web
- Nombre gerente
- Teléfono directo gerente
- LinkedIn gerente
- Puntuación lead (0–10)
- Fuente (BORME, LinkedIn, referido, Google Maps...)
- Señal de compra detectada

**Tabla: Contactos / Seguimiento**
- Empresa (vinculada)
- Estado: Nuevo → Contactado → Conversación activa → Propuesta enviada → Cerrado / Perdido / Pausado
- Fecha último contacto
- Próxima acción
- Fecha próxima acción
- Notas de la conversación
- Servicio de interés (telecom, energía, ciber, IA)

**Tabla: Ventas cerradas**
- Empresa
- Servicio vendido
- Operador
- Fecha cierre
- Recurrencia mensual estimada
- Fecha revisión (para upsell)

### Estados del pipeline y qué hacer en cada uno

| Estado | Acción |
|--------|--------|
| Nuevo | Calificar y puntuar |
| Contactado | Esperar respuesta, seguimiento en 3 días |
| Conversación activa | Agendar reunión o llamada |
| Propuesta enviada | Seguimiento en 48h, preparar respuesta a objeciones |
| Cerrado | Onboarding + pedir referido |
| Perdido | Archivar con motivo, revisar en 6 meses |
| Pausado | Recordatorio automático según fecha indicada |

---

## 10. Sistema de seguimiento: que nadie quede olvidado

### Las tres reglas
1. **Cada interacción tiene una próxima acción con fecha.** Sin fecha = se olvida.
2. **Si pasan 7 días sin actividad en un lead activo, n8n te avisa.**
3. **Cada cliente cerrado tiene fecha de revisión a los 12 meses** para proponer mejora o nuevo servicio.

### Secuencia de seguimiento tipo
- Contacto inicial → seguimiento 3 días
- Sin respuesta → seguimiento 7 días (contenido de valor)
- Sin respuesta → seguimiento 14 días (última llamada)
- Sin respuesta → archivar, recordatorio 6 meses
- Con respuesta → reunión → propuesta → seguimiento 48h
- Propuesta enviada → sin respuesta 3 días → llamada

---

## 11. KPIs semanales y mensuales

### Semanales (revisas cada viernes, 15 minutos)

| KPI | Objetivo mínimo |
|-----|----------------|
| Nuevos leads añadidos al CRM | 10 |
| Contactos realizados (LinkedIn/email/llamada) | 5 |
| Respuestas recibidas | 2 |
| Reuniones agendadas | 1 |
| Propuestas enviadas | 1 |

### Mensuales

| KPI | Objetivo |
|-----|----------|
| Nuevos clientes cerrados | 2 |
| Recurrencia mensual generada | +300€ |
| Empresas en "conversación activa" | 5+ |
| Tasa de respuesta a contactos | >20% |
| Coste por kilómetro recorrido vs. cierre | Mínimo 1 cierre por jornada de campo |

### Dashboard en Airtable
Crea una vista de resumen con:
- Pipeline por estado (cuántas empresas en cada fase)
- Próximas acciones esta semana
- Leads sin actividad > 7 días (alerta)
- Ingresos recurrentes cerrados este mes

---

## 12. Plan de implementación: primeras 4 semanas

### Semana 1 — Cimientos
- [ ] Configura Airtable con las tres tablas del CRM
- [ ] Importa tus 4 clientes actuales y contactos pendientes
- [ ] Conecta Airtable con n8n
- [ ] Activa Flujo 3 (recordatorios diarios de seguimiento)

### Semana 2 — Primer prospecting activo
- [ ] Identifica 30 empresas por zona usando Google Maps + LinkedIn
- [ ] Califícalas con la puntuación de leads
- [ ] Contacta las 10 de mayor puntuación por LinkedIn
- [ ] Activa Flujo 1 (alerta BORME)

### Semana 3 — Primeras conversaciones
- [ ] Haz seguimiento de los contactos de la semana 2
- [ ] Prepara tu mensaje de auditoría gratuita de telecom
- [ ] Agenda al menos 2 reuniones (presencial o vídeo)
- [ ] Activa Flujo 2 (briefing automático pre-llamada)

### Semana 4 — Primera jornada de campo optimizada
- [ ] Agrupa visitas en Zona B o C (mínimo 3 en el mismo día)
- [ ] Cierra al menos 1 auditoría gratuita que convierta en propuesta
- [ ] Revisa KPIs de las 4 semanas y ajusta

---

## Punto débil crítico: el cierre

El problema de cierre casi nunca es saber vender. Suele ser uno de estos tres:

1. **No hay urgencia para el cliente** → Crea urgencia real: "la tarifa que te puedo conseguir vence el día X" o "la promoción de Movistar para empresas nuevas es solo este mes"

2. **La propuesta se envía y se olvida** → Nunca envíes una propuesta sin agendar en ese mismo momento una llamada de revisión en 48h: "Te la mando ahora y el jueves a las 10 la revisamos juntos, ¿te va bien?"

3. **Miedo a presionar** → No estás presionando, estás ayudando. Si la empresa paga más de lo necesario, cerrar es hacerles un favor. Cambia el marco mental: no vendes, asesoras.

---

## Resumen ejecutivo

```
LUNES      → Revisar pipeline, planificar semana
MARTES     → Buscar 10 empresas nuevas, calificar, añadir al CRM
MIÉRCOLES  → Contactar 5 por LinkedIn o email
JUEVES     → Visitas de campo (zona agrupada)
VIERNES    → Actualizar CRM, revisar KPIs

DIARIO     → n8n te recuerda los seguimientos pendientes
             n8n te alerta de empresas nuevas en BORME
             n8n te prepara briefing antes de cada llamada
```

**En 90 días, con este sistema, deberías tener:**
- 10–15 empresas en conversación activa
- 4–6 nuevos clientes cerrados
- Pipeline visible y predecible
- Cero leads olvidados
