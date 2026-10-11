"""Regenerate the public CV: python3 -m pip install reportlab; python3 scripts/create_cv.py."""
from pathlib import Path
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_LEFT
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer
from reportlab.lib.pagesizes import A4

output = Path(__file__).resolve().parents[1] / 'public/cv-rafael-chuco.pdf'
styles = getSampleStyleSheet()
styles.add(ParagraphStyle(name='NameCV', fontName='Helvetica-Bold', fontSize=23, leading=27, textColor=colors.HexColor('#30234f'), spaceAfter=8))
styles.add(ParagraphStyle(name='SectionCV', fontName='Helvetica-Bold', fontSize=11, leading=14, textColor=colors.HexColor('#6430b5'), spaceBefore=14, spaceAfter=6))
styles.add(ParagraphStyle(name='BodyCV', fontName='Helvetica', fontSize=9, leading=13, spaceAfter=5))
styles.add(ParagraphStyle(name='RoleCV', fontName='Helvetica-Bold', fontSize=9.5, leading=13, spaceAfter=3))
story=[]
def p(text, style='BodyCV'): story.append(Paragraph(text,styles[style]))
def section(title): p(title,'SectionCV')
p('Rafael Diego Chuco Yantas','NameCV')
p('Software Developer · AI &amp; Automation · SAP','RoleCV')
p('Lima, Perú · +51 927 395 280 · <link href="mailto:rafael.chuco1908@gmail.com">rafael.chuco1908@gmail.com</link>')
p('<link href="https://www.linkedin.com/in/rafael-chuco/">linkedin.com/in/rafael-chuco</link> · <link href="https://github.com/rafaelchuco">github.com/rafaelchuco</link>')
section('PERFIL Y OBJETIVO')
p('Estudiante de Diseño y Desarrollo de Software en TECSUP, enfocado en inteligencia artificial, automatización y desarrollo de soluciones empresariales. Busco especializarme en agentes y soluciones inteligentes que optimicen procesos empresariales y se integren con plataformas como SAP.')
section('FORMACIÓN')
p('Diseño y Desarrollo de Software - TECSUP · VI ciclo','RoleCV')
p('Lima, Perú')
section('EXPERIENCIA PROFESIONAL')
p('Practicante SAP Digital - NTT DATA Europe &amp; Latam','RoleCV')
p('Marzo 2026 - Actualidad · Lima, Perú · Híbrido')
p('Automatización de pruebas de aplicaciones SAP Fiori; desarrollo y análisis ABAP; generación automatizada de evidencias; exploración de SAP BTP, IA y HANA Cloud.')
p('Desarrollador de aplicaciones para móviles - Chiru MarketPlace','RoleCV')
p('Diciembre 2025 - Marzo 2026 · Apps móviles con React Native.')
p('Desarrollador Front-end - Chiru MarketPlace','RoleCV')
p('Abril 2025 - Diciembre 2025 · React.js y diseño web adaptable.')
section('PROYECTOS REPRESENTATIVOS')
p('<b>Automation Manager:</b> automatización de casos de prueba SAP con Java, Playwright y Cucumber, con generación de evidencias.')
p('<b>NTT DATA Accessible Assistant:</b> propuesta de asistencia accesible para aplicaciones SAP Fiori con Electron y TypeScript.')
p('<b>LingoDate:</b> proyecto académico de investigación y UX sobre barreras lingüísticas en conversaciones.')
section('LIDERAZGO Y COMUNIDAD')
p('<b>LEAD TECSUP:</b> Presidente · Diciembre 2025 - Actualidad. Coordinación de iniciativas académicas y tecnológicas.')
p('<b>IEEE Computer Society TECSUP:</b> Director de RR.HH. · Agosto 2025 - Actualidad.')
p('<b>IEEE ComSoc TECSUP:</b> Voluntario de Alianzas Estratégicas · Marzo 2026 - Actualidad.')
section('COMPETENCIAS')
p('<b>Técnicas:</b> Inteligencia Artificial, automatización, SAP BTP, ABAP, SAP Fiori, Python, Java, Playwright, Git/GitHub, React, Next.js y TypeScript.')
p('<b>Personales:</b> liderazgo, trabajo en equipo, comunicación, resolución de problemas, adaptabilidad y aprendizaje continuo.')
SimpleDocTemplate(str(output), pagesize=A4, rightMargin=42,leftMargin=42,topMargin=35,bottomMargin=35,title='CV - Rafael Diego Chuco Yantas',author='Rafael Diego Chuco Yantas').build(story)
print(output)
